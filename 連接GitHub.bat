@echo off
chcp 65001 >nul
echo ========================================
echo JR Industrial Mounts - GitHub 連接腳本
echo ========================================
echo.

echo [步驟 1] 檢查 Git 安裝...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git 未安裝！
    echo 請前往 https://git-scm.com/ 安裝 Git
    echo 安裝完成後重新執行此腳本
    pause
    exit /b 1
)
echo ✅ Git 已安裝
echo.

echo [步驟 2] 初始化 Git 儲存庫...
git init
echo.

echo [步驟 3] 添加所有檔案...
git add .
echo.

echo [步驟 4] 提交檔案...
git commit -m "Initial commit: JR Industrial Mounts website"
echo.

echo ========================================
echo ✅ 本地 Git 儲存庫已初始化！
echo ========================================
echo.
echo 接下來請：
echo 1. 前往 https://github.com 建立新的儲存庫
echo 2. 複製儲存庫的 HTTPS 網址
echo 3. 執行以下指令（請替換 YOUR_USERNAME 和 REPO_NAME）：
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 詳細說明請參考：GitHub連接指南.md
echo.
pause

