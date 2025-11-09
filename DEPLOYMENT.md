# 部署指南

## 本地開發

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

網站將在 `http://localhost:5173` 啟動

## 建置生產版本

```bash
npm run build
```

建置完成後，檔案會輸出到 `dist` 目錄

## Vercel 部署

### 方法一：透過 Vercel CLI

1. 安裝 Vercel CLI：
```bash
npm i -g vercel
```

2. 登入 Vercel：
```bash
vercel login
```

3. 部署：
```bash
vercel
```

### 方法二：透過 GitHub

1. 將專案推送到 GitHub 儲存庫

2. 前往 [Vercel](https://vercel.com) 並登入

3. 點擊 "New Project"

4. 匯入您的 GitHub 儲存庫

5. Vercel 會自動偵測 Vite 專案，設定如下：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. 點擊 "Deploy"

## 環境變數（可選）

如果需要連接後端 API，可在 Vercel 專案設定中新增環境變數：

- `VITE_API_URL`: 後端 API 網址
- `VITE_API_KEY`: API 金鑰（如需要）

## 其他部署平台

### Netlify

1. 將專案推送到 GitHub
2. 在 Netlify 中匯入專案
3. 建置設定：
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. 安裝 `gh-pages`：
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中新增：
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. 執行部署：
```bash
npm run deploy
```

## 注意事項

- 確保所有依賴都已正確安裝
- 建置前檢查是否有 TypeScript 或 ESLint 錯誤
- 生產環境建議啟用 HTTPS
- 如需 SEO，可考慮使用 SSR 框架（如 Next.js）

