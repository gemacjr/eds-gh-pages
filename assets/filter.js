// Client-side filtering for the spec index. Each card carries its front matter
// as data-* attributes (all lowercased by Liquid), so no fetch is needed.
(function () {
  const q = document.getElementById("q");
  const tool = document.getElementById("tool");
  const status = document.getElementById("status");
  const cards = Array.from(document.querySelectorAll("#specs .card"));
  const empty = document.getElementById("empty");

  // Decide whether a card should be visible.
  //   card.dataset.title / .summary / .tags  -> lowercased strings (tags space-separated)
  //   card.dataset.tools                     -> e.g. "claude-code cursor"
  //   card.dataset.status                    -> e.g. "draft"
  //   query  -> lowercased, trimmed search text ("" when empty)
  //   tool / status -> selected dropdown value ("" means "any")
  function matches(card, query, tool, status) {
    // TODO: your implementation (5-10 lines)
    return true;
  }

  function apply() {
    const query = q.value.trim().toLowerCase();
    let shown = 0;
    for (const card of cards) {
      const ok = matches(card, query, tool.value, status.value);
      card.hidden = !ok;
      if (ok) shown++;
    }
    empty.hidden = shown > 0;

    // Keep filters in the URL so a filtered view can be bookmarked or shared.
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (tool.value) params.set("tool", tool.value);
    if (status.value) params.set("status", status.value);
    history.replaceState(null, "", params.toString() ? "?" + params : location.pathname);
  }

  const initial = new URLSearchParams(location.search);
  q.value = initial.get("q") || "";
  tool.value = initial.get("tool") || "";
  status.value = initial.get("status") || "";

  q.addEventListener("input", apply);
  tool.addEventListener("change", apply);
  status.addEventListener("change", apply);
  apply();
})();
