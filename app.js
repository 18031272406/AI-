"use strict";

/**
 * 简单数据源：所有图片为本地 SVG，保证可离线访问。
 */
const foods = [
  { id: "beijing-duck", name: "北京烤鸭", city: "北京", region: "华北", img: "assets/images/beijing-duck.svg" },
  { id: "chongqing-hotpot", name: "重庆火锅", city: "重庆", region: "西南", img: "assets/images/chongqing-hotpot.svg" },
  { id: "xian-roujiamo", name: "肉夹馍", city: "西安", region: "西北", img: "assets/images/xian-roujiamo.svg" },
  { id: "shanghai-xiaolongbao", name: "小笼包", city: "上海", region: "华东", img: "assets/images/shanghai-xiaolongbao.svg" },
  { id: "chengdu-mapotofu", name: "麻婆豆腐", city: "成都", region: "西南", img: "assets/images/chengdu-mapotofu.svg" },
  { id: "guangzhou-dimsum", name: "早茶点心", city: "广州", region: "华南", img: "assets/images/guangzhou-dimsum.svg" },
  { id: "wuhan-reganmian", name: "热干面", city: "武汉", region: "华中", img: "assets/images/wuhan-reganmian.svg" },
  { id: "lanzhou-lamian", name: "兰州拉面", city: "兰州", region: "西北", img: "assets/images/lanzhou-lamian.svg" },
  { id: "taipei-bubbletea", name: "珍珠奶茶", city: "台北", region: "港澳台", img: "assets/images/taipei-bubbletea.svg" },
  { id: "hongkong-eggtart", name: "蛋挞", city: "香港", region: "港澳台", img: "assets/images/hongkong-eggtart.svg" },
];

/**
 * 去重后的区域列表
 */
function getRegions() {
  const all = foods.map(f => f.region);
  return Array.from(new Set(all));
}

/**
 * 渲染下拉区域选项
 */
function renderRegionOptions() {
  const select = document.getElementById("regionSelect");
  getRegions().forEach(region => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    select.appendChild(option);
  });
}

/**
 * 根据筛选与搜索条件得到结果
 */
function filterFoods(regionValue, searchKeyword) {
  const keyword = (searchKeyword || "").trim().toLowerCase();
  return foods.filter(item => {
    const regionOk = regionValue === "all" ? true : item.region === regionValue;
    const hit = `${item.name} ${item.city} ${item.region}`.toLowerCase().includes(keyword);
    return regionOk && hit;
  });
}

/**
 * 渲染画廊
 */
function renderGallery(list) {
  const gallery = document.getElementById("gallery");
  gallery.setAttribute("aria-busy", "true");
  gallery.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent = "未找到匹配的美食";
    empty.style.color = "#9ca3af";
    gallery.appendChild(empty);
  }

  list.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${item.city}${item.name}`);

    const figure = document.createElement("div");
    figure.className = "card-figure";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.src = item.img;
    img.alt = `${item.city} · ${item.name}`;
    img.width = 640;
    img.height = 400;

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = item.name;

    const meta = document.createElement("p");
    meta.className = "card-meta";
    meta.innerHTML = `${item.city} <span class="badge">${item.region}</span>`;

    figure.appendChild(img);
    body.appendChild(title);
    body.appendChild(meta);
    card.appendChild(figure);
    card.appendChild(body);
    gallery.appendChild(card);
  });

  gallery.setAttribute("aria-busy", "false");
}

/**
 * 初始化交互
 */
function initApp() {
  const regionSelect = document.getElementById("regionSelect");
  const searchInput = document.getElementById("searchInput");

  renderRegionOptions();
  renderGallery(foods);

  function triggerFilter() {
    const regionVal = regionSelect.value;
    const searchVal = searchInput.value;
    const results = filterFoods(regionVal, searchVal);
    renderGallery(results);
  }

  regionSelect.addEventListener("change", triggerFilter);
  searchInput.addEventListener("input", triggerFilter);

  // 页脚年份
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", initApp);



