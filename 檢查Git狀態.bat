@echo off
chcp 65001 >nul
echo ========================================
echo 檢查 Git 和 GitHub 連接狀態
echo ========================================
echo.

echo [檢查 1] Git 安裝狀態...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git 未安裝
    echo    請前往 https://git-scm.com/ 安裝 Git
) else (
    git --version
    echo ✅ Git 已安裝
)
echo.

echo [檢查 2] Git 儲存庫初始化狀態...
if exist .git (
    echo ✅ Git 儲存庫已初始化
    echo.
    echo [檢查 3] 遠端儲存庫連接狀態...
    git remote -v >nul 2>&1
    if %errorlevel% neq 0 (
        echo ❌ 尚未連接遠端儲存庫
        echo    請執行: git remote add origin YOUR_GITHUB_URL
    ) else (
        echo ✅ 已連接遠端儲存庫:
        git remote -v
    )
) else (
    echo ❌ Git 儲存庫尚未初始化
    echo    請執行: git init
)
echo.

echo ========================================
pause

