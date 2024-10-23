import React, { useState } from "react";
import Author from "./Author";
import Image from "next/image";
import Svg from "@/helpers/SvgMapper";
import Link from "next/link";
import parse from "html-react-parser";

interface EachBlogComponent {
  authortitle: string;
  authorName: string;
  blogtitle: string;
  blogdescription?: string;
  blogthumbnail?: string;
  headshot?: string;
  blogslug: string;
  date: { seconds: number; nanoseconds: number };
  clicks: number;
  comments: number;
}

const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
  const date = new Date(timestamp.seconds * 1000);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
  };

  return date.toLocaleString("en-GB", options).replace(",", "");
};

const formatNumber = (number: number) => {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toString();
};

const EachBlog = ({
  authortitle,
  authorName,
  blogtitle,
  blogdescription,
  blogthumbnail,
  headshot,
  blogslug,
  date,
  clicks,
  comments,
}: EachBlogComponent) => {
  const [isClapped, setIsClapped] = useState(false);

  const handleClapClick = () => {
    setIsClapped(!isClapped);
  };

  return (
    <div className="grid gap-2 border-borderColor border-b border-b-1 fade-in-bottom items-center grid-cols-[65%_35%] justify-between py-6">
      <div className="mr-4">
        <Author
          authorheadshot={headshot}
          title={authortitle}
          name={authorName}
        />

        <Link href={blogslug}>
          <h1 className="font-medium text-2xl mt-5 max-[768px]:mt-3 max-[768px]:text-xl">
            {blogtitle}
          </h1>
        </Link>
        {blogdescription && (
          <p className="mt-2 max-[768px]:text-sm max-[768px]:overflow-hidden max-[768px]:h-[55px]">
            {parse(
              blogdescription.split(" ").slice(0, 30).join(" ") +
                (blogdescription.split(" ").length > 150 ? "..." : "")
            )}
          </p>
        )}

        <div>
          <ul className="flex mt-4 max-w-[200px] justify-between items-center">
            <li className="text-fadeWhite text-sm font-extralight ">
              {formatDate(date)}
            </li>
            <li className="flex items-center">
              <div
                className={`flex cursor-pointer items-center ${
                  isClapped ? "shake" : ""
                }`}
                onClick={handleClapClick}
              >
                <Svg
                  type="clap"
                  fill={isClapped ? "#EC4849" : "var(--primary)"}
                />
                <span className="ml-2 text-sm text-fadeWhite">
                  {formatNumber(clicks)}
                </span>
              </div>
            </li>
            <li className="flex cursor-pointer items-center">
              <Svg type="comment" />
              <span className="ml-2 text-sm text-fadeWhite">
                {formatNumber(comments)}
              </span>
            </li>
          </ul>
        </div>
      </div>
      {blogthumbnail && (
        <Image
          src={blogthumbnail}
          alt={blogtitle}
          className="w-full h-[216px] h-full rounded-md max-[768px]:h-[100px] object-cover"
          width={346}
          height={216}
        />
      )}
    </div>
  );
};

export default EachBlog;
