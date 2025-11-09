# GitHub 連接指南

## 步驟 1：安裝 Git

如果您的電腦還沒有安裝 Git，請先安裝：

1. 前往 [Git 官網](https://git-scm.com/)
2. 下載 Windows 版本
3. 執行安裝程式（建議使用預設設定）
4. 安裝完成後，重新開啟終端機

## 步驟 2：驗證 Git 安裝

開啟終端機（Terminal / PowerShell），執行：

```bash
git --version
```

如果顯示版本號（如 `git version 2.42.0`），表示安裝成功。

## 步驟 3：設定 Git（首次使用）

設定您的使用者名稱和 Email：

```bash
git config --global user.name "您的名稱"
git config --global user.email "您的email@example.com"
```

## 步驟 4：在 GitHub 上建立儲存庫

1. 前往 [GitHub](https://github.com/) 並登入
2. 點擊右上角的 **+** 圖示，選擇 **New repository**
3. 填寫儲存庫資訊：
   - **Repository name**: `jr-industrial-mounts`（或您喜歡的名稱）
   - **Description**: JR Industrial Mounts - 工業級電視架與洗衣機底座展示網站
   - **Visibility**: 選擇 Public 或 Private
   - **不要**勾選 "Initialize this repository with a README"（我們已經有 README 了）
4. 點擊 **Create repository**

## 步驟 5：初始化本地 Git 儲存庫

在專案目錄中執行以下指令：

```bash
# 初始化 Git
git init

# 添加所有檔案
git add .

# 提交檔案
git commit -m "Initial commit: JR Industrial Mounts website"
```

## 步驟 6：連接到 GitHub

將本地儲存庫連接到 GitHub（請將 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替換為您的實際資訊）：

```bash
# 添加遠端儲存庫
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 重新命名主分支為 main（如果需要的話）
git branch -M main

# 推送檔案到 GitHub
git push -u origin main
```

## 完整指令流程

以下是完整的指令流程（請根據您的 GitHub 帳號修改）：

```bash
# 1. 初始化 Git
git init

# 2. 添加所有檔案
git add .

# 3. 提交檔案
git commit -m "Initial commit: JR Industrial Mounts website"

# 4. 添加遠端儲存庫（請替換為您的 GitHub 儲存庫網址）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. 設定主分支
git branch -M main

# 6. 推送檔案
git push -u origin main
```

## 後續更新檔案

當您修改了專案檔案後，可以使用以下指令更新 GitHub：

```bash
# 添加修改的檔案
git add .

# 提交變更
git commit -m "描述您的變更"

# 推送到 GitHub
git push
```

## 常見問題

### 問題 1：需要輸入 GitHub 帳號密碼

如果提示需要輸入帳號密碼，建議使用 **Personal Access Token**：

1. 前往 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 點擊 "Generate new token"
3. 選擇權限（至少需要 `repo` 權限）
4. 複製 token
5. 在輸入密碼時，使用 token 代替密碼

### 問題 2：已經有遠端儲存庫

如果遠端儲存庫已經存在，可能需要先拉取：

```bash
git pull origin main --allow-unrelated-histories
```

然後再推送：

```bash
git push -u origin main
```

### 問題 3：使用 SSH 連接（可選）

如果您偏好使用 SSH，可以：

1. 生成 SSH 金鑰：
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. 將 SSH 公鑰添加到 GitHub（Settings → SSH and GPG keys）

3. 使用 SSH URL 連接：
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

## 快速開始指令（已安裝 Git 的情況下）

```bash
git init
git add .
git commit -m "Initial commit: JR Industrial Mounts website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

**注意**：請將 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替換為您的實際 GitHub 使用者名稱和儲存庫名稱。

