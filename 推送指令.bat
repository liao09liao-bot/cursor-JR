@echo off
chcp 65001 >nul
echo ========================================
echo 推送到 GitHub 儲存庫
echo ========================================
echo.

echo [步驟 1] 檢查 Git 狀態...
git status
echo.

echo [步驟 2] 添加所有檔案...
git add .
echo.

echo [步驟 3] 提交變更...
git commit -m "Add complete JR Industrial Mounts website project"
echo.

echo [步驟 4] 推送到 GitHub...
git push -u origin main
echo.

echo ========================================
echo ✅ 推送完成！
echo ========================================
echo.
echo 請前往以下網址確認：
echo https://github.com/liao09liao-bot/cursor-JR
echo.
pause

