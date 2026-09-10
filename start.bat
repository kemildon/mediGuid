@echo off
title MediGuid Hospital Portal
echo ========================================================
echo  MediGuid - Hospital Discharge & WhatsApp Guidance Platform
echo  Opening workstation...
echo ========================================================

where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo Starting Vite local server with automatic browser launch...
    npm run dev -- --open
    goto end
)

where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo Starting with npx vite...
    npx vite --open
    goto end
)

echo Opening index.html directly in your default browser...
start index.html

:end
