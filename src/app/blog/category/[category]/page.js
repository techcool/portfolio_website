// app/blog/category/[category]/page.js
import BlogCategoryHeading from "@/components/blogPage/BlogCategoryHeading";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
import { getAllCategories, getCategoryCounts } from "@/libs/blogHelpers";
// import { blogData } from "@/data/blogData";
import { getBlogData } from "@/libs/getBlogData";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";
import Filter from "@/ui/Filter";

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { category } = await params;
  const blogData = getBlogData();
  
  // Convert slug back to readable text
  const categoryName = category.replace(/-/g, " ");

  // Get posts for this category
  const posts = blogData.filter((post) => slugify(post.category) === category);

  // Build meta dynamically
  return {
    title: posts.length
      ? `${categoryName} Articles & Insights | My Blog`
      : `No ${categoryName} Articles Found | My Blog`,
    description: posts.length
      ? `Explore ${posts.length} insightful posts about ${categoryName}.`
      : `Sorry, we couldn’t find any posts in ${categoryName}.`,
    openGraph: {
      title: `${categoryName} | My Blog`,
      description: posts.length
        ? `Read the latest posts in ${categoryName}.`
        : `No posts available in ${categoryName}.`,
      url: `/blog/category/${category}`,
      type: "website",
    },
  };
}

export default async function BlogCategory({ params }) {
  const { category } = await params;
  // const posts = blogData.filter(
  //   (post) => slugify(post.category) === category
  // );
  const allBlogData = getBlogData();
  const blogData = allBlogData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const categories = getAllCategories(blogData);
  const categoryCounts = getCategoryCounts(blogData);
  const page = 1;
  const postsPerPage = 12;

  const filteredPosts = blogData.filter((post) => {
    if (!post.categories) return false;
    
    // Split categories by pipe and check if any match
    const cats = post.categories
      .split("|")
      .map((c) => c.trim())
      .map((c) => slugify(c));
    
    return cats.includes(category);
  });
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(0, postsPerPage);

  return (
    <>
      <ScrollSmootherEffect />
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full">
              <div className="sec-title-wrapper">
                <BlogCategoryHeading currentPosts={currentPosts} />
              </div>
            </div>
          </div>
          <Filter categories={categories}  counts={categoryCounts}/>
          {filteredPosts.length > 0 ? (
            <BlogCard
              posts={currentPosts}
              currentPage={page}
              totalPages={totalPages}
              basePath={`/blog/category/${category}`}
            />
          ) : (
            <p className="text-red-500">No posts found in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}
