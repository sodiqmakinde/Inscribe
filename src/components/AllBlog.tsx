"use client";
import React from "react";
import EachBlog from "./EachBlog";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/services/getBlog";
import Loader from "./Loader";

const AllBlog = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <section className="">
      {blogs.map((blog) => (
        <EachBlog
          blogslug={blog.slug}
          clicks={blog.likes}
          comments={blog.comment}
          date={blog.date}
          key={blog.id}
          headshot={blog.author.imageUrl}
          authortitle={blog.author.role}
          authorName={blog.author.name}
          blogtitle={blog.title}
          blogdescription={blog.content}
          blogthumbnail={blog.thumbnail}
        />
      ))}
    </section>
  );
};

export default AllBlog;
