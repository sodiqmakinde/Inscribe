import React from "react";
import EachBlog from "./EachBlog";

const AllBlog = () => {
  const blogData = [
    {
      authortitle: "Founder of Inscribe",
      authorName: "Sodiq Makinde",
      blogtitle: "Type vs. Interface",
      blogdescription: `Becoming a programmer can seem like a daunting task, but with the 
                        right approach, anyone can learn to code and develop software. 
                        Here are eight tips to help you on your journey:`,
      blogthumbnail:
        "https://www.datocms-assets.com/48401/1628645197-learn-typescript.png",
    },
    {
      authortitle: "Tech Lead at XYZ",
      authorName: "Jane Doe",
      blogtitle: "React Performance Tips",
      blogdescription: `React is a powerful library, but sometimes it can lead to performance 
                        issues if not handled properly. Here's how to optimize your React app.`,
      blogthumbnail:
        "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg",
    },
    {
      authortitle: "Software Engineer",
      authorName: "John Smith",
      blogtitle: "Power of NextJs",
      blogdescription: `ES6 introduced several new features that make JavaScript more powerful 
                        and easier to use. Here are the top features every developer should know.`,
      blogthumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrw29CBzPExhaGrkIzMvZ-5ypwos5a6OjinQ&s",
    },
  ];

  return (
    <section className="">
      {blogData.map((blog, index) => (
        <EachBlog
          key={index}
          authortitle={blog.authortitle}
          authorName={blog.authorName}
          blogtitle={blog.blogtitle}
          blogdescription={blog.blogdescription}
          blogthumbnail={blog.blogthumbnail}
        />
      ))}
    </section>
  );
};

export default AllBlog;
