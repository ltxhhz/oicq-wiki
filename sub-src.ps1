$date=Get-Date
Set-Location src
git init
git remote add oicq-wiki https://github.com/ltxhhz/oicq-wiki.git
git add .
git commit -m "$($date.Month).$($date.Day)"
git checkout -b page
git push oicq-wiki page -f
Write-Output ‘À––Ω· ¯