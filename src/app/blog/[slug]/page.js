import { blogData } from '@/data/blogData';
import slugify from '@/libs/slugify';
import React from 'react'

export default async function BlogDetails({params}) {
  const {slug} = await params;
  const blog = blogData.find((b)=>slugify(b.title)===slug)  
  return (
    <>
      <h1>{blog.title}</h1>   
    </>
  )
}
