@echo off
cd /d "%~dp0"
echo ===============================================
echo   VARAZI website - local preview
echo   Open this in your browser:
echo       http://localhost:5599
echo   (Close this window to stop the server.)
echo ===============================================
echo.
python serve.py
pause
