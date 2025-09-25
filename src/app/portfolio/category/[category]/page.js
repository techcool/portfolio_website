import { portfolioData } from "@/data/portfolioData";
import slugify from "@/libs/slugify";

import PortfolioCard from "@/ui/PortfolioCard";
import React from "react";
// export async function generateMetadata({ params }) {
//   const { tag } = params;

//   // Get posts matching the tag
//   const tagPosts = blogData.filter((post) =>
//     post.tags.map((t) => slugify(t)).includes(tag)
//   );

//   // Capitalize or prettify the tag for SEO
//   const formattedTag = tag.replace(/-/g, " ");

//   return {
//     title: `Posts tagged with "${formattedTag}" | My Blog`,
//     description:
//       tagPosts.length > 0
//         ? `Read ${tagPosts.length} article(s) related to "${formattedTag}". Explore insights, tutorials, and resources around ${formattedTag}.`
//         : `No articles found for the tag "${formattedTag}".`,
//   };
// }
export default async function PortfolioCategory({ params }) {
  const { category } = await params;

  const filteredPortfolio = portfolioData.filter(
    (portfolio) => slugify(portfolio.category) === category
  );

  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container mx-auto px-4 relative line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="flex flex-wrap items-center justify-between pb-130">
            <div className="w-full">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come capitalize">
                  {filteredPortfolio.length > 0
                    ? filteredPortfolio[0].category
                    : "No Category Found"}
                </h2>
              </div>
            </div>
          </div>

          <PortfolioCard portfolio={filteredPortfolio} />
        </div>
      </section>
    </>
  );
}
