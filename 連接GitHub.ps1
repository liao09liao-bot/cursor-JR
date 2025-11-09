# JR Industrial Mounts - GitHub 連接腳本
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "JR Industrial Mounts - GitHub 連接腳本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 檢查 Git 安裝
Write-Host "[步驟 1] 檢查 Git 安裝..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git 已安裝: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git 未安裝！" -ForegroundColor Red
    Write-Host "請前往 https://git-scm.com/ 安裝 Git" -ForegroundColor Yellow
    Write-Host "安裝完成後重新執行此腳本" -ForegroundColor Yellow
    Read-Host "按 Enter 鍵退出"
    exit 1
}
Write-Host ""

# 初始化 Git
Write-Host "[步驟 2] 初始化 Git 儲存庫..." -ForegroundColor Yellow
git init
Write-Host ""

# 添加檔案
Write-Host "[步驟 3] 添加所有檔案..." -ForegroundColor Yellow
git add .
Write-Host ""

# 提交檔案
Write-Host "[步驟 4] 提交檔案..." -ForegroundColor Yellow
git commit -m "Initial commit: JR Industrial Mounts website"
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ 本地 Git 儲存庫已初始化！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "接下來請：" -ForegroundColor Yellow
Write-Host "1. 前往 https://github.com 建立新的儲存庫" -ForegroundColor White
Write-Host "2. 複製儲存庫的 HTTPS 網址" -ForegroundColor White
Write-Host "3. 執行以下指令（請替換 YOUR_USERNAME 和 REPO_NAME）：" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "詳細說明請參考：GitHub連接指南.md" -ForegroundColor Gray
Write-Host ""
Read-Host "按 Enter 鍵退出"

