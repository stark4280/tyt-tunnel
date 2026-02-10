@echo off
chcp 65001 >nul 2>&1
cls

echo ════════════════════════════════════════
echo   THE CITADEL V2 - TYT Hazirlik
echo ════════════════════════════════════════
echo.

REM Node.js kontrolu
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js bulunamadi!
    echo.
    echo Lutfen Node.js yukleyin:
    echo https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo [√] Node.js bulundu
echo.

REM node_modules kontrolu ve kurulum
if not exist "node_modules" (
    echo [*] Bagimliliklari yukluyor...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [X] Kurulum basarisiz!
        pause
        exit /b 1
    )
    echo.
)

REM Port temizleme
netstat -ano | findstr ":5173" >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [*] Port temizleniyor...
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5173"') do taskkill /F /PID %%a >nul 2>nul
    timeout /t 1 >nul
)

echo [*] Sunucu baslatiliyor...
echo.
echo Tarayicida acin: http://localhost:5173
echo.
echo Durdurmak icin: CTRL + C
echo ════════════════════════════════════════
echo.

call npm run dev

pause
