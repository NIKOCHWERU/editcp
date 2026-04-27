$headers = @{ "X-Master-Key" = "$2a$10$VRbDLo1lkx6.UMlkHIcJbeVTcomkPy.AWb1mvvE0Hr9RpIJKVCSy." ; "Content-Type" = "application/json" }
$body = '{"app":"CV Berkah Jaya Technik"}'
Invoke-RestMethod -Uri "https://api.jsonbin.io/v3/b" -Method Post -Headers $headers -Body $body
