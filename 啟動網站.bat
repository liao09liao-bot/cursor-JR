@echo off
chcp 65001 >nul
echo ========================================
echo 啟動 JR Industrial Mounts 網站
echo ========================================
echo.

echo [步驟 1] 檢查 Node.js 安裝...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js 未安裝！
    echo 請前往 https://nodejs.org/ 安裝 Node.js
    pause
    exit /b 1
)
node --version
echo ✅ Node.js 已安裝
echo.

echo [步驟 2] 檢查依賴是否已安裝...
if not exist node_modules (
    echo 正在安裝依賴...
    call npm install
) else (
    echo ✅ 依賴已安裝
)
echo.

echo [步驟 3] 啟動開發伺服器...
echo.
echo ========================================
echo 網站將在瀏覽器中自動開啟
echo 如果沒有自動開啟，請訪問：
echo http://localhost:5173
echo ========================================
echo.
echo 按 Ctrl + C 可停止伺服器
echo.

call npm run dev

