import React from "react";
import Author from "./Author";
import Image from "next/image";

interface EachBlogComponent {
  authortitle: string;
  authorName: string;
  blogtitle: string;
  blogdescription?: string;
  blogthumbnail?: string;
}

const EachBlog = ({
  authortitle,
  authorName,
  blogtitle,
  blogdescription,
  blogthumbnail,
}: EachBlogComponent) => {
  return (
    <div className="grid gap-2 fade-in-bottom  items-center grid-cols-[65%_35%] justify-between border-borderColor border-b border-b-1 py-6">
      <div className="mr-4">
        <Author title={authortitle} name={authorName} />
        <h1 className="font-medium text-2xl mt-5 max-[768px]:mt-3 max-[768px]:text-xl">
          {blogtitle}
        </h1>
        {blogdescription && (
          <p className="mt-2 max-[768px]:text-sm max-[768px]:overflow-hidden max-[768px]:h-[55px]">
            {blogdescription}
          </p>
        )}
      </div>
      {blogthumbnail && (
        <Image
          src={blogthumbnail}
          alt={blogtitle}
          className="w-full h-[216px] h-full rounded-md max-[768px]:h-[150px] object-cover"
          width={346}
          height={216}
        />
      )}
    </div>
  );
};

export default EachBlog;
