import BlogMainHeading from "@/components/blogPage/BlogMainHeading";
import BlogSingleThumbnail from "@/components/blogPage/BlogSingleThumbnail";
import RelatedPost from "@/components/blogPage/RelatedPost";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";
import { getAllTags } from "@/libs/blogHelpers";
// import { blogData } from "@/data/blogData";
import { getBlogData } from "@/libs/getBlogData";
import slugify from "@/libs/slugify";
import CTA from "@/ui/CTA";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const blogData = getBlogData();
  
  return blogData.map((blog) => ({
    slug: slugify(blog.title),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const allBlogData = getBlogData();
  const blogData = allBlogData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  const blog = blogData.find((b) => slugify(b.title) === slug);
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blogData = getBlogData();
  const blog = blogData.find((b) => slugify(b.title) === slug);
  const sameCatPosts = blogData
    .filter((cat) => cat.categories === blog.categories && cat.id !== blog.id)
    .slice(0, 3);

  if (!blog) {
    return <p className="text-red-500">No blog found</p>;
  }
  const tagData = (blog?.tags && typeof blog.tags === 'string') 
    ? blog.tags.split('|').map(tag => tag.trim())
    : [];
  // const tags = tagData.tags || [];
  //const tags = getAllTags(tagData);

  //console.log('tags ', tagData);
  

  return (
    <>
      <ScrollSmootherEffect/>
      <section className="blog__detail">
        <div className="container mx-auto px-4 line pt-140">
          <span className="line-3"></span>
          <div className="flex flex-col">
            {/* Blog header */}
            <div className="w-full lg:w-[80%] lg:self-end">
              <div className="blog__detail-top">
                <BlogMainHeading blog={blog} />
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <p className="block md:flex items-center gap-1.5">
                      Author: <span>{blog.author}</span>
                    </p>
                    <p className="block md:flex items-center gap-1.5">
                      Published Date: <span>{blog.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <BlogSingleThumbnail blog={blog} />

            {/* Blog content */}
            <div className="w-full lg:w-[80%] lg:self-end">
              <div
                className="blog__detail-content prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags:{" "}
                  {tagData.map((tag, idx) => (
                    <React.Fragment key={idx}>
                      <Link
                        href={`/blog/tag/${slugify(tag)}`}
                        className="hover:underline capitalize"
                      >
                        {tag}
                      </Link>
                      {idx < tagData.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedPost posts={sameCatPosts} />
      <CTA />
    </>
  );
}
