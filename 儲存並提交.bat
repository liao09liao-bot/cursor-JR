@echo off
chcp 65001 >nul
echo ========================================
echo 儲存並提交檔案到 GitHub
echo ========================================
echo.

echo [步驟 1] 檢查 Git 狀態...
git status
echo.

echo [步驟 2] 添加所有變更的檔案...
git add .
echo ✅ 所有檔案已添加
echo.

echo [步驟 3] 提交變更...
git commit -m "Fix GitHub Pages configuration and add website launch scripts"
echo ✅ 變更已提交
echo.

echo [步驟 4] 推送到 GitHub...
git push origin main
echo.

echo ========================================
echo ✅ 所有檔案已儲存並提交到 GitHub！
echo ========================================
echo.
echo 變更內容：
echo - 修復 GitHub Pages base path 設定
echo - 添加部署腳本
echo - 添加網站啟動腳本
echo - 添加說明文件
echo.
pause

