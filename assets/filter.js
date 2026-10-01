// Client-side filtering and the build timeline for the spec index. Each row carries
// its front matter as data-* attributes (text fields lowercased by Liquid), so no
// fetch is needed.
(function () {
  const q = document.getElementById("q");
  const tool = document.getElementById("tool");
  const status = document.getElementById("status");
  const chips = Array.from(document.querySelectorAll(".chip"));
  const groups = Array.from(document.querySelectorAll("[data-group]"));
  const rows = Array.from(document.querySelectorAll(".row"));
  const empty = document.getElementById("empty");
    let category = "";

  // Decide whether a row should be visible.
  //   card.dataset.title / .summary / .tags  -> lowercased strings (tags space-separated)
  //   card.dataset.tools                     -> e.g. "claude-code cursor"
  //   card.dataset.status                    -> e.g. "draft"
  //   query  -> lowercased, trimmed search text ("" when empty)
  //   tool / status -> selected dropdown value ("" means "any")
  // Category is handled separately by the chips in apply().
  function matches(card, query, tool, status) {
    // TODO: your implementation (5-10 lines)
    return true;
  }

  // ---- Timeline: columns of stacked blocks, one block per spec ----
  // Each column covers `span` days, chosen so a column is at least ~5px wide:
  // one day per column on desktop, about a week on a phone.
  const DAY = 86400000;
  const blocks = new Map();
  (function buildTimeline() {
    const grid = document.getElementById("timeline");
    const months = document.getElementById("timeline-months");
    const dated = rows.filter((r) => r.dataset.date);
    if (!dated.length) return;

    const t = (r) => Date.parse(r.dataset.date + "T00:00:00Z");
    const now = new Date();
    const start = Math.min(...dated.map(t));
    const end = Math.max(...dated.map(t), Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const totalDays = Math.round((end - start) / DAY) + 1;
    const span = Math.max(1, Math.ceil((totalDays * 5) / grid.clientWidth));
    const days = Math.ceil(totalDays / span); // number of columns
    const col = (ms) => Math.floor(Math.round((ms - start) / DAY) / span);
    grid.style.setProperty("--days", days);
    months.style.setProperty("--days", days);

    const cols = Array.from({ length: days }, () => {
      const col = document.createElement("div");
      col.className = "flex h-full flex-col-reverse gap-px";
      col.setAttribute("role", "presentation");
      grid.appendChild(col);
      return col;
    });

    const peek = document.createElement("p");
    peek.className = "mt-2 min-h-5 text-sm font-medium text-zinc-700 dark:text-zinc-300";
    peek.setAttribute("aria-live", "polite");
    months.after(peek);

    // Oldest first, so each day's stack builds upward in order.
    for (const r of dated.slice().sort((a, b) => t(a) - t(b))) {
      const a = document.createElement("a");
      a.className = "block h-(--bh) rounded-[2px] bg-(--cat) transition-opacity hover:outline-2 hover:outline-offset-1 hover:outline-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-zinc-900 dark:hover:outline-white dark:focus-visible:outline-white";
      a.href = r.dataset.url;
      a.setAttribute("role", "listitem");
      a.style.setProperty("--cat", `var(--color-cat-${r.dataset.category})`);
      const label = `${r.dataset.name}, ${new Date(t(r)).toLocaleDateString(undefined, { month: "short", day: "numeric", timeZone: "UTC" })}`;
      a.setAttribute("aria-label", label);
      a.addEventListener("mouseenter", () => (peek.textContent = label));
      a.addEventListener("focus", () => (peek.textContent = label));
      a.addEventListener("mouseleave", () => (peek.textContent = ""));
      cols[col(t(r))].appendChild(a);
      blocks.set(r, a);
    }

    // Shrink blocks so the tallest stack fits the strip (matters on narrow screens).
    const tallest = Math.max(...cols.map((c) => c.childElementCount));
    const bh = Math.max(2, Math.min(12, Math.floor((grid.clientHeight - tallest) / tallest)));
    grid.style.setProperty("--bh", bh + "px");

    // Month labels: each runs from its month's first column to the next month's.
    const starts = [{ c: 0, d: new Date(start) }];
    const d = new Date(start);
    for (d.setUTCDate(1), d.setUTCMonth(d.getUTCMonth() + 1); d.getTime() <= end; d.setUTCMonth(d.getUTCMonth() + 1)) {
      starts.push({ c: col(d.getTime()), d: new Date(d) });
    }
    starts.forEach((s, i) => {
      const next = i + 1 < starts.length ? starts[i + 1].c : days;
      if (next - s.c < 4) return; // too narrow to label
      const m = document.createElement("span");
      m.className = "overflow-hidden border-l border-zinc-200 pl-1.5 text-xs/6 whitespace-nowrap text-zinc-500 dark:border-zinc-800";
      m.style.gridColumn = `${s.c + 1} / ${next + 1}`;
      m.style.gridRow = "1";
      m.textContent = s.d.toLocaleDateString(undefined, { month: "short", timeZone: "UTC" });
      months.appendChild(m);
    });
  })();

  function apply() {
    const query = q.value.trim().toLowerCase();
    let shown = 0;
    for (const row of rows) {
      const ok = (!category || row.dataset.category === category) &&
        matches(row, query, tool.value, status.value);
      row.hidden = !ok;
      if (ok) shown++;
    }
    // Dim the timeline blocks of hidden specs, but only while something is filtered out.
    for (const [row, block] of blocks) block.classList.toggle("opacity-15", shown < rows.length && row.hidden);
    for (const g of groups) g.hidden = !g.querySelector(".row:not([hidden])");
    empty.hidden = shown > 0;
    for (const c of chips) c.setAttribute("aria-pressed", String(c.dataset.category === category));

    // Keep filters in the URL so a filtered view can be bookmarked or shared.
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (query) params.set("q", query);
    if (tool.value) params.set("tool", tool.value);
    if (status.value) params.set("status", status.value);
    history.replaceState(null, "", params.toString() ? "?" + params : location.pathname);
  }

  const initial = new URLSearchParams(location.search);
  category = initial.get("category") || "";
  q.value = initial.get("q") || "";
  tool.value = initial.get("tool") || "";
  status.value = initial.get("status") || "";

  for (const c of chips) {
    c.addEventListener("click", () => {
      category = c.dataset.category === category ? "" : c.dataset.category;
      apply();
    });
  }
  q.addEventListener("input", apply);
  tool.addEventListener("change", apply);
  status.addEventListener("change", apply);
  apply();
})();
