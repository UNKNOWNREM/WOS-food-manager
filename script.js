// ─── I18N ─────────────────────────────────────────────────────────────────
let currentLang = (() => { try { return localStorage.getItem('lang') || 'zh'; } catch { return 'zh'; } })();

const LANG_DATA = {
  zh: {
    appTitle: '食材管理',
    resetDay: '重置當天',
    dailyConfig: '每日推薦設定',
    closeConfig: '關閉設定',
    saveConfig: '儲存設定',
    dailyConfigTitle: '每日推薦菜設定（每帳號各別）',
    accountInventory: '帳號食材庫存',
    clearAll: '🗑 全部清零',
    addFarm: '新增農場帳號',
    smartRecommend: '智慧推薦',
    calcBest: '計算最佳方案',
    execTransfer: '執行轉移',
    cookSpecial: '✅ 烹飪推薦菜',
    cookAll: '✅ 烹飪全部',
    cookAcctLabel: '烹飪帳號：',
    selectAll: '全選',
    selectNone: '全不選',
    cookPlanTitle: '建議烹飪計劃',
    transferTitle: '食材轉移清單',
    scoreTitle: '積分預覽 & 剩餘食材',
    mainBadge: '👑 主帳號',
    expand: '▸ 展開',
    collapse: '▾ 收合',
    sortBtn: '⇅ 排序',
    sortDone: '✓ 完成排序',
    toFarm: '↓ 農場',
    toMain: '↑ 主帳號',
    sortHint: '✦ 拖曳方格可調整順序',
    allyRequested: '今日已請求盟友50個',
    allyDone: '✅ 今日已請求盟友50個',
    supplyTarget: '供給對象：',
    noMain: '尚無主帳號',
    shared: '（共用）',
    noCanCook: '無可烹飪',
    farmTotalTitle: (n) => `🌾 農場食材總量（${n} 個帳號合計）`,
    farmEmpty: '農場目前無食材庫存',
    emptyTip: '點擊「計算最佳方案」以生成建議',
    day7Tip: '🗑 第7天：清空所有食材！',
    day7Cook: '第7天：清空所有食材！不計分',
    tagSpecial: '推薦',
    tagNormal: '一般',
    noDish: '無可烹飪的菜',
    allyOnlyNote: '✅ 已請求盟友・僅自有庫存',
    dishCount: (n) => `${n} 道菜`,
    dishUnit: (n) => `× ${n} 道`,
    noTransfer: '無需轉移',
    remainTitle: '烹飪後剩餘食材',
    zeroWaste: '✅ 食材零浪費！',
    dayCol: '天數',
    noneOpt: '（無）',
    noIngredients: '目前所有帳號食材不足以烹飪任何菜',
    recTip: '推薦菜',
    none: '無',
    scoreUnit: '分',
    toastSetDay: (d) => `切換至 Day ${d}`,
    toastResetDay: '已重置當天勾選狀態',
    toastToFarm: (name) => `🌾 ${name} 已改為農場帳號`,
    toastToMain: (name) => `👑 ${name} 已升為主帳號`,
    toastClearAcc: (name) => `🗑 已清零 ${name} 的食材`,
    toastClearAll: '🗑 已清零所有帳號食材',
    toastAddFarm: (n) => `✅ 已新增農場帳號${n}`,
    toastDelFarm: (name) => `🗑 已刪除 ${name}`,
    toastTransfer: '✅ 已執行食材轉移',
    toastSaveConfig: '✅ 每日推薦菜已儲存',
    toastNoCook: '⚠️ 沒有符合條件的菜可烹飪',
    toastCookDone: (label, n) => `🎉 烹飪完成！${label}共 ${n} 道`,
    cookSpecialLabel: '推薦菜',
    cookAllLabel: '全部菜色',
    confirmClearAcc: (name) => `確定清零「${name}」的所有食材？`,
    confirmClearAll: '確定清零所有帳號的食材？',
    confirmDelFarm: (name) => `確定要刪除「${name}」嗎？此操作無法復原。`,
    defaultFarm: (n) => `農場帳號${n}`,
    ing: {
      '雞蛋': '雞蛋', '奶油': '奶油', '魚肉': '魚肉', '鹽': '鹽',
      '起司': '起司', '番茄': '番茄', '白巧克力': '白巧克力', '麵粉': '麵粉',
      '羊排': '羊排', '黑胡椒': '黑胡椒', '蘑菇': '蘑菇', '雞肉': '雞肉'
    },
    recipe: {
      '烤羊排': '烤羊排', '慶典蛋糕': '慶典蛋糕', '菇菇起司捲': '菇菇起司捲',
      '焗番茄': '焗番茄', '煎鱈魚': '煎鱈魚', '烤雞串': '烤雞串'
    }
  },
  en: {
    appTitle: 'Food Manager',
    resetDay: 'Reset Day',
    dailyConfig: 'Daily Settings',
    closeConfig: 'Close Settings',
    saveConfig: 'Save Settings',
    dailyConfigTitle: 'Daily Recommended Dishes (per account)',
    accountInventory: 'Account Inventory',
    clearAll: '🗑 Clear All',
    addFarm: 'Add Farm Account',
    smartRecommend: 'Smart Recommend',
    calcBest: 'Calculate Best Plan',
    execTransfer: 'Execute Transfer',
    cookSpecial: '✅ Cook Recommended',
    cookAll: '✅ Cook All',
    cookAcctLabel: 'Cook Accounts:',
    selectAll: 'Select All',
    selectNone: 'Deselect All',
    cookPlanTitle: 'Suggested Cook Plan',
    transferTitle: 'Ingredient Transfer List',
    scoreTitle: 'Score Preview & Remaining',
    mainBadge: '👑 Main Account',
    expand: '▸ Expand',
    collapse: '▾ Collapse',
    sortBtn: '⇅ Sort',
    sortDone: '✓ Done Sorting',
    toFarm: '↓ Farm',
    toMain: '↑ Main',
    sortHint: '✦ Drag to reorder ingredients',
    allyRequested: "Today's ally request sent (50)",
    allyDone: "✅ Today's ally request sent (50)",
    supplyTarget: 'Supply Target:',
    noMain: 'No main accounts',
    shared: '(Shared)',
    noCanCook: 'Nothing to cook',
    farmTotalTitle: (n) => `🌾 Farm Total (${n} account${n !== 1 ? 's' : ''})`,
    farmEmpty: 'No ingredients in farm accounts',
    emptyTip: 'Click "Calculate Best Plan" to generate suggestions',
    day7Tip: '🗑 Day 7: Clear all ingredients!',
    day7Cook: 'Day 7: Clear all ingredients! (No score)',
    tagSpecial: 'Rec',
    tagNormal: 'Norm',
    noDish: 'Nothing to cook',
    allyOnlyNote: '✅ Ally Requested · Own stock only',
    dishCount: (n) => `${n} dish${n !== 1 ? 'es' : ''}`,
    dishUnit: (n) => `× ${n}`,
    noTransfer: 'No transfer needed',
    remainTitle: 'Remaining after cooking',
    zeroWaste: '✅ Zero waste!',
    dayCol: 'Day',
    noneOpt: '(None)',
    noIngredients: 'Not enough ingredients in any account to cook',
    recTip: 'Recommended',
    none: 'None',
    scoreUnit: 'pts',
    toastSetDay: (d) => `Switched to Day ${d}`,
    toastResetDay: 'Reset day checkboxes',
    toastToFarm: (name) => `🌾 ${name} changed to Farm account`,
    toastToMain: (name) => `👑 ${name} promoted to Main account`,
    toastClearAcc: (name) => `🗑 Cleared ${name}'s ingredients`,
    toastClearAll: '🗑 Cleared all account ingredients',
    toastAddFarm: (n) => `✅ Added Farm Account ${n}`,
    toastDelFarm: (name) => `🗑 Deleted ${name}`,
    toastTransfer: '✅ Transfer executed',
    toastSaveConfig: '✅ Daily settings saved',
    toastNoCook: '⚠️ No dishes match the filter',
    toastCookDone: (label, n) => `🎉 Cooking done! ${label}: ${n} dish${n !== 1 ? 'es' : ''}`,
    cookSpecialLabel: 'Recommended dishes',
    cookAllLabel: 'All dishes',
    confirmClearAcc: (name) => `Clear all ingredients for "${name}"?`,
    confirmClearAll: 'Clear all ingredients for all accounts?',
    confirmDelFarm: (name) => `Delete "${name}"? This cannot be undone.`,
    defaultFarm: (n) => `Farm Account ${n}`,
    ing: {
      '雞蛋': 'Egg', '奶油': 'Butter', '魚肉': 'Fish', '鹽': 'Salt',
      '起司': 'Cheese', '番茄': 'Tomatoes', '白巧克力': 'White Choc',
      '麵粉': 'Flour', '羊排': 'Lamb Chops', '黑胡椒': 'Pepper',
      '蘑菇': 'Mushroom', '雞肉': 'Chicken'
    },
    recipe: {
      '烤羊排': 'Roasted Lamb Chops',
      '慶典蛋糕': 'Pastry Palace',
      '菇菇起司捲': 'Cheesy Mushroom Wrap',
      '焗番茄': 'Baked Tomatoes',
      '煎鱈魚': 'Pan-Seared Cod',
      '烤雞串': 'Chicken Skewers'
    }
  }
};

function t(key, ...args) {
  const L = LANG_DATA[currentLang] || LANG_DATA.zh;
  const val = L[key] !== undefined ? L[key] : (LANG_DATA.zh[key] !== undefined ? LANG_DATA.zh[key] : key);
  return typeof val === 'function' ? val(...args) : val;
}

function tIng(zhName) {
  return (LANG_DATA[currentLang]?.ing || {})[zhName] || zhName;
}

function tRecipe(zhName) {
  return (LANG_DATA[currentLang]?.recipe || {})[zhName] || zhName;
}

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('lang', currentLang); } catch {}
  applyI18n();
  render();
}

function applyI18n() {
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-TW';
  document.title = currentLang === 'en' ? 'Food Manager' : '活動食材管理';
  const $ = id => document.getElementById(id);
  const set = (id, text) => { const el = $(id); if (el) el.textContent = text; };

  set('headerTitle', t('appTitle'));
  set('resetDayBtn', t('resetDay'));
  const langBtn = $('langBtn');
  if (langBtn) langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
  set('sectionTitleAccounts', t('accountInventory'));
  set('clearAllBtn', t('clearAll'));
  set('addFarmBtn', t('addFarm'));
  set('sectionTitleRecommend', t('smartRecommend'));
  set('calcRecommendBtn', t('calcBest'));
  set('execTransferBtn', t('execTransfer'));
  set('cookSpecialBtn', t('cookSpecial'));
  set('cookAllBtn', t('cookAll'));
  set('cookFilterLabel', t('cookAcctLabel'));
  set('selectAllBtn', t('selectAll'));
  set('selectNoneBtn', t('selectNone'));
  set('cookPlanTitle', t('cookPlanTitle'));
  set('transferTitle', t('transferTitle'));
  set('scoreTitle', t('scoreTitle'));
  set('dayConfigTitle', t('dailyConfigTitle'));
  set('saveDayConfigBtn', t('saveConfig'));

  const panel = $('dayConfigPanel');
  const configBtn = $('configToggleBtn');
  if (configBtn) {
    configBtn.textContent = (panel && panel.style.display !== 'none') ? t('closeConfig') : t('dailyConfig');
  }

  // Update empty tip if currently showing
  const cpBody = $('cook-plan-body');
  if (cpBody && cpBody.querySelector('.empty-tip')) {
    cpBody.querySelector('.empty-tip').textContent = t('emptyTip');
  }
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────
const INGREDIENTS = ['雞蛋','奶油','魚肉','鹽','起司','番茄','白巧克力','麵粉','羊排','黑胡椒','蘑菇','雞肉'];

// Key mapping (display name → recipe key)
// All display names map 1:1 except 魚肉→鱈魚, 黑胡椒→胡椒
const ING_MAP = {
  '雞蛋':'雞蛋','奶油':'奶油','魚肉':'鱈魚','鹽':'鹽','起司':'起司',
  '番茄':'番茄','白巧克力':'白巧克力','麵粉':'麵粉','羊排':'羊排',
  '黑胡椒':'胡椒','蘑菇':'蘑菇','雞肉':'雞肉'
};

const recipes = [
  { name:"烤羊排",    ingredients:{ 羊排:2, 胡椒:1, 奶油:1 },    isSpecial:false, score:40 },
  { name:"慶典蛋糕",  ingredients:{ 白巧克力:2, 雞蛋:1, 麵粉:1 }, isSpecial:false, score:40 },
  { name:"菇菇起司捲",ingredients:{ 麵粉:1, 蘑菇:2, 起司:1 },    isSpecial:false, score:40 },
  { name:"烤雞串",    ingredients:{ 胡椒:1, 鹽:1, 雞肉:2 },      isSpecial:false, score:40 },
  { name:"煎鱈魚",    ingredients:{ 奶油:1, 鱈魚:2, 鹽:1 },      isSpecial:true,  score:50 },
  { name:"焗番茄",    ingredients:{ 雞蛋:1, 起司:1, 番茄:2 },    isSpecial:true,  score:50 },
];

// Per-account per-day recommended dishes (only main accounts cook)
function makeDefaultAccRecs() {
  const days = {};
  for (let d = 1; d <= 7; d++) days[d] = d === 7 ? [] : ["煎鱈魚", "焗番茄"];
  return days;
}
const DEFAULT_ACCOUNT_RECOMMENDED = {
  main1: makeDefaultAccRecs(),
  main2: makeDefaultAccRecs(),
};

const ACCOUNT_DEFAULTS = [
  { id:"main1", name:"主帳號1", isMain:true },
  { id:"main2", name:"主帳號2", isMain:true },
  { id:"farm1", name:"農場帳號1", isMain:false },
  { id:"farm2", name:"農場帳號2", isMain:false },
  { id:"farm3", name:"農場帳號3", isMain:false },
  { id:"farm4", name:"農場帳號4", isMain:false },
  { id:"farm5", name:"農場帳號5", isMain:false },
  { id:"farm6", name:"農場帳號6", isMain:false },
];

// ─── STATE ────────────────────────────────────────────────────────────────
let state = null;
let pendingTransfer = null; // { from, to, ingredients } array
let pendingCook = null;     // array of { accountId, recipe, count }

function defaultState() {
  return {
    currentDay: 1,
    accountRecommended: JSON.parse(JSON.stringify(DEFAULT_ACCOUNT_RECOMMENDED)),
    accounts: ACCOUNT_DEFAULTS.map(a => ({
      ...a,
      ingredients: Object.fromEntries(INGREDIENTS.map(k => [k, 0])),
      ingOrder: [...INGREDIENTS],
      supplyTarget: [], // [] = 共用池；[mainId, ...] = 指定供給這些主帳號
      allyRequested: false
    })),
  };
}

// Helper: get recommended dishes for an account on a day
function getAccRecs(accId, day) {
  return (state.accountRecommended[accId] || {})[day] || [];
}

function loadState() {
  try {
    const raw = localStorage.getItem('wos_food_manager');
    if (raw) {
      state = JSON.parse(raw);
      // Migration: ensure accountRecommended exists (handles old dailyRecommended format)
      if (!state.accountRecommended) {
        state.accountRecommended = JSON.parse(JSON.stringify(DEFAULT_ACCOUNT_RECOMMENDED));
        // If old dailyRecommended existed, migrate it to both main accounts
        if (state.dailyRecommended) {
          ['main1','main2'].forEach(id => {
            state.accountRecommended[id] = {};
            for (let d = 1; d <= 7; d++) {
              const v = state.dailyRecommended[d];
              if (Array.isArray(v)) state.accountRecommended[id][d] = v;
              else if (typeof v === 'string') state.accountRecommended[id][d] = v ? [v] : [];
              else state.accountRecommended[id][d] = [];
            }
          });
          delete state.dailyRecommended;
        }
      }
      // Ensure all main accounts have entries for all days
      state.accounts.filter(a => a.isMain).forEach(acc => {
        if (!state.accountRecommended[acc.id]) state.accountRecommended[acc.id] = makeDefaultAccRecs();
        for (let d = 1; d <= 7; d++) {
          if (!Array.isArray(state.accountRecommended[acc.id][d])) state.accountRecommended[acc.id][d] = d === 7 ? [] : [];
        }
      });
      // Migration: ensure all ingredient keys exist
      state.accounts.forEach(acc => {
        INGREDIENTS.forEach(k => { if (acc.ingredients[k] === undefined) acc.ingredients[k] = 0; });
        if (!acc.ingOrder) acc.ingOrder = [...INGREDIENTS];
        INGREDIENTS.forEach(k => { if (!acc.ingOrder.includes(k)) acc.ingOrder.push(k); });
        acc.ingOrder = acc.ingOrder.filter(k => INGREDIENTS.includes(k));
        if (acc.supplyTarget === undefined || acc.supplyTarget === null) acc.supplyTarget = [];
        else if (typeof acc.supplyTarget === 'string') acc.supplyTarget = acc.supplyTarget ? [acc.supplyTarget] : [];
      });
    } else {
      state = defaultState();
    }
  } catch { state = defaultState(); }
}

function saveState() {
  try { localStorage.setItem('wos_food_manager', JSON.stringify(state)); } catch {}
}

// ─── INGREDIENT HELPERS ───────────────────────────────────────────────────
function dispToRecipeKey(dispName) { return ING_MAP[dispName] || dispName; }

function accountIngToRecipeMap(acc) {
  // Returns { recipeKey: amount }
  const map = {};
  INGREDIENTS.forEach(k => { map[ING_MAP[k]] = (map[ING_MAP[k]] || 0) + (acc.ingredients[k] || 0); });
  return map;
}

function canMake(acc, recipe) {
  const invMap = accountIngToRecipeMap(acc);
  return Math.min(...Object.entries(recipe.ingredients).map(([k,v]) => Math.floor((invMap[k]||0)/v)));
}

// ─── RENDER ───────────────────────────────────────────────────────────────
function render() {
  renderHeader();
  renderAccounts();
  applyI18n();
}

function renderHeader() {
  // Day buttons
  const wrap = document.getElementById('dayBtns');
  wrap.innerHTML = '';
  for (let d = 1; d <= 7; d++) {
    const b = document.createElement('button');
    b.className = 'day-btn' + (state.currentDay === d ? ' active' : '');
    b.textContent = `Day ${d}`;
    b.onclick = () => setDay(d);
    wrap.appendChild(b);
  }
  // Tip – show per-main-account recommended summary
  const tip = document.getElementById('todayTip');
  if (state.currentDay === 7) {
    tip.innerHTML = t('day7Tip');
    tip.style.cssText = 'background:rgba(224,112,112,0.12);border-color:rgba(224,112,112,0.25);color:var(--red);';
  } else {
    const mainAccs = state.accounts.filter(a => a.isMain);
    const sep = currentLang === 'en' ? ', ' : '、';
    const parts = mainAccs.map(acc => {
      const recs = getAccRecs(acc.id, state.currentDay);
      return `<span style="font-weight:600">${acc.name}</span>：${recs.length ? recs.map(r => tRecipe(r)).join(sep) : t('none')}`;
    }).join('　|　');
    tip.innerHTML = `✨ ${t('recTip')}　${parts}`;
    tip.style.cssText = 'background:rgba(123,158,199,0.12);border-color:rgba(123,158,199,0.25);color:var(--primary-dark);';
  }
}

function renderAccounts() {
  const grid = document.getElementById('accounts-grid');
  grid.innerHTML = '';
  state.accounts.forEach((acc, idx) => {
    const card = buildAccountCard(acc, idx);
    grid.appendChild(card);
  });
  initFarmCardDrag();
  renderFarmTotal();
}

function buildAccountCard(acc, idx) {
  const collapsed = acc._collapsed || false;
  const card = document.createElement('div');
  card.className = 'account-card' + (acc.isMain ? ' main-account' : '') + (collapsed ? ' collapsed-card' : '');
  card.id = `card-${acc.id}`;

  const todayRecs = getAccRecs(acc.id, state.currentDay);
  const specialNames = new Set(todayRecs);

  // 模擬依序烹飪，計算各菜可做數（推薦菜先做，再算一般菜剩餘）
  const simAcc = { ingredients: { ...acc.ingredients } };
  const specialCounts = todayRecs.map(rName => {
    const r = recipes.find(x => x.name === rName);
    if (!r) return null;
    const n = canMake(simAcc, r);
    if (n > 0) deductIngredients(simAcc, r, n);
    return { name: rName, n, isSpecial: true };
  }).filter(Boolean);

  // 一般菜：推薦菜扣完後，用 findBestNormalOrder 模擬
  const normalForCard = recipes.filter(r => !specialNames.has(r.name));
  const bestNormal = findBestNormalOrder(JSON.parse(JSON.stringify(simAcc)), normalForCard);
  const normalCounts = bestNormal.filter(x => x.count > 0)
    .map(x => ({ name: x.recipe.name, n: x.count }));

  // 計算推薦菜所需的每種食材總量（用於警示色，主帳號與農場帳號都適用）
  const ingNeeded = {};
  if (todayRecs.length > 0) {
    todayRecs.forEach(rName => {
      const r = recipes.find(x => x.name === rName);
      if (!r) return;
      Object.entries(r.ingredients).forEach(([rkey, amt]) => {
        const dk = INGREDIENTS.find(d => ING_MAP[d] === rkey);
        if (dk) ingNeeded[dk] = (ingNeeded[dk] || 0) + amt;
      });
    });
  }

  const ingOrder = acc.ingOrder || INGREDIENTS;

  card.innerHTML = `
    <div class="card-header">
      ${acc.isMain ? `<span class="main-badge">${t('mainBadge')}</span>` : `<span class="farm-drag-handle" title="Drag to reorder">⠿</span>`}
      <input class="account-name" value="${acc.name}"
        onchange="updateName(${idx}, this.value)"
        title="Click to edit account name">
      <div class="card-actions">
        <button class="card-btn-collapse" onclick="toggleCardCollapse('${acc.id}')" title="${collapsed ? t('expand') : t('collapse')}">${collapsed ? t('expand') : t('collapse')}</button>
        <button class="card-btn card-btn-sort" id="sortBtn-${acc.id}" onclick="toggleSortMode('${acc.id}')">${t('sortBtn')}</button>
        <button class="card-btn card-btn-clear" onclick="clearAccountIngredients('${acc.id}')" title="Clear ingredients">🗑</button>
        ${acc.isMain
          ? `<button class="card-btn card-btn-role-down" onclick="toggleAccountRole('${acc.id}')">${t('toFarm')}</button>`
          : `<button class="card-btn card-btn-role-up" onclick="toggleAccountRole('${acc.id}')">${t('toMain')}</button>
             <button class="card-btn card-btn-del" onclick="deleteFarmAccount('${acc.id}')">✕</button>`
        }
      </div>
    </div>
    ${collapsed ? `
      <div class="card-summary" style="padding-bottom:6px;text-align:left">
        ${specialCounts.length ? specialCounts.map(x => `<span class="tag tag-special" style="font-size:0.68rem">${tRecipe(x.name)}×${x.n}</span>`).join(' ') : ''}
        ${normalCounts.length ? `<span style="color:var(--text-muted);font-size:0.72rem">・${normalCounts.map(x=>`${tRecipe(x.name)}×${x.n}`).join(', ')}</span>` : ''}
        ${!specialCounts.length && !normalCounts.length ? `<span style="color:var(--text-muted);font-size:0.72rem">${t('noCanCook')}</span>` : ''}
      </div>` : `
    <div class="card-body">
      <div class="sort-hint" id="sortHint-${acc.id}">${t('sortHint')}</div>
      <div class="ingredients-grid" id="ingGrid-${acc.id}">
        ${ingOrder.map((ing, ingIdx) => {
          const val = acc.ingredients[ing] || 0;
          const needed = ingNeeded[ing] || 0;
          const warnClass = needed > 0
            ? (val >= needed ? ' ing-ok' : ' ing-warn')
            : '';
          // 計算全域 tab index 讓 Enter 可以跳下一格
          const allIngs = state.accounts.flatMap(a =>
            a._collapsed ? [] : (a.ingOrder || INGREDIENTS).map(k => `${a.id}__${k}`)
          );
          const globalIdx = allIngs.indexOf(`${acc.id}__${ing}`);
          return `<div class="ingredient-item${warnClass}" data-ing="${ing}" data-accid="${acc.id}" data-gidx="${globalIdx}">
            <div class="ingredient-label">${tIng(ing)}${needed > 0 ? `<span style="font-size:0.6rem;margin-left:2px;opacity:0.7">/${needed}</span>` : ''}</div>
            <div class="ing-stepper${val > 0 ? ' has-value' : ''}" id="stepper-${acc.id}-${ing}">
              <button class="ing-btn"
                onmousedown="startStep('${acc.id}','${ing}',-1,${idx})"
                ontouchstart="startStep('${acc.id}','${ing}',-1,${idx})"
                onmouseup="stopStep()" onmouseleave="stopStep()"
                ontouchend="stopStep()">−</button>
              <input class="ingredient-input${val > 0 ? ' has-value' : ''}"
                type="number" min="0" value="${val}"
                data-accid="${acc.id}" data-ing="${ing}" data-gidx="${globalIdx}"
                onchange="updateIngById('${acc.id}','${ing}',this.value)"
                oninput="syncStepperClass('${acc.id}','${ing}',this.value)"
                onkeydown="ingKeyNav(event,${globalIdx})">
              <button class="ing-btn"
                onmousedown="startStep('${acc.id}','${ing}',+1,${idx})"
                ontouchstart="startStep('${acc.id}','${ing}',+1,${idx})"
                onmouseup="stopStep()" onmouseleave="stopStep()"
                ontouchend="stopStep()">＋</button>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="card-footer">
        <label class="ally-check-label${acc.allyRequested ? ' done' : ''}">
          <input type="checkbox" ${acc.allyRequested ? 'checked' : ''}
            onchange="updateAlly(${idx}, this.checked)">
          ${acc.allyRequested ? t('allyDone') : t('allyRequested')}
        </label>
        <div class="card-summary">
          ${specialCounts.length ? specialCounts.map(x => `<span class="tag tag-special" style="font-size:0.68rem">${tRecipe(x.name)}×${x.n}</span>`).join(' ') : ''}
          ${normalCounts.length ? `<span style="color:var(--text-muted)">・</span>${normalCounts.map(x=>`${tRecipe(x.name)}×${x.n}`).join(', ')}` : ''}
        </div>
      </div>
      ${!acc.isMain ? `
      <div class="supply-target-wrap">
        <span style="white-space:nowrap">${t('supplyTarget')}</span>
        <div class="supply-target-checks">
          ${state.accounts.filter(a => a.isMain).length === 0
            ? `<span style="color:var(--text-light);font-size:0.7rem">${t('noMain')}</span>`
            : state.accounts.filter(a => a.isMain).map(m => `
              <label class="supply-check-label${(acc.supplyTarget||[]).includes(m.id) ? ' checked' : ''}">
                <input type="checkbox" ${(acc.supplyTarget||[]).includes(m.id) ? 'checked' : ''}
                  onchange="toggleSupplyTarget('${acc.id}','${m.id}',this.checked)">
                ${m.name}
              </label>`).join('')
          }
        </div>
        <span style="font-size:0.68rem;color:var(--text-light);white-space:nowrap">
          ${(acc.supplyTarget||[]).length === 0 ? t('shared') : ''}
        </span>
      </div>` : ''}
    </div>`}
  `;
  return card;
}

// ─── ACTIONS ──────────────────────────────────────────────────────────────
function setDay(d) {
  state.currentDay = d;
  // Reset ally requests
  state.accounts.forEach(acc => acc.allyRequested = false);
  saveState();
  clearRecommend();
  render();
  toast(t('toastSetDay', d));
}

function resetDay() {
  state.accounts.forEach(acc => acc.allyRequested = false);
  saveState();
  clearRecommend();
  render();
  toast(t('toastResetDay'));
}

function updateName(idx, val) {
  state.accounts[idx].name = val.trim() || state.accounts[idx].name;
  saveState();
}


function updateAlly(idx, val) {
  state.accounts[idx].allyRequested = val;
  saveState();
  const card = document.getElementById(`card-${state.accounts[idx].id}`);
  const label = card?.querySelector('.ally-check-label');
  if (label) {
    label.className = 'ally-check-label' + (val ? ' done' : '');
    label.lastChild.textContent = val ? ' ' + t('allyDone') : ' ' + t('allyRequested');
  }
}

// ─── INGREDIENT SORT MODE ─────────────────────────────────────────────────
const sortModeActive = {};
let dragSrc = null;

function toggleSortMode(accId) {
  sortModeActive[accId] = !sortModeActive[accId];
  const btn  = document.getElementById(`sortBtn-${accId}`);
  const hint = document.getElementById(`sortHint-${accId}`);
  const grid = document.getElementById(`ingGrid-${accId}`);
  if (!btn || !grid) return;
  if (sortModeActive[accId]) {
    btn.classList.add('active'); btn.textContent = t('sortDone');
    hint.classList.add('visible');
    bindDrag(grid);
  } else {
    btn.classList.remove('active'); btn.textContent = t('sortBtn');
    hint.classList.remove('visible');
    grid.querySelectorAll('.ingredient-item').forEach(el => {
      el.classList.remove('sort-mode','drag-over','dragging');
      el.draggable = false;
    });
  }
}

function toggleAccountRole(accId) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;

  if (acc.isMain) {
    acc.isMain = false;
    delete state.accountRecommended[acc.id];
    saveState(); clearRecommend(); render();
    toast(t('toastToFarm', acc.name));
  } else {
    acc.isMain = true;
    if (!state.accountRecommended[acc.id]) {
      state.accountRecommended[acc.id] = makeDefaultAccRecs();
    }
    saveState(); clearRecommend(); render();
    toast(t('toastToMain', acc.name));
  }
}

function bindDrag(grid) {
  grid.querySelectorAll('.ingredient-item').forEach(item => {
    item.classList.add('sort-mode');
    item.draggable = true;
    item.ondragstart = e => { dragSrc = item; item.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; };
    item.ondragover  = e => { e.preventDefault(); if (item !== dragSrc) item.classList.add('drag-over'); };
    item.ondragleave = () => item.classList.remove('drag-over');
    item.ondragend   = () => { grid.querySelectorAll('.ingredient-item').forEach(el => el.classList.remove('dragging','drag-over')); dragSrc = null; };
    item.ondrop      = e => {
      e.preventDefault();
      if (!dragSrc || item === dragSrc || item.dataset.accid !== dragSrc.dataset.accid) { item.classList.remove('drag-over'); return; }
      const accId  = item.dataset.accid;
      const accIdx = state.accounts.findIndex(a => a.id === accId);
      if (accIdx < 0) return;
      const order = state.accounts[accIdx].ingOrder;
      const si = order.indexOf(dragSrc.dataset.ing), di = order.indexOf(item.dataset.ing);
      order.splice(si, 1); order.splice(di, 0, dragSrc.dataset.ing);
      saveState();
      // Re-render grid in place, preserve sort mode
      grid.innerHTML = order.map(ing => {
        const val = state.accounts[accIdx].ingredients[ing] || 0;
        return `<div class="ingredient-item" data-ing="${ing}" data-accid="${accId}">
          <div class="ingredient-label">${tIng(ing)}</div>
          <div class="ing-stepper${val>0?' has-value':''}" id="stepper-${accId}-${ing}">
            <button class="ing-btn" onmousedown="startStep('${accId}','${ing}',-1,${accIdx})" ontouchstart="startStep('${accId}','${ing}',-1,${accIdx})" onmouseup="stopStep()" onmouseleave="stopStep()" ontouchend="stopStep()">−</button>
            <input class="ingredient-input${val>0?' has-value':''}" type="number" min="0" value="${val}"
              onchange="updateIngById('${accId}','${ing}',this.value)"
              oninput="syncStepperClass('${accId}','${ing}',this.value)">
            <button class="ing-btn" onmousedown="startStep('${accId}','${ing}',+1,${accIdx})" ontouchstart="startStep('${accId}','${ing}',+1,${accIdx})" onmouseup="stopStep()" onmouseleave="stopStep()" ontouchend="stopStep()">＋</button>
          </div>
        </div>`;
      }).join('');
      bindDrag(grid);
      item.classList.remove('drag-over');
    };
  });
}

function toggleCardCollapse(accId) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;
  acc._collapsed = !acc._collapsed;
  // Re-render just this card
  const idx = state.accounts.indexOf(acc);
  const old = document.getElementById(`card-${accId}`);
  if (old) old.replaceWith(buildAccountCard(acc, idx));
  initFarmCardDrag();
}

// ── STEPPER ──
let stepTimer = null, stepInterval = null;

function startStep(accId, ing, delta, idx) {
  stopStep();
  doStep(accId, ing, delta, idx);
  stepTimer = setTimeout(() => {
    stepInterval = setInterval(() => doStep(accId, ing, delta, idx), 80);
  }, 400);
}

function stopStep() {
  clearTimeout(stepTimer);
  clearInterval(stepInterval);
  stepTimer = stepInterval = null;
}

function doStep(accId, ing, delta, idx) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;
  const newVal = Math.max(0, (acc.ingredients[ing] || 0) + delta);
  acc.ingredients[ing] = newVal;
  // Update input display
  const input = document.querySelector(`#stepper-${accId}-${ing} input`);
  if (input) { input.value = newVal; syncStepperClass(accId, ing, newVal); }
  saveState();
  refreshCardSummary(accId);
  renderFarmTotal();
  clearRecommend();
}

function syncStepperClass(accId, ing, val) {
  const stepper = document.getElementById(`stepper-${accId}-${ing}`);
  const input = stepper?.querySelector('input');
  if (!stepper || !input) return;
  const hasVal = parseInt(val) > 0;
  stepper.classList.toggle('has-value', hasVal);
  input.classList.toggle('has-value', hasVal);
}

function updateIngById(accId, ing, val) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;
  acc.ingredients[ing] = Math.max(0, parseInt(val) || 0);
  saveState();
  syncStepperClass(accId, ing, acc.ingredients[ing]);
  refreshCardSummary(accId);
  renderFarmTotal();
  clearRecommend();
}

function refreshCardSummary(accId) {
  const acc = state.accounts.find(a => a.id === accId);
  const card = document.getElementById(`card-${accId}`);
  if (!acc || !card) return;
  const todayRecs = getAccRecs(acc.id, state.currentDay);
  const specialNames = new Set(todayRecs);
  const simAcc = { ingredients: { ...acc.ingredients } };
  const specialCounts = todayRecs.map(rName => {
    const r = recipes.find(x => x.name === rName);
    if (!r) return null;
    const n = canMake(simAcc, r);
    if (n > 0) deductIngredients(simAcc, r, n);
    return { name: rName, n };
  }).filter(Boolean);
  const normalForCard = recipes.filter(r => !specialNames.has(r.name));
  const bestNormal = findBestNormalOrder(JSON.parse(JSON.stringify(simAcc)), normalForCard);
  const normalCounts = bestNormal.filter(x => x.count > 0).map(x => ({ name: x.recipe.name, n: x.count }));
  const sumEl = card.querySelector('.card-summary');
  if (!sumEl) return;
  sumEl.innerHTML = `${specialCounts.map(x=>`<span class="tag tag-special" style="font-size:0.68rem">${tRecipe(x.name)}×${x.n}</span>`).join(' ')}${normalCounts.length ? `<span style="color:var(--text-muted)">・</span>${normalCounts.map(x=>`${tRecipe(x.name)}×${x.n}`).join(', ')}` : ''}`;
}

function ingKeyNav(e, gIdx) {
  if (e.key !== 'Enter' && e.key !== 'Tab') return;
  if (e.key === 'Tab') return; // 讓瀏覽器原生 Tab 處理
  e.preventDefault();
  const delta = e.shiftKey ? -1 : 1;
  const nextIdx = gIdx + delta;
  const next = document.querySelector(`input[data-gidx="${nextIdx}"]`);
  if (next) { next.focus(); next.select(); }
}

function renderFarmTotal() {
  const el = document.getElementById('farm-total-bar');
  if (!el) return;
  const farms = state.accounts.filter(a => !a.isMain);
  if (farms.length === 0) { el.innerHTML = ''; return; }
  const totals = {};
  INGREDIENTS.forEach(k => { totals[k] = 0; });
  farms.forEach(f => INGREDIENTS.forEach(k => { totals[k] += f.ingredients[k] || 0; }));
  const hasAny = Object.values(totals).some(v => v > 0);
  el.innerHTML = `<div class="farm-total-wrap">
    <div class="farm-total-title">${t('farmTotalTitle', farms.length)}</div>
    <div class="farm-total-grid">
      ${INGREDIENTS.map(k => `
        <div class="farm-total-item">
          <span class="farm-total-label">${tIng(k)}</span>
          <span class="farm-total-val${totals[k] === 0 ? ' zero' : ''}">${totals[k]}</span>
        </div>`).join('')}
    </div>
    ${!hasAny ? `<div style="font-size:0.74rem;color:var(--text-light);margin-top:8px;text-align:center">${t('farmEmpty')}</div>` : ''}
  </div>`;
}

function clearAccountIngredients(accId) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;
  if (!confirm(t('confirmClearAcc', acc.name))) return;
  INGREDIENTS.forEach(k => { acc.ingredients[k] = 0; });
  saveState();
  renderAccounts();
  clearRecommend();
  toast(t('toastClearAcc', acc.name));
}

function clearAllIngredients() {
  if (!confirm(t('confirmClearAll'))) return;
  state.accounts.forEach(acc => {
    INGREDIENTS.forEach(k => { acc.ingredients[k] = 0; });
  });
  saveState();
  renderAccounts();
  clearRecommend();
  toast(t('toastClearAll'));
}

function toggleSupplyTarget(accId, mainId, checked) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc) return;
  if (!Array.isArray(acc.supplyTarget)) acc.supplyTarget = [];
  if (checked) {
    if (!acc.supplyTarget.includes(mainId)) acc.supplyTarget.push(mainId);
  } else {
    acc.supplyTarget = acc.supplyTarget.filter(id => id !== mainId);
  }
  // 更新 label 樣式（不重繪整張卡）
  const card = document.getElementById(`card-${accId}`);
  if (card) {
    card.querySelectorAll('.supply-check-label').forEach(label => {
      const cb = label.querySelector('input[type=checkbox]');
      if (cb) label.classList.toggle('checked', cb.checked);
    });
    const hint = card.querySelector('.supply-target-wrap span:last-child');
    if (hint) hint.textContent = acc.supplyTarget.length === 0 ? t('shared') : '';
  }
  saveState();
  clearRecommend();
}

// ─── FARM CARD DRAG REORDER ───────────────────────────────────────────────
let farmDragSrcId = null;

function initFarmCardDrag() {
  const grid = document.getElementById('accounts-grid');
  grid.querySelectorAll('.account-card:not(.main-account)').forEach(card => {
    const handle = card.querySelector('.farm-drag-handle');
    if (!handle) return;
    handle.addEventListener('mousedown', () => { card.draggable = true; });
    card.addEventListener('dragstart', e => {
      farmDragSrcId = card.id.replace('card-', '');
      card.classList.add('farm-dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', () => {
      card.draggable = false;
      card.classList.remove('farm-dragging');
      grid.querySelectorAll('.account-card').forEach(c => c.classList.remove('farm-drag-over'));
      farmDragSrcId = null;
    });
    card.addEventListener('dragover', e => {
      e.preventDefault();
      if (card.id !== `card-${farmDragSrcId}` && !card.classList.contains('main-account')) {
        card.classList.add('farm-drag-over');
      }
    });
    card.addEventListener('dragleave', () => card.classList.remove('farm-drag-over'));
    card.addEventListener('drop', e => {
      e.preventDefault();
      card.classList.remove('farm-drag-over');
      if (!farmDragSrcId || card.id === `card-${farmDragSrcId}` || card.classList.contains('main-account')) return;
      const dstId = card.id.replace('card-', '');
      // Reorder in state.accounts (only among farms)
      const srcIdx = state.accounts.findIndex(a => a.id === farmDragSrcId);
      const dstIdx = state.accounts.findIndex(a => a.id === dstId);
      if (srcIdx < 0 || dstIdx < 0) return;
      const [moved] = state.accounts.splice(srcIdx, 1);
      state.accounts.splice(dstIdx, 0, moved);
      saveState();
      renderAccounts();
      initFarmCardDrag();
      clearRecommend();
    });
  });
}

function addFarmAccount() {
  const farmAccs = state.accounts.filter(a => !a.isMain);
  const num = farmAccs.length + 1;
  const id = 'farm_' + Date.now();
  state.accounts.push({
    id,
    name: t('defaultFarm', num),
    isMain: false,
    ingredients: Object.fromEntries(INGREDIENTS.map(k => [k, 0])),
    ingOrder: [...INGREDIENTS],
    allyRequested: false
  });
  saveState();
  renderAccounts();
  clearRecommend();
  toast(t('toastAddFarm', num));
}

function deleteFarmAccount(accId) {
  const acc = state.accounts.find(a => a.id === accId);
  if (!acc || acc.isMain) return;
  if (!confirm(t('confirmDelFarm', acc.name))) return;
  state.accounts = state.accounts.filter(a => a.id !== accId);
  saveState();
  renderAccounts();
  clearRecommend();
  toast(t('toastDelFarm', acc.name));
}
const TRANSFER_LIMIT = 50; // max items transferred TO each main account per day

function permutations(arr) {
  if (arr.length <= 1) return [[...arr]];
  const result = [];
  arr.forEach((item, i) => {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    permutations(rest).forEach(p => result.push([item, ...p]));
  });
  return result;
}

function findBestNormalOrder(accSnapshot, normalRecipes) {
  // Try all orderings of normal recipes; return the one that yields highest total score
  let bestScore = -1, bestResult = [];
  permutations(normalRecipes).forEach(perm => {
    const test = JSON.parse(JSON.stringify(accSnapshot));
    const result = [];
    let score = 0;
    perm.forEach(recipe => {
      const n = canMake(test, recipe);
      if (n > 0) { deductIngredients(test, recipe, n); result.push({ recipe, count: n }); score += n * recipe.score; }
    });
    if (score > bestScore) { bestScore = score; bestResult = result; }
  });
  return bestResult;
}

function clearRecommend() {
  document.getElementById('cook-plan-body').innerHTML = `<div class="empty-tip">${t('emptyTip')}</div>`;
  document.getElementById('transfer-body').innerHTML = '<div class="empty-tip">—</div>';
  document.getElementById('score-preview-body').innerHTML = '<div class="empty-tip">—</div>';
  document.getElementById('execTransferBtn').disabled = true;
  ['cookSpecialBtn','cookAllBtn'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = true; });
  const filterBar = document.getElementById('cookAcctFilter');
  if (filterBar) filterBar.style.display = 'none';
  cookAcctFilter = new Set();
  pendingTransfer = null;
  pendingCook = null;
}

function calcRecommend() {
  const day = state.currentDay;

  if (day === 7) {
    document.getElementById('cook-plan-body').innerHTML = `<div class="recommend-item" style="color:var(--red)">${t('day7Cook')}</div>`;
    document.getElementById('transfer-body').innerHTML = '<div class="empty-tip">—</div>';
    document.getElementById('score-preview-body').innerHTML = '<div class="empty-tip">—</div>';
    return;
  }

  // ── Build per-main special recipe lists ──
  const mainAccounts = state.accounts.filter(a => a.isMain);
  const mainSpecialMap = {};
  mainAccounts.forEach(acc => {
    const recs = getAccRecs(acc.id, day);
    mainSpecialMap[acc.id] = recs.map(name => recipes.find(r => r.name === name)).filter(Boolean);
  });

  const cloned = JSON.parse(JSON.stringify(state.accounts));
  const mains  = cloned.filter(a => a.isMain);
  const farms  = cloned.filter(a => !a.isMain && !a.allyRequested);

  const transfers = [];
  const mainBudgetUsed = {};
  mains.forEach(m => { mainBudgetUsed[m.id] = 0; });
  pendingCook = [];

  // ── Phase 1: 按食譜比例精確計算轉移 ──
  // 已勾選「今日已請求盟友50個」的主帳號不參與轉移

  // 農場帳號的 farmLeft 追蹤（per-farm，按帳號順序決定取用優先順序）
  const farmLeft = {};
  farms.forEach(farm => {
    farmLeft[farm.id] = {};
    INGREDIENTS.forEach(k => { farmLeft[farm.id][k] = farm.ingredients[k] || 0; });
  });

  // 計算在現有庫存 + 最多 budget 個轉移下，某食譜能多煮幾份，需要補哪些食材
  function calcRecipeTransfer(inv, recipe, budget) {
    const ings = Object.entries(recipe.ingredients).map(([rkey, perDish]) => {
      const dk = INGREDIENTS.find(d => ING_MAP[d] === rkey);
      return { dk, perDish, have: inv[dk] || 0 };
    }).filter(x => x.dk);

    // 二分搜尋最大 N：cost(N) = Σ max(0, perDish*N - have) ≤ budget
    let lo = 0, hi = budget + ings.reduce((s,x) => s + x.have, 0);
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      const cost = ings.reduce((s,x) => s + Math.max(0, x.perDish * mid - x.have), 0);
      if (cost <= budget) lo = mid; else hi = mid - 1;
    }
    const N = lo;
    if (N === 0) return null;

    const needed = {};
    ings.forEach(x => {
      const need = Math.max(0, x.perDish * N - x.have);
      if (need > 0) needed[x.dk] = need;
    });
    return { N, needed, cost: Object.values(needed).reduce((s,v)=>s+v,0) };
  }

  // 每個主帳號計算想要的食材
  const mainWants = {};
  mains.forEach(main => { mainWants[main.id] = {}; INGREDIENTS.forEach(k => { mainWants[main.id][k] = 0; }); });

  // 第一輪：只用自有庫存模擬，得到自有庫存烹飪後的剩餘（用來計算「還差多少」）
  const mainAfterOwn = {};
  mains.forEach(main => {
    const sim = JSON.parse(JSON.stringify(main));
    const specials = (mainSpecialMap[main.id] || []).sort((a,b) => b.score-a.score);
    const specialNames = new Set(specials.map(r => r.name));
    specials.forEach(r => { const n = canMake(sim, r); if (n>0) deductIngredients(sim, r, n); });
    findBestNormalOrder(JSON.parse(JSON.stringify(sim)), recipes.filter(r => !specialNames.has(r.name)))
      .forEach(({recipe, count}) => deductIngredients(sim, recipe, count));
    mainAfterOwn[main.id] = sim.ingredients;
  });

  // 第二輪：計算轉移需求，依序：指定農場 → 共用農場（按帳號順序）
  // 輔助：從農場取食材（先取指定農場，再取共用農場）
  function takeFarmIngredient(mainId, dk, need) {
    let remaining = need;
    // 先從指定給此主帳號的農場取（按農場順序）
    for (const farm of farms) {
      if (remaining <= 0) break;
      if (!(farm.supplyTarget||[]).includes(mainId)) continue;
      const avail = farmLeft[farm.id][dk] || 0;
      if (avail <= 0) continue;
      const take = Math.min(avail, remaining);
      farmLeft[farm.id][dk] -= take;
      remaining -= take;
    }
    // 再從共用農場取（按農場順序）
    for (const farm of farms) {
      if (remaining <= 0) break;
      if ((farm.supplyTarget||[]).length > 0) continue; // 跳過指定農場
      const avail = farmLeft[farm.id][dk] || 0;
      if (avail <= 0) continue;
      const take = Math.min(avail, remaining);
      farmLeft[farm.id][dk] -= take;
      remaining -= take;
    }
    return need - remaining; // 實際取到的量
  }

  function farmAvailable(mainId, dk) {
    let total = 0;
    for (const farm of farms) {
      if ((farm.supplyTarget||[]).includes(mainId) || (farm.supplyTarget||[]).length === 0) {
        total += farmLeft[farm.id][dk] || 0;
      }
    }
    return total;
  }

  const recipeQueue = [];
  mains.forEach(main => {
    if (main.allyRequested) return;
    const specialNames = new Set((mainSpecialMap[main.id] || []).map(r => r.name));
    (mainSpecialMap[main.id] || []).sort((a,b) => b.score-a.score)
      .forEach(r => recipeQueue.push({ mainId: main.id, recipe: r }));
    recipes.filter(r => !specialNames.has(r.name))
      .forEach(r => recipeQueue.push({ mainId: main.id, recipe: r }));
  });

  const budgetLeft = {};
  mains.forEach(m => { budgetLeft[m.id] = m.allyRequested ? 0 : TRANSFER_LIMIT; });
  const simInv = {};
  mains.forEach(m => { simInv[m.id] = { ...mainAfterOwn[m.id] }; });

  recipeQueue.forEach(({ mainId, recipe }) => {
    if (budgetLeft[mainId] <= 0) return;

    // 計算可用農場量（指定 + 共用）
    const result = calcRecipeTransfer(simInv[mainId], recipe, budgetLeft[mainId]);
    if (!result) return;

    // 縮減 N：受農場實際可用量限制
    let scale = 1;
    Object.entries(result.needed).forEach(([dk, want]) => {
      const avail = farmAvailable(mainId, dk);
      if (avail < want) scale = Math.min(scale, avail / want);
    });
    const actualN = Math.floor(result.N * scale);
    if (actualN === 0) return;

    Object.entries(recipe.ingredients).forEach(([rkey, perDish]) => {
      const dk = INGREDIENTS.find(d => ING_MAP[d] === rkey);
      if (!dk) return;
      const need = Math.max(0, perDish * actualN - (simInv[mainId][dk] || 0));
      if (need > 0) {
        mainWants[mainId][dk] = (mainWants[mainId][dk] || 0) + need;
        takeFarmIngredient(mainId, dk, need); // 即時從農場預扣
        budgetLeft[mainId] -= need;
        simInv[mainId][dk] = (simInv[mainId][dk] || 0) + need;
      }
    });
    deductIngredients({ ingredients: simInv[mainId] }, recipe, actualN);
  });

  // 從各農場帳號實際轉移（按照 takeFarmIngredient 相同的優先順序）
  mains.forEach(main => {
    INGREDIENTS.forEach(dk => {
      let need = mainWants[main.id][dk] || 0;
      if (need <= 0) return;
      // 指定農場優先
      for (const farm of farms) {
        if (need <= 0) break;
        if (!(farm.supplyTarget||[]).includes(main.id)) continue;
        const orig = farm.ingredients[dk] || 0;
        const taken = orig - (farmLeft[farm.id][dk] || 0);
        if (taken > 0) {
          main.ingredients[dk] = (main.ingredients[dk] || 0) + taken;
          farm.ingredients[dk] = farmLeft[farm.id][dk];
          transfers.push({ fromId: farm.id, fromName: farm.name, toId: main.id, toName: main.name, dispKey: dk, amount: taken });
          mainBudgetUsed[main.id] += taken;
          need -= taken;
        }
      }
      // 共用農場
      for (const farm of farms) {
        if (need <= 0) break;
        if ((farm.supplyTarget||[]).length > 0) continue;
        const orig = farm.ingredients[dk] || 0;
        const taken = orig - (farmLeft[farm.id][dk] || 0);
        if (taken > 0) {
          main.ingredients[dk] = (main.ingredients[dk] || 0) + taken;
          farm.ingredients[dk] = farmLeft[farm.id][dk];
          transfers.push({ fromId: farm.id, fromName: farm.name, toId: main.id, toName: main.name, dispKey: dk, amount: taken });
          mainBudgetUsed[main.id] += taken;
          need -= taken;
        }
      }
    });
  });

  // ── Phase 2: Cook ──
  const cookPlan = [];
  let totalScore = 0;

  mains.forEach(main => {
    const plan = { accountId: main.id, accountName: main.name, allyRequested: main.allyRequested, dishes: [], subtotal: 0 };
    const thisSpecials = (mainSpecialMap[main.id] || []).sort((a, b) => b.score - a.score);

    // 推薦菜優先烹飪
    thisSpecials.forEach(recipe => {
      const n = canMake(main, recipe);
      if (n > 0) {
        deductIngredients(main, recipe, n);
        plan.dishes.push({ recipe, count: n, isSpecial: true });
        plan.subtotal += n * recipe.score;
        pendingCook.push({ accountId: main.id, accountName: main.name, recipe, count: n, isSpecial: true });
      }
    });

    // 一般菜 = 所有不在本帳號推薦清單的食譜（包含其他帳號的推薦菜）
    const specialNames = new Set(thisSpecials.map(r => r.name));
    const normalForThis = recipes.filter(r => !specialNames.has(r.name));
    const snapshot = JSON.parse(JSON.stringify(main));
    const bestNormal = findBestNormalOrder(snapshot, normalForThis);
    bestNormal.forEach(({ recipe, count }) => {
      deductIngredients(main, recipe, count);
      plan.dishes.push({ recipe, count, isSpecial: false });
      plan.subtotal += count * recipe.score;
      pendingCook.push({ accountId: main.id, accountName: main.name, recipe, count, isSpecial: false });
    });

    cookPlan.push(plan);
    totalScore += plan.subtotal;
  });

  // ── Phase 2b: 農場帳號烹飪（用自有庫存，不參與轉移）──
  const allFarmsCloned = cloned.filter(a => !a.isMain);
  allFarmsCloned.forEach(farm => {
    const farmSpecials = (getAccRecs(farm.id, day))
      .map(name => recipes.find(r => r.name === name)).filter(Boolean)
      .sort((a, b) => b.score - a.score);
    const farmSpecialNames = new Set(farmSpecials.map(r => r.name));
    const plan = { accountId: farm.id, accountName: farm.name, allyRequested: false, isFarm: true, dishes: [], subtotal: 0 };

    farmSpecials.forEach(recipe => {
      const n = canMake(farm, recipe);
      if (n > 0) {
        deductIngredients(farm, recipe, n);
        plan.dishes.push({ recipe, count: n, isSpecial: true });
        plan.subtotal += n * recipe.score;
        pendingCook.push({ accountId: farm.id, accountName: farm.name, recipe, count: n, isSpecial: true });
      }
    });

    const normalForFarm = recipes.filter(r => !farmSpecialNames.has(r.name));
    const snapshot = JSON.parse(JSON.stringify(farm));
    const bestNormal = findBestNormalOrder(snapshot, normalForFarm);
    bestNormal.forEach(({ recipe, count }) => {
      deductIngredients(farm, recipe, count);
      plan.dishes.push({ recipe, count, isSpecial: false });
      plan.subtotal += count * recipe.score;
      pendingCook.push({ accountId: farm.id, accountName: farm.name, recipe, count, isSpecial: false });
    });

    if (plan.dishes.length > 0) {
      cookPlan.push(plan);
      totalScore += plan.subtotal;
    }
  });
  const remainingTotal = {};
  INGREDIENTS.forEach(k => { remainingTotal[k] = 0; });
  cloned.forEach(acc => INGREDIENTS.forEach(k => { remainingTotal[k] += acc.ingredients[k] || 0; }));

  // ── Merge transfers ──
  const mergedTransfers = [];
  transfers.forEach(t => {
    const ex = mergedTransfers.find(m => m.fromId === t.fromId && m.toId === t.toId && m.dispKey === t.dispKey);
    if (ex) ex.amount += t.amount;
    else mergedTransfers.push({ ...t });
  });
  pendingTransfer = mergedTransfers;

  // ── Render cook plan ──
  const cpEl = document.getElementById('cook-plan-body');
  cpEl.innerHTML = cookPlan.every(p => p.dishes.length === 0)
    ? `<div class="empty-tip">${t('noIngredients')}</div>`
    : `<div class="cook-plan-grid">${cookPlan.map(plan => {
        const isMain = !plan.isFarm;
        const icon = isMain ? '👑' : '🌾';
        return `<div class="cook-plan-card${isMain ? ' main-plan' : ''}" data-accid="${plan.accountId}">
          <div class="cook-plan-acct-name${isMain ? ' gold' : ''}">${icon} ${plan.accountName}
            ${plan.allyRequested ? `<span style="font-size:0.65rem;font-weight:600;color:var(--green);margin-left:6px;background:rgba(107,191,142,0.12);border:1px solid rgba(107,191,142,0.3);border-radius:5px;padding:1px 6px;">${t('allyOnlyNote')}</span>` : ''}
          </div>
          ${plan.dishes.length === 0 ? `<div class="no-dish">${t('noDish')}</div>` :
            plan.dishes.map((d, i) => `
              <div class="dish-row">
                <div class="dish-row-left">
                  <span style="font-size:0.68rem;color:var(--text-light);min-width:16px;text-align:right">${i+1}.</span>
                  ${d.isSpecial ? `<span class="tag tag-special" style="font-size:0.68rem">${t('tagSpecial')}</span>` : `<span class="tag tag-normal" style="font-size:0.68rem">${t('tagNormal')}</span>`}
                  <span>${tRecipe(d.recipe.name)}</span>
                  <span style="color:var(--text-muted);font-size:0.76rem">${t('dishUnit', d.count)}</span>
                </div>
                <span class="dish-score${d.isSpecial ? ' special' : ''}">+${(d.count * d.recipe.score).toLocaleString()}</span>
              </div>`).join('')}
          <div class="cook-plan-subtotal${isMain ? ' gold' : ''}">
            <span>${t('dishCount', plan.dishes.reduce((s,d)=>s+d.count,0))}</span>
            <span>+${plan.subtotal.toLocaleString()} ${t('scoreUnit')}</span>
          </div>
        </div>`;
      }).join('')}</div>`;

  // ── Render transfer panel (grouped by destination, with 50-limit progress) ──
  const tb = document.getElementById('transfer-body');
  if (mergedTransfers.length) {
    const byDest = {};
    mergedTransfers.forEach(tr => { (byDest[tr.toId] = byDest[tr.toId] || { list: [] }).list.push(tr); });
    tb.innerHTML = Object.entries(byDest).map(([toId, { list }]) => {
      const toAcc = state.accounts.find(a => a.id === toId);
      const toName = toAcc ? toAcc.name : toId;
      const used = mainBudgetUsed[toId] || 0;
      const pct = Math.min(100, (used / TRANSFER_LIMIT) * 100);
      const barColor = pct >= 100 ? 'var(--red)' : pct >= 80 ? 'var(--gold)' : 'var(--green)';
      return `<div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:0.74rem;font-weight:700;color:var(--gold)">→ ${toName}</span>
          <span style="font-size:0.7rem;font-weight:700;color:${barColor}">${used} / ${TRANSFER_LIMIT}</span>
        </div>
        <div style="height:5px;background:rgba(123,158,199,0.15);border-radius:99px;overflow:hidden;margin-bottom:7px">
          <div style="height:100%;width:${pct}%;background:${barColor};border-radius:99px;transition:width 0.4s"></div>
        </div>
        ${list.map(tr => {
          const fromAcc = state.accounts.find(a => a.id === tr.fromId);
          const fromName = fromAcc ? fromAcc.name : tr.fromId;
          return `<div class="recommend-item" style="padding:3px 0">
            <span class="tag tag-from" style="font-size:0.68rem">${fromName}</span>
            <span style="margin-left:4px;color:var(--text-muted)">${tIng(tr.dispKey)}</span>
            <strong style="margin-left:4px">× ${tr.amount}</strong>
          </div>`;
        }).join('')}
      </div>`;
    }).join('');
  } else {
    tb.innerHTML = `<div class="empty-tip">${t('noTransfer')}</div>`;
  }

  // ── Render score preview + remaining ingredients ──
  const pb = document.getElementById('score-preview-body');
  const hasRemain = Object.values(remainingTotal).some(v => v > 0);
  const remainHTML = hasRemain
    ? `<div style="font-size:0.74rem;font-weight:700;color:var(--text-muted);margin:12px 0 6px">${t('remainTitle')}</div>
       <div class="remain-grid">
         ${INGREDIENTS.map(k => remainingTotal[k] > 0 ? `
           <div class="remain-item has-left"><span class="rk">${tIng(k)}</span><span class="rv">${remainingTotal[k]}</span></div>` : '').filter(Boolean).join('')}
       </div>`
    : `<div style="font-size:0.78rem;color:var(--green);margin-top:10px;font-weight:600">${t('zeroWaste')}</div>`;

  pb.innerHTML = `
    <div style="text-align:center;padding:10px 0 4px">
      <div class="score-preview">+${totalScore.toLocaleString()} <small>${t('scoreUnit')}</small></div>
    </div>
    <div style="border-top:1px solid rgba(123,158,199,0.15);margin-top:10px;padding-top:10px">
      ${cookPlan.map(p => {
        const acc = state.accounts.find(a => a.id === p.accountId);
        const name = acc ? acc.name : p.accountName;
        return `<div style="display:flex;justify-content:space-between;font-size:0.78rem;padding:2px 0">
          <span style="color:var(--text-muted)">${name}</span>
          <span style="font-weight:600;color:var(--primary-dark)">+${p.subtotal.toLocaleString()}</span>
        </div>`;
      }).join('')}
    </div>
    ${remainHTML}`;

  // ── Gap hint: 推薦菜再多一道還缺哪些食材 ──
  const gapHints = [];
  mains.forEach(main => {
    const specials = mainSpecialMap[main.id] || [];
    specials.forEach(recipe => {
      const missing = [];
      Object.entries(recipe.ingredients).forEach(([rkey, perDish]) => {
        const dk = INGREDIENTS.find(d => ING_MAP[d] === rkey);
        if (!dk) return;
        const have = main.ingredients[dk] || 0;
        if (have < perDish) missing.push({ dk, need: perDish - have });
      });
      if (missing.length > 0) {
        gapHints.push({ accName: main.name, recipeName: recipe.name, missing });
      }
    });
  });

  const cpEl2 = document.getElementById('cook-plan-body');
  const gapEl = document.getElementById('gap-hint-body') || (() => {
    const el = document.createElement('div');
    el.id = 'gap-hint-body';
    cpEl2.parentNode.insertBefore(el, cpEl2.nextSibling);
    return el;
  })();

  document.getElementById('execTransferBtn').disabled = mergedTransfers.length === 0;
  ['cookSpecialBtn','cookAllBtn'].forEach(id => { const el = document.getElementById(id); if(el) el.disabled = (pendingCook.length === 0); });
  cookAcctFilter = new Set(); // 重新計算時重置為全選
  renderCookAcctFilter();
}

function deductIngredients(acc, recipe, count) {
  Object.entries(recipe.ingredients).forEach(([rkey, amt]) => {
    const dk = INGREDIENTS.find(d => ING_MAP[d] === rkey);
    if (dk) acc.ingredients[dk] = Math.max(0, (acc.ingredients[dk] || 0) - amt * count);
  });
}

function execTransfer() {
  if (!pendingTransfer || pendingTransfer.length === 0) return;
  pendingTransfer.forEach(tr => {
    const from = state.accounts.find(a => a.id === tr.fromId);
    const to = state.accounts.find(a => a.id === tr.toId);
    if (!from || !to) return;
    const cur = from.ingredients[tr.dispKey] || 0;
    const give = Math.min(cur, tr.amount);
    from.ingredients[tr.dispKey] = cur - give;
    to.ingredients[tr.dispKey] = (to.ingredients[tr.dispKey] || 0) + give;
  });
  saveState();
  pendingTransfer = [];
  document.getElementById('execTransferBtn').disabled = true;
  renderAccounts();
  toast(t('toastTransfer'));
  calcRecommend();
}

let cookAcctFilter = new Set(); // 空 = 全部；有值 = 只烹飪這些

function renderCookAcctFilter() {
  const bar = document.getElementById('cookAcctFilter');
  const box = document.getElementById('cookAcctCheckboxes');
  if (!pendingCook || pendingCook.length === 0) { bar.style.display = 'none'; return; }
  bar.style.display = 'flex';
  // 有出現在 pendingCook 的帳號
  const acctIds = [...new Set(pendingCook.map(i => i.accountId))];
  // 預設全選
  if (cookAcctFilter.size === 0) acctIds.forEach(id => cookAcctFilter.add(id));
  box.innerHTML = acctIds.map(id => {
    const acc = state.accounts.find(a => a.id === id);
    const name = acc ? acc.name : id;
    const icon = acc && acc.isMain ? '👑' : '🌾';
    const checked = cookAcctFilter.has(id);
    return `<label class="cook-filter-chip${checked ? ' checked' : ''}">
      <input type="checkbox" data-accid="${id}" ${checked ? 'checked' : ''}
        onchange="toggleCookAcctFilter('${id}', this.checked)">
      ${icon} ${name}
    </label>`;
  }).join('');
}

function toggleCookAcctFilter(accId, checked) {
  if (checked) cookAcctFilter.add(accId);
  else cookAcctFilter.delete(accId);
  const label = document.querySelector(`.cook-filter-chip input[data-accid="${accId}"]`)?.parentElement;
  if (label) label.classList.toggle('checked', checked);
  const card = document.querySelector(`.cook-plan-card[data-accid="${accId}"]`);
  if (card) card.style.display = checked ? '' : 'none';
}

function setCookFilterAll(val) {
  const box = document.getElementById('cookAcctCheckboxes');
  box.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.checked = val;
    const id = cb.dataset.accid;
    if (val) cookAcctFilter.add(id); else cookAcctFilter.delete(id);
    cb.parentElement.classList.toggle('checked', val);
    const card = document.querySelector(`.cook-plan-card[data-accid="${id}"]`);
    if (card) card.style.display = val ? '' : 'none';
  });
}

function cookDishes(mode = 'all') {
  if (!pendingCook || pendingCook.length === 0) return;
  // 帳號過濾（cookAcctFilter 空集合代表全選）
  const activeAccts = cookAcctFilter.size > 0 ? cookAcctFilter : new Set(pendingCook.map(i => i.accountId));
  const items = pendingCook.filter(item =>
    activeAccts.has(item.accountId) && (mode === 'all' || item.isSpecial)
  );
  if (items.length === 0) { toast(t('toastNoCook')); return; }

  let totalDishes = 0;
  items.forEach(item => {
    const acc = state.accounts.find(a => a.id === item.accountId);
    if (!acc) return;
    const recipe = item.recipe;
    const count = item.count;
    for (let i = 0; i < count; i++) {
      Object.entries(recipe.ingredients).forEach(([rkey, amt]) => {
        const dispKey = INGREDIENTS.find(d => ING_MAP[d] === rkey);
        if (dispKey) acc.ingredients[dispKey] = Math.max(0, (acc.ingredients[dispKey] || 0) - amt);
      });
    }
    totalDishes += count;
  });

  // 從 pendingCook 移除已烹飪的項目
  const cookedIds = new Set(items.map(i => `${i.accountId}__${i.recipe.name}`));
  pendingCook = pendingCook.filter(i => !cookedIds.has(`${i.accountId}__${i.recipe.name}`));
  // 清除已不在 pendingCook 的帳號的篩選狀態
  const remainIds = new Set(pendingCook.map(i => i.accountId));
  cookAcctFilter = new Set([...cookAcctFilter].filter(id => remainIds.has(id)));

  saveState();
  if (pendingCook.length === 0) {
    pendingTransfer = [];
    document.getElementById('execTransferBtn').disabled = true;
  }
  ['cookSpecialBtn','cookAllBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = (pendingCook.length === 0);
  });

  render();
  renderCookAcctFilter();
  const label = mode === 'special' ? t('cookSpecialLabel') : t('cookAllLabel');
  toast(t('toastCookDone', label, totalDishes));
  if (pendingCook.length === 0) clearRecommend();
  else calcRecommend();
}

// ─── TOAST ────────────────────────────────────────────────────────────────
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ─── DAY CONFIG PANEL ─────────────────────────────────────────────────────
function toggleDayConfig() {
  const panel = document.getElementById('dayConfigPanel');
  const btn = document.getElementById('configToggleBtn');
  const isOpen = panel.style.display !== 'none';
  if (isOpen) {
    panel.style.display = 'none';
    btn.textContent = t('dailyConfig');
  } else {
    renderDayConfigSlots();
    panel.style.display = 'block';
    btn.textContent = t('closeConfig');
  }
}

function renderDayConfigSlots() {
  const container = document.getElementById('dayConfigSlots');
  const allCookable = state.accounts; // 主帳號 + 農場帳號都可設定推薦菜

  const makeOptions = (selected) =>
    `<option value="">${t('noneOpt')}</option>` +
    recipes.map(r =>
      `<option value="${r.name}" ${r.name === selected ? 'selected' : ''}>${tRecipe(r.name)}（${r.isSpecial ? t('tagSpecial') : t('tagNormal')}·${r.score}${t('scoreUnit')}）</option>`
    ).join('');

  const headerCols = allCookable.map(acc =>
    `<th style="padding:6px 12px;font-size:0.75rem;font-weight:700;color:${acc.isMain ? 'var(--gold)' : 'var(--primary-dark)'};text-align:center;min-width:200px;">
      ${acc.isMain ? '👑 ' : '🌾 '}${acc.name}
    </th>`
  ).join('');

  const rows = [1,2,3,4,5,6].map(d => {
    const cells = allCookable.map(acc => {
      const cur = (state.accountRecommended[acc.id] || {})[d] || [];
      return `<td style="padding:6px 10px;vertical-align:top;">
        <div style="display:flex;flex-direction:column;gap:5px;">
          <select id="rec-${acc.id}-${d}-1" class="form-select" style="font-size:0.78rem;padding:4px 8px;">${makeOptions(cur[0]||'')}</select>
          <select id="rec-${acc.id}-${d}-2" class="form-select" style="font-size:0.78rem;padding:4px 8px;">${makeOptions(cur[1]||'')}</select>
        </div>
      </td>`;
    }).join('');
    return `<tr>
      <td style="padding:6px 14px;font-size:0.78rem;font-weight:700;color:var(--primary-dark);white-space:nowrap;border-right:1px solid rgba(123,158,199,0.2)">Day ${d}</td>
      ${cells}
    </tr>`;
  }).join('');

  container.innerHTML = `
    <table style="border-collapse:collapse;width:100%;background:rgba(255,255,255,0.5);border-radius:10px;overflow:hidden;">
      <thead>
        <tr style="background:rgba(123,158,199,0.10);">
          <th style="padding:8px 14px;font-size:0.75rem;font-weight:700;color:var(--text-muted);text-align:left;border-right:1px solid rgba(123,158,199,0.2)">${t('dayCol')}</th>
          ${headerCols}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function saveDayConfig() {
  const allCookable = state.accounts;
  if (!state.accountRecommended) state.accountRecommended = {};
  allCookable.forEach(acc => {
    if (!state.accountRecommended[acc.id]) state.accountRecommended[acc.id] = {};
    [1,2,3,4,5,6].forEach(d => {
      const v1 = document.getElementById(`rec-${acc.id}-${d}-1`)?.value || '';
      const v2 = document.getElementById(`rec-${acc.id}-${d}-2`)?.value || '';
      state.accountRecommended[acc.id][d] = [v1, v2].filter(Boolean);
    });
    state.accountRecommended[acc.id][7] = [];
  });
  saveState();
  toggleDayConfig();
  clearRecommend();
  render();
  toast(t('toastSaveConfig'));
}

// ─── INIT ─────────────────────────────────────────────────────────────────
loadState();
render();
applyI18n();
