// Renders a subject page (CON or CRIM) from the data in resources.js.
// Each doctrine is a collapsible module; inside it, materials are grouped by type.

const subjectKey = document.body.dataset.subject;
const doctrines = SUBJECTS[subjectKey] || [];
const typeLabel = Object.fromEntries(TYPES.map((t) => [t.id, t.label]));

const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("type-filter");
const toc = document.getElementById("toc");
const modules = document.getElementById("modules");
const toggleAllButton = document.getElementById("toggle-all");

let activeType = "all";
const openIds = new Set();

// Highlight the current page in the nav bar.
for (const link of document.querySelectorAll("nav a")) {
  if (link.getAttribute("href") === subjectKey + ".html") link.setAttribute("aria-current", "page");
}

// Small helper for building elements.
function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  for (const child of children) {
    if (child != null) node.append(child);
  }
  return node;
}

function query() {
  return searchInput.value.trim().toLowerCase();
}

function isFiltering() {
  return query() !== "" || activeType !== "all";
}

function textMatches(q, ...fields) {
  return fields.some((f) => (f || "").toLowerCase().includes(q));
}

function isExternal(link) {
  return /^https?:\/\//.test(link);
}

function isImage(link) {
  return /\.(png|jpe?g|gif|svg|webp)$/i.test(link || "");
}

// Materials of a doctrine that pass the current type filter and search.
function visibleMaterials(doctrine) {
  const q = query();
  let items = doctrine.materials;
  if (activeType !== "all") items = items.filter((m) => m.type === activeType);
  if (q && !textMatches(q, doctrine.name, doctrine.summary)) {
    items = items.filter((m) => textMatches(q, m.title, m.note, typeLabel[m.type]));
  }
  return items;
}

function countByType(items) {
  const counts = {};
  for (const m of items) counts[m.type] = (counts[m.type] || 0) + 1;
  return counts;
}

function renderTypeFilter() {
  const all = doctrines.flatMap((d) => d.materials);
  const counts = countByType(all);
  const options = [{ id: "all", label: "All types", count: all.length }]
    .concat(TYPES.map((t) => ({ ...t, count: counts[t.id] || 0 })));

  typeFilter.replaceChildren(
    ...options.map((opt) => {
      const button = h("button", { type: "button", className: "chip" },
        opt.label, h("span", { className: "count" }, String(opt.count)));
      button.setAttribute("aria-pressed", String(opt.id === activeType));
      button.addEventListener("click", () => {
        activeType = opt.id;
        renderTypeFilter();
        renderModules();
      });
      return button;
    })
  );
}

function renderToc() {
  toc.replaceChildren(
    ...doctrines.map((d) =>
      h("li", {},
        h("a", { href: "#" + d.id, onclick: () => openModule(d.id) }, d.name),
        h("span", { className: "count" }, String(d.materials.length)))
    )
  );
}

function openModule(id) {
  openIds.add(id);
  const details = document.getElementById(id);
  if (details) details.open = true;
}

function renderMaterial(m) {
  const titleClass = m.type === "cases" ? "title case" : "title";
  const title = m.link
    ? h("a", { href: m.link, className: titleClass }, m.title)
    : h("span", { className: titleClass }, m.title);
  if (m.link && isExternal(m.link)) {
    title.target = "_blank";
    title.rel = "noopener";
  }

  const li = h("li", {}, title);
  if (m.note) li.append(h("span", { className: "note" }, " — " + m.note));
  if (m.type === "visuals" && isImage(m.link)) {
    li.append(h("a", { href: m.link, className: "thumb" },
      h("img", { src: m.link, alt: m.title, loading: "lazy" })));
  }
  return li;
}

function renderModule(doctrine, items) {
  const counts = countByType(items);
  const badges = TYPES.filter((t) => counts[t.id])
    .map((t) => h("span", { className: "badge" }, `${counts[t.id]} ${t.label}`));

  const summary = h("summary", {},
    h("div", { className: "summary-text" },
      h("h2", {}, doctrine.name),
      doctrine.summary ? h("p", {}, doctrine.summary) : null),
    h("div", { className: "badges" }, ...badges));

  const body = h("div", { className: "module-body" });
  for (const type of TYPES) {
    const group = items.filter((m) => m.type === type.id);
    if (!group.length) continue;
    body.append(h("div", { className: "group group-" + type.id },
      h("h3", {}, type.label),
      h("ul", {}, ...group.map(renderMaterial))));
  }

  if (!items.length) {
    body.append(h("p", { className: "empty" }, "Nothing here yet."));
  } else if (!isFiltering()) {
    const missing = TYPES.filter((t) => !counts[t.id]).map((t) => t.label);
    if (missing.length) body.append(h("p", { className: "missing" }, "Still needed: " + missing.join(", ")));
  }

  const details = h("details", { id: doctrine.id, className: "module" }, summary, body);
  details.open = isFiltering() || openIds.has(doctrine.id);
  details.addEventListener("toggle", () => {
    if (isFiltering()) return;
    if (details.open) openIds.add(doctrine.id);
    else openIds.delete(doctrine.id);
    updateToggleAllLabel();
  });
  return details;
}

function renderModules() {
  const filtering = isFiltering();
  const rendered = [];
  for (const doctrine of doctrines) {
    const items = visibleMaterials(doctrine);
    if (filtering && !items.length) continue;
    rendered.push(renderModule(doctrine, items));
  }
  modules.replaceChildren(...rendered);
  if (!rendered.length) modules.append(h("p", { className: "empty" }, "No materials match your filters."));
  updateToggleAllLabel();
}

function updateToggleAllLabel() {
  const all = [...modules.querySelectorAll("details.module")];
  toggleAllButton.textContent = all.length && all.every((d) => d.open) ? "Collapse all" : "Expand all";
}

toggleAllButton.addEventListener("click", () => {
  const all = [...modules.querySelectorAll("details.module")];
  const open = !all.every((d) => d.open);
  for (const d of all) {
    d.open = open;
    if (open) openIds.add(d.id);
    else openIds.delete(d.id);
  }
  updateToggleAllLabel();
});

searchInput.addEventListener("input", renderModules);

// Open a module linked directly (e.g. con.html#federalism).
if (location.hash) openIds.add(decodeURIComponent(location.hash.slice(1)));

renderTypeFilter();
renderToc();
renderModules();
if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
