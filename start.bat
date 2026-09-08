@echo off
title MediGuid Frontend Application
echo ========================================================
echo  MediGuid - Client-Side Healthcare Assistant
echo  Running pure frontend in single terminal mode...
echo ========================================================

where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo Starting Vite frontend development server...
    npm run dev
    goto end
)

where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo Starting with npx vite...
    npx vite --open
    goto end
)

echo Node.js/npm not found. Opening index.html directly in your default browser...
start index.html

:end
