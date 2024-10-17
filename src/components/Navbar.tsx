import React from "react";
import Svg from "@/helpers/SvgMapper";

const Navbar = () => {
  return (
    <nav>
      <div className="py-10 flex items-center gap-4">
        <Svg type="logo" className="fade-in-right " />
        <div className="rounded  flex items-center px-[20px] py-[5px] rounded-full bg-grey">
          <Svg type="search" fill="grey" className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-grey outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
