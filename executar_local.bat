@echo off
chcp 65001 > nul
echo ====================================================
echo   Iniciando Portfólio Digital Localmente...
echo ====================================================
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
    echo Servidor HTTP local iniciado em: http://localhost:8080
    echo Pressione CTRL+C nesta janela para encerrar o servidor.
    start "" "http://localhost:8080"
    python -m http.server 8080
) else (
    echo Abrindo index.html diretamente no navegador padrao...
    start "" "%~dp0index.html"
)

