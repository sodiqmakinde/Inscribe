"use client";
import React, { useState } from "react";
import Link from "next/link";

type TagButtonProps = {
  label: string;
  isLink?: boolean;
  href?: string;
};

const TagButton = ({ label, isLink = false, href = "" }: TagButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!isLink) {
      setIsActive(!isActive);
    }
  };

  return isLink && href ? (
    <Link href={href}>
      <button
        className={`px-7 font-normal my-2 py-1 rounded-full border transition-colors ${
          isActive
            ? "bg-background text-white"
            : "border text-fadeWhite border-borderColor"
        }`}
        onClick={handleClick}
      >
        {label}
      </button>
    </Link>
  ) : (
    <button
      className={`px-7 font-normal py-1 my-1 mx-1 rounded-full border transition-colors ${
        isActive
          ? "bg-primary text-white"
          : "border text-fadeWhite border-borderColor"
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TagButton;
