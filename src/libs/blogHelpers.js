export const getAllCategories = (data = []) => {
  // preserve original label casing but dedupe by normalized key (trim + lowercase)
  const seen = new Map();

  for (const post of data) {
    if (!post) continue;
    const raw = post.categories;
    if (!raw) continue;

    const pushCategory = (cat) => {
      if (typeof cat !== "string") return;
      const label = cat.trim();
      if (!label) return;
      const key = label.toLowerCase();
      if (!seen.has(key)) seen.set(key, label);
    };

    if (Array.isArray(raw)) {
      raw.forEach(pushCategory);
    } else if (typeof raw === "string") {
      // handle common separators (pipe or comma) if categories were stored as a delimited string
      const parts = raw.includes("|") ? raw.split("|") : raw.split(",");
      parts.forEach(pushCategory);
    }
  }

  return Array.from(seen.values());
};

export const getCategoryCounts = (data = []) => {
  const counts = new Map();
  const firstSeenLabel = new Map();

  for (const post of data) {
    if (!post) continue;
    const raw = post.categories;
    if (!raw) continue;

    const parts = Array.isArray(raw)
      ? raw
      : typeof raw === "string"
      ? raw.includes("|")
        ? raw.split("|")
        : raw.split(",")
      : [String(raw)];

    parts.forEach((p) => {
      const label = String(p).trim();
      if (!label) return;
      const key = label.toLowerCase();
      firstSeenLabel.set(key, firstSeenLabel.get(key) || label);
      counts.set(key, (counts.get(key) || 0) + 1);
    });
  }

  // return array of { label, slug, count } sorted alphabetically (optional)
  return Array.from(counts.entries())
    .map(([key, count]) => ({
      label: firstSeenLabel.get(key),
      slug: key, // normalized slug-ready key; you can run slugify(firstSeenLabel.get(key)) if needed
      count,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
};

export const getAllTags = (data = []) => {
  const seen = new Map();

  for (const post of data) {
    if (!post) continue;
    const raw = post.tags;
    if (!raw) continue;

    const pushTag = (t) => {
      if (typeof t !== "string") return;
      const label = t.trim();
      if (!label) return;
      const key = label.toLowerCase();
      if (!seen.has(key)) seen.set(key, label);
    };

    if (Array.isArray(raw)) {
      raw.forEach(pushTag);
    } else if (typeof raw === "string") {
      // tags may be pipe-separated (e.g. "a|b") or comma-separated
      const parts = raw.includes("|") ? raw.split("|") : raw.split(",");
      parts.forEach(pushTag);
    }
  }

  return Array.from(seen.values());
};