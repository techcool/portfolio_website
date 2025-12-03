import CTA from "@/ui/CTA";
import { sinleTeamData } from "@/data/singleTeamData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import React from "react";
import slugify from "@/libs/slugify";
import TeamImg from "@/components/aboutPage/TeamImg";
import SingleTeamHeading from "@/components/aboutPage/SingleTeamHeading";
import ScrollSmootherEffect from "@/components/layouts/ScrollSmootherEffect";


export async function generateStaticParams() {
  // if sinleTeamData is already an array, don't call it
  const teamData = Array.isArray(sinleTeamData) ? sinleTeamData : sinleTeamData();
  
  return teamData.map((member) => ({
    slug: slugify(member.name),
  }));
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const teamData = sinleTeamData.find(member => slugify(member.name) === slug);
  return {
    title: teamData.name,
    description: teamData.Message.slice(0,160),
  }
  
}

export default async function TeamDetails({params}) {
    const {slug} =await params;
    const teamData = sinleTeamData.find(member => slugify(member.name) === slug);
    if (!teamData) {
      return <p className="text-center text-red-500">Team member not found</p>;
    }

  return (
    <>
      <ScrollSmootherEffect/>
      <div className="team__detail-page pt-28">
        <section className="team__detail">
          <div className="container mx-auto px-4 pb-36 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <TeamImg teamData={teamData}/>

              <div className="pt-10 md:pt-28">
                <div className="sec-title-wrapper">
                    <SingleTeamHeading teamData={teamData}/>
                    <p>
                      {teamData.Message}
                    </p>
                </div>
                <div className="team__member-work">
                  <h4 className="font-semibold text-lg mb-2">Portfolio :</h4>
                  <ul>
                    {teamData.portfolio?.map((data) => (
                    <li key={data.id}>
                      <Link href={data.link} className="hover:underline" target="_blank">
                        {data.title}
                      </Link>
                    </li>
                  ))}
                    
                  </ul>
                </div>

                <div className="team__member-social">
                  <h4 className="font-semibold text-lg mb-2">Follow :</h4>
                  <ul>
                    {teamData.socialLink?.map((data, idx) => (
                    <li key={idx}>
                      <Link href={data.href} target="_blank">
                        <FontAwesomeIcon icon={data.icon} />
                      </Link>
                    </li>
                  ))}
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-14 teamDetailsCTA bg-gray-50">
          <CTA/> 
        </div>           
        
      </div>
    </>
  );
}
