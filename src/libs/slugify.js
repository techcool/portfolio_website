export default function slugify(title = "") {
  return title
    .toLowerCase()
    .replace(/ /g, "-")       // spaces → hyphens
    .replace(/[^\w-]+/g, ""); // remove special chars
}