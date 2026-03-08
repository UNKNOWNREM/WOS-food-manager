# 活動食材管理 / WOS Food Manager

一個專為《寒霜啟示錄（Whiteout Survival ）》活動設計的食材庫存管理工具，支援多帳號管理、智慧烹飪推薦與食材轉移計算。

---

## 功能特色

- **多帳號管理** — 支援 1 個以上主帳號 + 多個農場帳號，可自訂名稱與順序
- **食材庫存追蹤** — 每帳號獨立記錄 12 種食材，支援拖曳排序
- **智慧烹飪推薦** — 自動計算最佳烹飪順序，最大化積分
- **食材轉移計算** — 自動規劃農場帳號 → 主帳號的最佳轉移方案（每主帳號每日上限 50 個）
- **每日推薦設定** — 可針對每帳號、每天設定 1～2 道推薦菜
- **帳號篩選烹飪** — 計算完成後可勾選要實際執行的帳號
- **自動儲存** — 所有資料存於瀏覽器 localStorage，無需登入
- **中英切換** — 介面支援中文 / English 語言切換

---

## 使用方式

**直接開啟 `index.html`，不需要安裝任何東西。**

確保以下三個檔案在同一個資料夾中：

```
index.html
style.css
script.js
```

用任何瀏覽器開啟 `index.html` 即可使用。

---

## 操作流程

1. 在各帳號卡片中輸入目前食材數量
2. 點擊「**計算最佳方案**」
3. 依照「食材轉移清單」在遊戲中移動食材
4. 點擊「**執行轉移**」更新庫存
5. 點擊「**烹飪推薦菜**」或「**烹飪全部**」扣除食材

---

## 食譜一覽

| 食譜 | 食材 | 積分 | 類型 |
|------|------|------|------|
| 煎鱈魚 | 奶油×1、魚肉×2、鹽×1 | 50 | 推薦 |
| 焗番茄 | 雞蛋×1、起司×1、番茄×2 | 50 | 推薦 |
| 烤羊排 | 羊排×2、黑胡椒×1、奶油×1 | 40 | 一般 |
| 慶典蛋糕 | 白巧克力×2、雞蛋×1、麵粉×1 | 40 | 一般 |
| 菇菇起司捲 | 麵粉×1、蘑菇×2、起司×1 | 40 | 一般 |
| 烤雞串 | 黑胡椒×1、鹽×1、雞肉×2 | 40 | 一般 |

---

## 技術說明

- 純前端，無任何外部依賴（僅使用 Google Fonts）
- 資料儲存於瀏覽器 `localStorage`（key: `wos_food_manager`）
- 烹飪順序使用排列組合（permutation）最佳化算法

---

---

# WoS Food Manager (English)

A food ingredient inventory manager for the **Whiteout Survival** in-game event. Supports multi-account management, smart cooking recommendations, and ingredient transfer planning.

---

## Features

- **Multi-Account Management** — Supports 1+ main accounts + multiple farm accounts, with custom names and ordering
- **Ingredient Inventory Tracking** — 12 ingredients tracked independently per account, with drag-to-reorder support
- **Smart Cooking Recommendations** — Automatically calculates the optimal cooking order to maximize score
- **Ingredient Transfer Planning** — Automatically plans the best farm → main account transfers (50 items per main account per day limit)
- **Daily Recommendation Settings** — Set 1–2 recommended dishes per account per day
- **Account Filter for Cooking** — After calculating, select which accounts to actually cook on
- **Auto-Save** — All data stored in browser localStorage, no login required
- **Language Toggle** — Switch between 中文 / English in the header

---

## How to Use

**Just open `index.html` directly — no installation needed.**

Make sure these three files are in the same folder:

```
index.html
style.css
script.js
```

Open `index.html` in any modern browser.

---

## Workflow

1. Enter current ingredient quantities in each account card
2. Click **"Calculate Best Plan"**
3. Move ingredients in-game according to the **"Ingredient Transfer List"**
4. Click **"Execute Transfer"** to update the inventory
5. Click **"Cook Recommended"** or **"Cook All"** to deduct ingredients

---

## Recipe Reference

| Recipe | Ingredients | Score | Type |
|--------|-------------|-------|------|
| Pan-Seared Cod | Butter×1, Fish×2, Salt×1 | 50 | Recommended |
| Baked Tomatoes | Egg×1, Cheese×1, Tomatoes×2 | 50 | Recommended |
| Roasted Lamb Chops | Lamb Chops×2, Pepper×1, Butter×1 | 40 | Normal |
| Pastry Palace | White Choc×2, Egg×1, Flour×1 | 40 | Normal |
| Cheesy Mushroom Wrap | Flour×1, Mushroom×2, Cheese×1 | 40 | Normal |
| Chicken Skewers | Pepper×1, Salt×1, Chicken×2 | 40 | Normal |

---

## Technical Notes

- Pure frontend, no external dependencies (only Google Fonts)
- Data stored in browser `localStorage` (key: `wos_food_manager`)
- Cooking order optimized via permutation algorithm

---

## Support

如果這個工具對你有幫助，歡迎請我喝杯咖啡 ☕
If this tool helped you, feel free to buy me a coffee ☕

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-dong0108-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/dong0108)
