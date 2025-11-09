# JR Industrial Mounts - 工業級電視架與洗衣機底座展示網站

一個高質感、金屬工業風格的展示網站，呈現 JR 公司專注於電視架與洗衣機底座的專業形象。

## 功能特色

### 前端展示
- ✅ Hero 區：動態背景、淡入動畫、流光效果
- ✅ 產品展示區：Grid 佈局、產品卡片、懸停動畫
- ✅ 品牌故事區：左右分佈、特色標籤
- ✅ 聯絡表單：玻璃擬態設計、表單驗證
- ✅ Footer：版權資訊、快速連結

### 進階功能
- ✅ 商品管理：新增、編輯、刪除商品（管理員功能）
- ✅ 登入註冊：使用者認證系統
- ✅ 購物車：加入商品、數量調整、總價計算
- ✅ 響應式設計：支援手機、平板、桌面裝置

## 技術棧

- **React 18** - 前端框架
- **Vite** - 建置工具
- **Tailwind CSS** - 樣式框架
- **Framer Motion** - 動畫庫
- **React Icons** - 圖示庫

## 安裝與執行

### 1. 安裝依賴

```bash
npm install
```

### 2. 開發模式

```bash
npm run dev
```

網站將在 `http://localhost:5173` 啟動

### 3. 建置生產版本

```bash
npm run build
```

### 4. 預覽生產版本

```bash
npm run preview
```

## 專案結構

```
jr-industrial-mounts/
├── src/
│   ├── components/          # React 元件
│   │   ├── Hero.jsx         # Hero 區塊
│   │   ├── Products.jsx     # 產品展示區
│   │   ├── ProductCard.jsx  # 產品卡片
│   │   ├── About.jsx        # 品牌故事
│   │   ├── ContactForm.jsx  # 聯絡表單
│   │   ├── Footer.jsx       # 頁尾
│   │   ├── Navbar.jsx       # 導航列
│   │   ├── Auth/            # 登入註冊元件
│   │   ├── Cart/            # 購物車元件
│   │   └── Admin/           # 管理後台元件
│   ├── context/             # Context API
│   │   ├── AuthContext.jsx  # 認證狀態管理
│   │   ├── ProductContext.jsx # 商品狀態管理
│   │   └── CartContext.jsx  # 購物車狀態管理
│   ├── App.jsx              # 主應用元件
│   ├── main.jsx             # 應用入口
│   └── index.css            # 全域樣式
├── index.html               # HTML 模板
├── package.json             # 專案配置
├── tailwind.config.js       # Tailwind 配置
├── vite.config.js           # Vite 配置
└── README.md                # 專案說明
```

## 設計風格

- **主色調**：銀灰 (#C0C0C0)、石墨藍 (#3A4A5C)、深灰 (#2C2C2C)
- **字體**：Inter、Noto Sans TC
- **風格**：工業感、金屬質感、穩重專業
- **動畫**：淡入、滑動、光影流動效果

## 功能說明

### 商品管理（管理員）
1. 登入後，管理員可看到「商品管理」按鈕（齒輪圖示）
2. 可新增、編輯、刪除商品
3. 商品資料儲存在 localStorage

### 購物車
1. 點擊產品卡片的「加入購物車」按鈕
2. 購物車圖示會顯示商品數量
3. 點擊購物車圖示查看購物車內容
4. 可調整數量或移除商品

### 登入註冊
1. 點擊右上角「登入」按鈕
2. 可切換登入/註冊表單
3. 登入狀態會儲存在 localStorage

## 部署

### Vercel 部署

1. 將專案推送到 GitHub
2. 在 Vercel 中匯入專案
3. 建置設定：
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 點擊 Deploy

### 其他平台

專案使用標準 Vite 建置，可部署至任何支援靜態網站的平台：
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 開發注意事項

- 目前使用 localStorage 儲存資料（開發階段）
- 實際專案應連接後端 API
- 登入註冊功能為簡化版本，需整合真實認證系統
- 購物車結帳功能需整合支付系統

## 授權

© 2024 JR Industrial Mounts. 保留所有權利。

