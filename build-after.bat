@Echo Off
For /d /r "./oh-production" %%i in (*) do (Rd /q /s "%%i" 2>nul)
Del /q /a ".\oh-production\*.*"
xcopy /y .\oh\*.* .\oh-production\oh\ /s /e  
move /y ".\oh-production\oh\index*" ".\oh-production\"
