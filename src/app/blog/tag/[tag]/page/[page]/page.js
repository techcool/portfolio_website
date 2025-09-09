import { blogData } from "@/data/blogData";
import { getAllTags } from "@/libs/blogHelpers";
import slugify from "@/libs/slugify";
import BlogCard from "@/ui/BlogCard";

export default function TagPagePagination({ params }) {
  const { tag, page } = params;
  const currentPage = parseInt(page, 10) || 1;
  const postsPerPage = 6;

  const filteredPosts = blogData.filter((post) =>
    post.tags.map((t) => slugify(t)).includes(tag)
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );
  const tags = getAllTags(currentPosts);
  const uniqueTags = tags.map((tag) => ` ${tag}`).join(",");
  return (
    <>
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
