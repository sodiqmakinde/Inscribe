import React from "react";
import TagButton from "./TagButton";

const Recommended = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-2xl text-primary font-semibold mt-10 mb-4">
          Recommended Topics
        </h2>
        <div>
          <TagButton label="4 mins Read" />
          <TagButton label="Javascript" />
          <TagButton label="CSS" />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
