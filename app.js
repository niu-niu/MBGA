// =====================================================================
// VERCEL WEB ANALYTICS
// =====================================================================
import { inject } from '@vercel/analytics';
inject();

// =====================================================================
// WHO GROWTH STANDARDS DATA (simplified, monthly 0-24 months)
// Source: WHO Child Growth Standards
// =====================================================================
const WHO = {
  ages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24],
  boys: {
    weight: { // kg
      P3:  [2.5, 3.4, 4.3, 5.0, 5.6, 6.1, 6.5, 6.9, 7.2, 7.5, 7.8, 8.1, 8.3, 9.1, 9.8, 10.5, 11.1],
      P15: [2.8, 3.8, 4.7, 5.4, 6.0, 6.5, 7.0, 7.4, 7.7, 8.0, 8.3, 8.6, 8.9, 9.7, 10.5, 11.2, 11.9],
      P50: [3.3, 4.5, 5.6, 6.4, 7.0, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6, 10.5, 11.3, 12.1, 12.9],
      P85: [3.9, 5.1, 6.3, 7.2, 7.9, 8.4, 8.9, 9.3, 9.7, 10.0, 10.3, 10.6, 10.9, 11.9, 12.8, 13.7, 14.6],
      P97: [4.3, 5.6, 6.9, 7.8, 8.6, 9.2, 9.7, 10.2, 10.6, 11.0, 11.3, 11.6, 11.9, 13.0, 14.0, 15.0, 16.0]
    },
    length: { // cm
      P3:  [46.3, 51.1, 54.8, 57.7, 60.1, 62.2, 64.1, 65.7, 67.2, 68.6, 69.9, 71.2, 72.4, 76.1, 79.4, 82.3, 85.0],
      P15: [47.8, 52.6, 56.3, 59.2, 61.7, 63.8, 65.7, 67.4, 68.9, 70.3, 71.7, 73.0, 74.2, 78.0, 81.4, 84.4, 87.1],
      P50: [49.9, 54.7, 58.4, 61.4, 63.9, 66.0, 67.9, 69.6, 71.2, 72.6, 74.0, 75.3, 76.5, 80.5, 84.0, 87.1, 90.0],
      P85: [52.0, 56.9, 60.7, 63.7, 66.3, 68.5, 70.5, 72.2, 73.8, 75.3, 76.7, 78.0, 79.3, 83.5, 87.1, 90.3, 93.3],
      P97: [53.4, 58.4, 62.3, 65.4, 68.0, 70.3, 72.3, 74.1, 75.7, 77.2, 78.7, 80.0, 81.3, 85.6, 89.4, 92.7, 95.7]
    },
    headCirc: { // cm
      P3:  [32.1, 35.1, 37.0, 38.3, 39.4, 40.2, 40.9, 41.5, 42.0, 42.4, 42.8, 43.1, 43.4, 44.4, 45.1, 45.7, 46.2],
      P15: [33.1, 36.1, 38.0, 39.3, 40.4, 41.2, 41.9, 42.5, 43.0, 43.4, 43.8, 44.1, 44.4, 45.4, 46.1, 46.7, 47.3],
      P50: [34.5, 37.3, 39.1, 40.5, 41.5, 42.4, 43.1, 43.7, 44.2, 44.6, 45.0, 45.3, 45.6, 46.6, 47.3, 47.9, 48.5],
      P85: [35.8, 38.6, 40.4, 41.8, 42.9, 43.7, 44.4, 45.0, 45.5, 46.0, 46.3, 46.7, 47.0, 48.0, 48.7, 49.4, 50.0],
      P97: [36.9, 39.6, 41.4, 42.7, 43.8, 44.7, 45.4, 46.0, 46.5, 47.0, 47.3, 47.7, 48.0, 49.0, 49.8, 50.4, 51.0]
    }
  },
  girls: {
    weight: {
      P3:  [2.4, 3.2, 4.0, 4.6, 5.1, 5.6, 6.0, 6.3, 6.6, 6.9, 7.1, 7.4, 7.6, 8.3, 9.0, 9.7, 10.3],
      P15: [2.7, 3.5, 4.3, 5.0, 5.5, 6.0, 6.4, 6.8, 7.1, 7.4, 7.7, 7.9, 8.2, 9.0, 9.7, 10.4, 11.1],
      P50: [3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7, 8.9, 9.7, 10.5, 11.3, 12.0],
      P85: [3.7, 4.8, 5.8, 6.6, 7.3, 7.8, 8.3, 8.7, 9.0, 9.3, 9.6, 9.9, 10.1, 11.1, 12.0, 12.8, 13.7],
      P97: [4.0, 5.3, 6.3, 7.2, 7.9, 8.5, 9.0, 9.4, 9.8, 10.1, 10.4, 10.7, 11.0, 12.0, 13.0, 13.9, 14.8]
    },
    length: {
      P3:  [45.6, 50.0, 53.4, 56.2, 58.5, 60.5, 62.3, 63.9, 65.3, 66.7, 68.0, 69.2, 70.3, 74.0, 77.2, 80.1, 82.7],
      P15: [47.0, 51.5, 54.9, 57.7, 60.1, 62.1, 63.9, 65.6, 67.0, 68.4, 69.7, 71.0, 72.1, 75.9, 79.3, 82.2, 84.9],
      P50: [49.1, 53.7, 57.1, 59.9, 62.2, 64.2, 66.0, 67.7, 69.2, 70.6, 71.9, 73.1, 74.3, 78.3, 81.7, 84.8, 87.6],
      P85: [51.3, 55.9, 59.3, 62.1, 64.5, 66.6, 68.4, 70.1, 71.6, 73.1, 74.4, 75.7, 76.9, 80.9, 84.5, 87.6, 90.5],
      P97: [52.7, 57.4, 60.9, 63.8, 66.2, 68.3, 70.2, 71.9, 73.4, 74.9, 76.3, 77.6, 78.8, 83.0, 86.6, 89.8, 92.7]
    },
    headCirc: {
      P3:  [31.7, 34.3, 36.0, 37.2, 38.2, 39.0, 39.7, 40.2, 40.7, 41.1, 41.4, 41.7, 42.0, 42.9, 43.6, 44.2, 44.7],
      P15: [32.6, 35.2, 36.9, 38.2, 39.2, 40.0, 40.7, 41.2, 41.7, 42.1, 42.5, 42.8, 43.0, 44.0, 44.7, 45.3, 45.8],
      P50: [33.9, 36.5, 38.2, 39.5, 40.5, 41.3, 42.0, 42.6, 43.1, 43.5, 43.8, 44.1, 44.4, 45.4, 46.1, 46.7, 47.3],
      P85: [35.1, 37.8, 39.5, 40.8, 41.9, 42.7, 43.4, 44.0, 44.5, 44.9, 45.3, 45.6, 45.9, 46.8, 47.6, 48.3, 48.8],
      P97: [36.2, 38.8, 40.5, 41.8, 42.9, 43.8, 44.5, 45.1, 45.6, 46.0, 46.4, 46.7, 47.0, 48.0, 48.8, 49.4, 50.0]
    }
  }
};

// =====================================================================
// DATA LAYER (API-first with localStorage fallback)
// =====================================================================
const STORAGE_KEY = 'mbga_baby_data';
const API_BASE = '/api/data';

function getDefaultData() {
  return {
    baby: { name: '', birthDate: '', gender: 'boy' },
    feedings: [],
    diapers: [],
    growth: []
  };
}

function loadDataLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return getDefaultData();
}

function saveDataLocal(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

async function loadDataRemote() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('API fetch failed');
  return res.json();
}

async function saveDataRemote(data) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('API save failed');
  return res.json();
}

async function loadData() {
  try {
    const remote = await loadDataRemote();
    saveDataLocal(remote);
    return remote;
  } catch(e) {
    console.warn('后端连接失败，使用本地缓存', e);
    return loadDataLocal();
  }
}

async function saveData(data) {
  saveDataLocal(data);
  try { await saveDataRemote(data); } catch(e) {
    console.warn('后端同步失败，数据已保存在本地', e);
  }
}

let appData = getDefaultData();

// =====================================================================
// UTILITY
// =====================================================================
function getNowDateTimeLocal() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
}

function getTodayStr() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function formatDateTime(dt) {
  if (!dt) return '';
  const d = new Date(dt);
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hour = d.getHours().toString().padStart(2, '0');
  const min = d.getMinutes().toString().padStart(2, '0');
  return `${month}-${day} ${hour}:${min}`;
}

function formatDate(d) {
  if (!d) return '';
  const parsed = new Date(d);
  return `${parsed.getFullYear()}-${(parsed.getMonth()+1).toString().padStart(2,'0')}-${parsed.getDate().toString().padStart(2,'0')}`;
}

function calcAgeMonths(birthDate, targetDate) {
  if (!birthDate) return 0;
  const b = new Date(birthDate);
  const t = targetDate ? new Date(targetDate) : new Date();
  let months = (t.getFullYear() - b.getFullYear()) * 12 + (t.getMonth() - b.getMonth());
  if (t.getDate() < b.getDate()) months -= 1;
  return Math.max(0, months);
}

function ageDisplay(months) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y > 0) return `${y}岁${m}个月`;
  if (m === 0) return '新生儿';
  return `${m}个月`;
}

// =====================================================================
// PERCENTILE CALCULATION
// =====================================================================
function interpolate(arr, ages, targetAge) {
  if (targetAge <= ages[0]) return arr[0];
  if (targetAge >= ages[ages.length - 1]) return arr[arr.length - 1];
  for (let i = 0; i < ages.length - 1; i++) {
    if (targetAge >= ages[i] && targetAge <= ages[i + 1]) {
      const t = (targetAge - ages[i]) / (ages[i + 1] - ages[i]);
      return arr[i] + t * (arr[i + 1] - arr[i]);
    }
  }
  return arr[arr.length - 1];
}

function calcPercentile(ageMonths, value, gender, metric) {
  if (!gender || !metric || value == null) return null;
  const data = WHO[gender === 'girl' ? 'girls' : 'boys'][metric];
  if (!data) return null;

  const pValues = {};
  for (const key of ['P3', 'P15', 'P50', 'P85', 'P97']) {
    pValues[key] = interpolate(data[key], WHO.ages, ageMonths);
  }

  // Determine which band the value falls into
  const bands = [
    { pct: 3,  val: pValues.P3 },
    { pct: 15, val: pValues.P15 },
    { pct: 50, val: pValues.P50 },
    { pct: 85, val: pValues.P85 },
    { pct: 97, val: pValues.P97 }
  ];

  if (value <= bands[0].val) return '<3';
  if (value >= bands[4].val) return '>97';

  for (let i = 0; i < bands.length - 1; i++) {
    if (value >= bands[i].val && value <= bands[i+1].val) {
      const range = bands[i+1].val - bands[i].val;
      const pos = value - bands[i].val;
      const frac = range > 0 ? pos / range : 0;
      const pct = Math.round(bands[i].pct + frac * (bands[i+1].pct - bands[i].pct));
      return `${pct}`;
    }
  }
  return null;
}

function getPercentileData() {
  const baby = appData.baby;
  if (!baby.birthDate || appData.growth.length === 0) return [];
  return appData.growth
    .map(g => {
      const ageMonths = calcAgeMonths(baby.birthDate, g.date);
      return {
        age: ageMonths,
        weight: g.weight,
        height: g.height,
        head: g.headCirc,
        weightPct: calcPercentile(ageMonths, g.weight, baby.gender, 'weight'),
        heightPct: calcPercentile(ageMonths, g.height, baby.gender, 'length'),
        headPct: calcPercentile(ageMonths, g.headCirc, baby.gender, 'headCirc'),
        date: g.date
      };
    })
    .filter(p => p.age >= 0 && p.age <= 24)
    .sort((a, b) => a.age - b.age);
}

// =====================================================================
// =====================================================================
// CHART RENDERING
// =====================================================================
const DAYS_PER_MONTH = 30.4375;

function getDailyWHOData(gender, metric) {
  const whoSet = WHO[gender === 'girl' ? 'girls' : 'boys'][metric];
  if (!whoSet) return null;
  const result = {};
  for (const key of ['P3', 'P15', 'P50', 'P85', 'P97']) {
    result[key] = [];
    for (let d = 0; d <= 60; d++) {
      result[key].push({ x: d, y: interpolate(whoSet[key], WHO.ages, d / DAYS_PER_MONTH) });
    }
  }
  return result;
}

let chartInstances = {};

function destroyChart(key) {
  if (chartInstances[key]) {
    chartInstances[key].destroy();
    chartInstances[key] = null;
  }
}

function renderGrowthChart(canvasId, metric, label, unit, percentileData) {
  destroyChart(canvasId);
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const baby = appData.baby;
  const gender = baby.gender || 'boy';
  const dailyWHO = getDailyWHOData(gender, metric);
  if (!dailyWHO) return;

  const datasets = [];
  const pctColors = {
    P3:  { border: '#9C27B0', bg: 'rgba(156,39,176,0.08)',  label: 'P3' },
    P15: { border: '#2196F3', bg: 'rgba(33,150,243,0.08)',  label: 'P15' },
    P50: { border: '#4CAF50', bg: 'rgba(76,175,80,0.08)',   label: 'P50' },
    P85: { border: '#F9A825', bg: 'rgba(249,168,37,0.08)',  label: 'P85' },
    P97: { border: '#E1251B', bg: 'rgba(225,37,27,0.08)',   label: 'P97' }
  };

  // WHO percentile lines (daily interpolated)
  for (const key of ['P3', 'P15', 'P50', 'P85', 'P97']) {
    datasets.push({
      label: pctColors[key].label,
      data: dailyWHO[key],
      borderColor: pctColors[key].border,
      backgroundColor: pctColors[key].bg,
      borderWidth: 1.5,
      borderDash: key === 'P50' ? [] : [5, 3],
      pointRadius: 0,
      pointHoverRadius: 4,
      fill: false,
      tension: 0.3,
      order: 10
    });
  }

  // Baby data points (convert months to days)
  if (percentileData.length > 0) {
    datasets.push({
      label: '宝宝',
      data: percentileData.map(p => ({ x: Math.round(p.age * DAYS_PER_MONTH), y: p[metric === 'length' ? 'height' : metric === 'headCirc' ? 'head' : 'weight'] })),
      borderColor: '#000000',
      backgroundColor: '#000000',
      borderWidth: 2.5,
      pointRadius: 5,
      pointBackgroundColor: '#E1251B',
      pointBorderColor: '#FFFFFF',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
      tension: 0.2,
      order: 1,
      showLine: percentileData.length >= 2
    });
  }

  chartInstances[canvasId] = new Chart(ctx, {
    type: 'scatter',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              const x = ctx.parsed.x;
              const y = ctx.parsed.y;
              if (ctx.dataset.label === '宝宝') {
                const pd = percentileData.find(p => Math.abs(Math.round(p.age * DAYS_PER_MONTH) - x) <= 1);
                const pctInfo = pd ? ` (P${pd[metric === 'length' ? 'heightPct' : metric === 'headCirc' ? 'headPct' : 'weightPct']})` : '';
                return `${ctx.dataset.label}: ${y} ${unit} | 第${Math.round(x)}天${pctInfo}`;
              }
              return `${ctx.dataset.label}: ${y} ${unit} | 第${Math.round(x)}天`;
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: '日龄 (天)', font: { weight: 'bold' } },
          min: 0,
          max: 60,
          ticks: { stepSize: 10, callback: v => '第' + v + '天' }
        },
        y: {
          title: { display: true, text: unit, font: { weight: 'bold' } },
          grace: '5%'
        }
      }
    }
  });
}

function renderAllCharts() {
  const pdata = getPercentileData();
  renderGrowthChart('chartWeight', 'weight', '体重 (kg)', 'kg', pdata);
  renderGrowthChart('chartHeight', 'length', '身长 (cm)', 'cm', pdata);
  renderGrowthChart('chartHead', 'headCirc', '头围 (cm)', 'cm', pdata);
}

// =====================================================================
// DASHBOARD
// =====================================================================
function renderDashboard() {
  const baby = appData.baby;
  const today = getTodayStr();

  // Today summary
  const todayFeedings = appData.feedings.filter(f => f.dateTime && f.dateTime.startsWith(today));
  const todayDiapers = appData.diapers.filter(d => d.dateTime && d.dateTime.startsWith(today));
  const totalMilk = todayFeedings.filter(f => f.amount).reduce((s, f) => s + Number(f.amount), 0);
  const peeCount = todayDiapers.filter(d => d.type === 'pee' || d.type === 'both').length;
  const poopCount = todayDiapers.filter(d => d.type === 'poop' || d.type === 'both').length;

  // Last records for small-text display
  const sortedFeedings = [...todayFeedings].sort((a, b) => b.dateTime.localeCompare(a.dateTime));
  const sortedDiapers = [...todayDiapers].sort((a, b) => b.dateTime.localeCompare(a.dateTime));
  const lastFeeding = sortedFeedings[0];
  const lastDiaper = sortedDiapers[0];

  document.getElementById('todaySummary').innerHTML = `
    <div class="summary-item">
      <div class="value">${todayFeedings.length}</div>
      <div class="label">🍼 喂养次数</div>
      ${lastFeeding ? `<div class="last-record">上次 ${formatDateTime(lastFeeding.dateTime)}</div>` : ''}
    </div>
    <div class="summary-item blue">
      <div class="value">${totalMilk}</div>
      <div class="label">💧 总奶量 (ml)</div>
      ${lastFeeding && lastFeeding.amount ? `<div class="last-record">上次 ${lastFeeding.amount}ml</div>` : ''}
    </div>
    <div class="summary-item green">
      <div class="value">${peeCount}</div>
      <div class="label">💧 小便次数</div>
      ${lastDiaper ? `<div class="last-record">上次 ${formatDateTime(lastDiaper.dateTime)}</div>` : ''}
    </div>
    <div class="summary-item pink">
      <div class="value">${poopCount}</div>
      <div class="label">💩 大便次数</div>
    </div>
  `;

  // Latest growth
  const latestGrowthCard = document.getElementById('latestGrowthCard');
  const latestGrowthStats = document.getElementById('latestGrowthStats');
  const latestGrowthDate = document.getElementById('latestGrowthDate');

  if (appData.growth.length > 0) {
    const sorted = [...appData.growth].sort((a, b) => b.date.localeCompare(a.date));
    const latest = sorted[0];
    const ageMonths = baby.birthDate ? calcAgeMonths(baby.birthDate, latest.date) : null;
    const wp = ageMonths != null ? calcPercentile(ageMonths, latest.weight, baby.gender, 'weight') : null;
    const hp = ageMonths != null ? calcPercentile(ageMonths, latest.height, baby.gender, 'length') : null;
    const hcp = ageMonths != null ? calcPercentile(ageMonths, latest.headCirc, baby.gender, 'headCirc') : null;

    latestGrowthCard.style.display = 'block';
    latestGrowthDate.textContent = `测量日期: ${latest.date}`;
    latestGrowthStats.innerHTML = `
      <div class="growth-stat">
        <div class="g-value">${latest.weight}</div>
        <div class="g-label">⚖️ 体重 (kg)</div>
        <div class="g-pct">${wp ? 'P' + wp : '--'}</div>
      </div>
      <div class="growth-stat">
        <div class="g-value">${latest.height}</div>
        <div class="g-label">📐 身长 (cm)</div>
        <div class="g-pct">${hp ? 'P' + hp : '--'}</div>
      </div>
      <div class="growth-stat">
        <div class="g-value">${latest.headCirc}</div>
        <div class="g-label">🧠 头围 (cm)</div>
        <div class="g-pct">${hcp ? 'P' + hcp : '--'}</div>
      </div>
    `;
  } else {
    latestGrowthCard.style.display = 'none';
  }

  // Charts
  renderAllCharts();
}

// =====================================================================
// FEEDING
// =====================================================================
function renderFeedingList() {
  const today = getTodayStr();
  const list = [...appData.feedings]
    .filter(f => f.dateTime && f.dateTime.startsWith(today))
    .sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  const total = list.filter(f => f.amount).reduce((s, f) => s + Number(f.amount), 0);
  document.getElementById('todayFeedingTotal').textContent = `共 ${list.length} 次 · ${total} ml`;

  const container = document.getElementById('feedingList');
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🍼</div><p>今天还没有喂养记录</p></div>`;
    return;
  }
  container.innerHTML = list.map((f, i) => `
    <div class="record-item">
      <div class="record-icon feeding">${f.type === 'breast' ? '🤱' : '🍼'}</div>
      <div class="record-info">
        <div class="record-desc">${f.type === 'breast' ? '母乳' : '配方奶'} ${f.amount ? f.amount + ' ml' : ''}</div>
        <div class="record-meta">${formatDateTime(f.dateTime)}${f.notes ? ' · ' + f.notes : ''}</div>
      </div>
      <div class="record-actions">
        <button class="btn-danger btn-sm" onclick="deleteFeeding(${i},'${today}')">🗑️</button>
      </div>
    </div>
  `).join('');
}

function saveFeeding() {
  const timeEl = document.getElementById('feedingTime');
  const amountEl = document.getElementById('feedingAmount');
  const notesEl = document.getElementById('feedingNotes');

  const typeBtns = document.querySelectorAll('#feedingTypeToggle .type-btn');
  let type = 'breast';
  typeBtns.forEach(b => { if (b.classList.contains('active')) type = b.dataset.type; });

  const dateTime = timeEl.value || getNowDateTimeLocal();
  const amount = amountEl.value ? Number(amountEl.value) : null;
  const notes = notesEl.value.trim();

  appData.feedings.push({ dateTime, type, amount, notes });
  saveData(appData);

  timeEl.value = getNowDateTimeLocal();
  amountEl.value = '';
  notesEl.value = '';

  renderFeedingList();
  renderDashboard();
}

function deleteFeeding(idx, today) {
  const list = appData.feedings
    .map((f, i) => ({ f, i }))
    .filter(x => x.f.dateTime && x.f.dateTime.startsWith(today));
  if (idx < list.length) {
    appData.feedings.splice(list[idx].i, 1);
    saveData(appData);
    renderFeedingList();
    renderDashboard();
  }
}

// =====================================================================
// DIAPER
// =====================================================================
function renderDiaperList() {
  const today = getTodayStr();
  const list = [...appData.diapers]
    .filter(d => d.dateTime && d.dateTime.startsWith(today))
    .sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  const pee = list.filter(d => d.type === 'pee' || d.type === 'both').length;
  const poop = list.filter(d => d.type === 'poop' || d.type === 'both').length;
  document.getElementById('todayDiaperTotal').textContent = `💧${pee}次小便 · 💩${poop}次大便`;

  const container = document.getElementById('diaperList');
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">💧</div><p>今天还没有排便记录</p></div>`;
    return;
  }
  container.innerHTML = list.map((d, i) => `
    <div class="record-item">
      <div class="record-icon diaper">${d.type === 'pee' ? '💧' : d.type === 'poop' ? '💩' : '💧💩'}</div>
      <div class="record-info">
        <div class="record-desc">${d.type === 'pee' ? '小便' : d.type === 'poop' ? '大便' : '小便 + 大便'}</div>
        <div class="record-meta">${formatDateTime(d.dateTime)}</div>
      </div>
      <div class="record-actions">
        <button class="btn-danger btn-sm" onclick="deleteDiaper(${i},'${today}')">🗑️</button>
      </div>
    </div>
  `).join('');
}

function saveDiaper() {
  const timeEl = document.getElementById('diaperTime');
  const typeBtns = document.querySelectorAll('#diaperTypeToggle .type-btn');
  let type = 'pee';
  typeBtns.forEach(b => { if (b.classList.contains('active')) type = b.dataset.type; });

  const dateTime = timeEl.value || getNowDateTimeLocal();

  appData.diapers.push({ dateTime, type });
  saveData(appData);

  timeEl.value = getNowDateTimeLocal();
  renderDiaperList();
  renderDashboard();
}

function deleteDiaper(idx, today) {
  const list = appData.diapers
    .map((d, i) => ({ d, i }))
    .filter(x => x.d.dateTime && x.d.dateTime.startsWith(today));
  if (idx < list.length) {
    appData.diapers.splice(list[idx].i, 1);
    saveData(appData);
    renderDiaperList();
    renderDashboard();
  }
}

// =====================================================================
// GROWTH
// =====================================================================
function renderGrowthList() {
  const list = [...appData.growth].sort((a, b) => b.date.localeCompare(a.date));
  const container = document.getElementById('growthList');
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📏</div><p>还没有生长记录</p></div>`;
    return;
  }
  container.innerHTML = list.map((g, i) => `
    <div class="record-item">
      <div class="record-icon growth">📏</div>
      <div class="record-info">
        <div class="record-desc">⚖️${g.weight}kg · 📐${g.height}cm · 🧠${g.headCirc}cm</div>
        <div class="record-meta">${g.date}</div>
      </div>
      <div class="record-actions">
        <button class="btn-danger btn-sm" onclick="deleteGrowth(${i})">🗑️</button>
      </div>
    </div>
  `).join('');
}

function saveGrowth() {
  const dateEl = document.getElementById('growthDate');
  const weightEl = document.getElementById('growthWeight');
  const heightEl = document.getElementById('growthHeight');
  const headEl = document.getElementById('growthHead');

  const date = dateEl.value || getTodayStr();
  const weight = weightEl.value ? Number(weightEl.value) : null;
  const height = heightEl.value ? Number(heightEl.value) : null;
  const headCirc = headEl.value ? Number(headEl.value) : null;

  if (!weight || !height || !headCirc) {
    alert('请填写完整的生长数据（体重、身长、头围）');
    return;
  }

  // Check if there's already a record for this date, update it
  const existingIdx = appData.growth.findIndex(g => g.date === date);
  if (existingIdx >= 0) {
    appData.growth[existingIdx] = { date, weight, height, headCirc };
  } else {
    appData.growth.push({ date, weight, height, headCirc });
  }
  saveData(appData);

  dateEl.value = getTodayStr();
  weightEl.value = '';
  heightEl.value = '';
  headEl.value = '';

  renderGrowthList();
  renderDashboard();
}

function deleteGrowth(idx) {
  const list = [...appData.growth].sort((a, b) => b.date.localeCompare(a.date));
  const target = list[idx];
  appData.growth = appData.growth.filter(g => !(g.date === target.date && g.weight === target.weight));
  saveData(appData);
  renderGrowthList();
  renderDashboard();
}

// =====================================================================
// HISTORY
// =====================================================================
function renderHistory() {
  const type = document.getElementById('historyType').value;
  const dateFrom = document.getElementById('historyDateFrom').value;
  const dateTo = document.getElementById('historyDateTo').value;

  let items = [];

  if (type === 'all' || type === 'feeding') {
    appData.feedings.forEach(f => {
      items.push({
        type: 'feeding',
        icon: f.type === 'breast' ? '🤱' : '🍼',
        iconClass: 'feeding',
        desc: (f.type === 'breast' ? '母乳' : '配方奶') + (f.amount ? ` ${f.amount} ml` : ''),
        meta: formatDateTime(f.dateTime) + (f.notes ? ' · ' + f.notes : ''),
        date: f.dateTime ? f.dateTime.slice(0, 10) : '',
        dateTime: f.dateTime
      });
    });
  }
  if (type === 'all' || type === 'diaper') {
    appData.diapers.forEach(d => {
      items.push({
        type: 'diaper',
        icon: d.type === 'pee' ? '💧' : d.type === 'poop' ? '💩' : '💧💩',
        iconClass: 'diaper',
        desc: d.type === 'pee' ? '小便' : d.type === 'poop' ? '大便' : '小便+大便',
        meta: formatDateTime(d.dateTime),
        date: d.dateTime ? d.dateTime.slice(0, 10) : '',
        dateTime: d.dateTime
      });
    });
  }
  if (type === 'all' || type === 'growth') {
    appData.growth.forEach(g => {
      items.push({
        type: 'growth',
        icon: '📏',
        iconClass: 'growth',
        desc: `⚖️${g.weight}kg · 📐${g.height}cm · 🧠${g.headCirc}cm`,
        meta: g.date,
        date: g.date,
        dateTime: g.date
      });
    });
  }

  // Filter by date
  if (dateFrom) {
    items = items.filter(i => i.date >= dateFrom);
  }
  if (dateTo) {
    items = items.filter(i => i.date <= dateTo);
  }

  // Sort by date descending
  items.sort((a, b) => (b.dateTime || '').localeCompare(a.dateTime || ''));

  const container = document.getElementById('historyList');
  if (items.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><p>没有匹配的记录</p></div>`;
    return;
  }
  container.innerHTML = items.map(item => `
    <div class="record-item">
      <div class="record-icon ${item.iconClass}">${item.icon}</div>
      <div class="record-info">
        <div class="record-desc">${item.desc}</div>
        <div class="record-meta">${item.meta}</div>
      </div>
    </div>
  `).join('');
}

// =====================================================================
// BABY SETUP
// =====================================================================
function updateBabyDisplay() {
  const baby = appData.baby;
  document.getElementById('babyNameDisplay').textContent = baby.name || '点击设置宝宝信息';
  document.getElementById('babyBirthDisplay').textContent = baby.birthDate
    ? `🎂 ${baby.birthDate} · ${baby.gender === 'girl' ? '👧 女宝' : '👦 男宝'}`
    : '';
  const ageMonths = baby.birthDate ? calcAgeMonths(baby.birthDate) : null;
  document.getElementById('babyAgeDisplay').textContent = ageMonths != null ? ageDisplay(ageMonths) : '--';
}

function showBabySetup() {
  const baby = appData.baby;
  const overlay = document.getElementById('modalOverlay');
  overlay.innerHTML = `
    <div class="modal">
      <h3>👶 宝宝信息设置</h3>
      <div class="form-group">
        <label class="form-label">宝宝名字 / 小名</label>
        <input type="text" class="form-input" id="babyNameInput" value="${escapeHtml(baby.name || '')}" placeholder="例如：小汤圆">
      </div>
      <div class="form-group">
        <label class="form-label">🎂 出生日期</label>
        <input type="date" class="form-input" id="babyBirthInput" value="${baby.birthDate || ''}">
      </div>
      <div class="form-group">
        <label class="form-label">性别</label>
        <div class="type-toggle" id="babyGenderToggle">
          <button class="type-btn ${baby.gender === 'boy' ? 'active' : ''}" data-type="boy">👦 男宝</button>
          <button class="type-btn ${baby.gender === 'girl' ? 'active' : ''}" data-type="girl">👧 女宝</button>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-outline" onclick="closeModal()">取消</button>
        <button class="btn btn-primary" onclick="saveBaby()">💾 保存</button>
      </div>
    </div>
  `;
  overlay.style.display = 'flex';

  // Bind type toggle
  document.querySelectorAll('#babyGenderToggle .type-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#babyGenderToggle .type-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function saveBaby() {
  const name = document.getElementById('babyNameInput').value.trim();
  const birthDate = document.getElementById('babyBirthInput').value;
  const genderBtns = document.querySelectorAll('#babyGenderToggle .type-btn');
  let gender = 'boy';
  genderBtns.forEach(b => { if (b.classList.contains('active')) gender = b.dataset.type; });

  appData.baby = { name, birthDate, gender };
  saveData(appData);
  updateBabyDisplay();
  renderDashboard();
  closeModal();
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.getElementById('modalOverlay').innerHTML = '';
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// =====================================================================
// TAB NAVIGATION
// =====================================================================
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  const btn = document.querySelector(`[data-tab="${tabName}"]`);
  if (btn) btn.classList.add('active');
  const content = document.getElementById(`tab-${tabName}`);
  if (content) content.classList.add('active');

  if (tabName === 'dashboard') renderDashboard();
  if (tabName === 'feeding') renderFeedingList();
  if (tabName === 'diaper') renderDiaperList();
  if (tabName === 'growth') renderGrowthList();
  if (tabName === 'history') renderHistory();
}

// =====================================================================
// INITIALIZATION
// =====================================================================
function init() {
  // Tab clicks
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });

  // Type toggles
  document.querySelectorAll('.type-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      const btn = e.target.closest('.type-btn');
      if (!btn) return;
      this.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Set default datetime values
  document.getElementById('feedingTime').value = getNowDateTimeLocal();
  document.getElementById('diaperTime').value = getNowDateTimeLocal();
  document.getElementById('growthDate').value = getTodayStr();

  // Close modal on overlay click
  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // Async data load, then render
  loadData().then(data => {
    appData = data;
    updateBabyDisplay();
    if (!appData.baby.name && !appData.baby.birthDate) {
      setTimeout(showBabySetup, 500);
    }
    renderDashboard();
  });
}

document.addEventListener('DOMContentLoaded', init);
