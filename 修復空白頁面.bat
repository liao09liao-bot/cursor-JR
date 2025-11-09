@echo off
chcp 65001 >nul
echo ========================================
echo 修復 GitHub Pages 空白頁面問題
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
echo ✅ Node.js 已安裝
echo.

echo [步驟 2] 安裝 gh-pages（如果需要的話）...
call npm install --save-dev gh-pages
echo.

echo [步驟 3] 建置專案...
call npm run build
echo.

echo [步驟 4] 部署到 GitHub Pages...
call npm run deploy
echo.

echo ========================================
echo ✅ 部署完成！
echo ========================================
echo.
echo 接下來請：
echo 1. 前往 GitHub 儲存庫設定
echo 2. 進入 Pages 設定
echo 3. 選擇 gh-pages 分支作為來源
echo 4. 等待幾分鐘後訪問網站
echo.
echo 網站網址：https://liao09liao-bot.github.io/cursor-JR/
echo.
pause

