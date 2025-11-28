import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
// import { blogData } from "@/data/blogData";
import { getAllCategories, getAllTags, getCategoryCounts } from "@/libs/blogHelpers";
import { getBlogData } from "@/libs/getBlogData";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";
import Filter from "@/ui/Filter";

export default async function TagPagePagination({ params }) {
  const { tag, page } = await params;
  const allBlogData = getBlogData();
    const blogData = allBlogData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  const categories = getAllCategories(blogData);
  const categoryCounts = getCategoryCounts(blogData);
  const currentPage = parseInt(page, 10) || 1;
  const postsPerPage = 12;

  const filteredPosts = blogData.filter((post) =>{
     // post.tags.map((t) => slugify(t)).includes(tag)
      if (!post.tags) return false;
          
          // Split categories by pipe and check if any match
          const cats = post.tags
            .split("|")
            .map((c) => c.trim())
            .map((c) => slugify(c));
          
          return cats.includes(tag);
    }
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );
  const tags = getAllTags(currentPosts);
  const uniqueTags = tags.find((t) => slugify(t)===tag);
  return (
    <>
      <ScrollSmootherEffect/>
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full">
              <div className="sec-title-wrapper">
                <h4>
                  Tags: <span>{uniqueTags}</span>
                </h4>
              </div>
            </div>
          </div>
          <Filter categories={categories}  counts={categoryCounts}/>
          {filteredPosts.length > 0 ? (
            <BlogCard
              posts={currentPosts}
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`/blog/tag/${tag}`}
            />
          ) : (
            <p className="text-red-500">No posts found in this Tags.</p>
          )}
        </div>
      </section>
    </>
  );
}
