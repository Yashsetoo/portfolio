# =============================================================
#  Simple static file server for the portfolio site.
#  Usage:  powershell -ExecutionPolicy Bypass -File serve.ps1
#  Then open:  http://localhost:8080
# =============================================================
param([int]$Port = 8080)

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$prefix = "http://localhost:$Port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
  $listener.Start()
} catch {
  Write-Host "Failed to start on $prefix : $($_.Exception.Message)" -ForegroundColor Red
  exit 1
}

Write-Host "Serving '$root'" -ForegroundColor Cyan
Write-Host "Portfolio running at $prefix  (Ctrl+C to stop)" -ForegroundColor Green

$mime = @{
  ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8";
  ".js"="application/javascript; charset=utf-8"; ".json"="application/json";
  ".svg"="image/svg+xml"; ".png"="image/png"; ".jpg"="image/jpeg";
  ".jpeg"="image/jpeg"; ".gif"="image/gif"; ".ico"="image/x-icon";
  ".pdf"="application/pdf"; ".woff"="font/woff"; ".woff2"="font/woff2";
  ".txt"="text/plain; charset=utf-8"
}

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $reqPath = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($reqPath -eq "/") { $reqPath = "/index.html" }
    $file = Join-Path $root ($reqPath.TrimStart("/") -replace "/", "\")

    if (Test-Path $file -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $ctype = $mime[$ext]; if (-not $ctype) { $ctype = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $total = $bytes.Length

      $ctx.Response.ContentType = $ctype
      $ctx.Response.AddHeader("Accept-Ranges", "bytes")
      # Show PDFs/images inline (open in browser) instead of downloading
      if ($ext -in ".pdf",".png",".jpg",".jpeg",".gif",".svg") {
        $fname = [System.IO.Path]::GetFileName($file)
        $ctx.Response.AddHeader("Content-Disposition", "inline; filename=`"$fname`"")
      }

      # ---- HTTP Range support (needed by browser PDF viewers) ----
      $range = $ctx.Request.Headers["Range"]
      $start = 0; $end = $total - 1
      if ($range -and $range -match "bytes=(\d*)-(\d*)") {
        if ($matches[1] -ne "") { $start = [int]$matches[1] }
        if ($matches[2] -ne "") { $end = [int]$matches[2] }
        if ($end -ge $total) { $end = $total - 1 }
        if ($start -gt $end) { $start = 0 }
        $ctx.Response.StatusCode = 206
        $ctx.Response.AddHeader("Content-Range", "bytes $start-$end/$total")
      }
      $len = $end - $start + 1
      $ctx.Response.ContentLength64 = $len
      $ctx.Response.OutputStream.Write($bytes, $start, $len)
    } else {
      $ctx.Response.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $reqPath")
      $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $ctx.Response.OutputStream.Close()
  } catch {
    # ignore transient client errors
  }
}
