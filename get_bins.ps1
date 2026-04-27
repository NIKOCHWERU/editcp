$headers = @{ "X-Master-Key" = "$2a$10$VRbDLo1lkx6.UMlkHIcJbeVTcomkPy.AWb1mvvE0Hr9RpIJKVCSy." }
Invoke-RestMethod -Uri "https://api.jsonbin.io/v3/c/bins" -Method Get -Headers $headers
