export const getAllCategories = (data) => {
  const categories = data.map((post) => post.category);
  return [...new Set(categories)];
};

export const getAllTags = (data) => {
  const tags = data.flatMap((post) => post.tags);
  return [...new Set(tags)];
};