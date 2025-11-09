@echo off
chcp 65001 >nul
echo ========================================
echo 檢查本地檔案清單（應該上傳到 GitHub）
echo ========================================
echo.

echo [根目錄檔案]
dir /b /a-d 2>nul | findstr /v /i "node_modules dist" 
echo.

echo [src 目錄檔案]
if exist src (
    dir /b /s /a-d src 2>nul | findstr /v /i "node_modules"
)
echo.

echo ========================================
echo 檢查完成！
echo ========================================
echo.
echo 請前往 GitHub 網站對照：
echo https://github.com/liao09liao-bot/cursor-JR
echo.
echo 確認以上檔案是否都已上傳。
echo.
pause

