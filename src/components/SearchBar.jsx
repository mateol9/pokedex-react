import React from "react";
import { useState } from "react";
import { colors } from "../utils/constants";
import search from "../assets/Search.svg";

const Searchbar = () => {
  const [input, setInput] = useState("");

  return (
    <div
      className="w-[280px] h-8 rounded-2xl innerShadow flex items-center px-4 py-2 gap-2"
      style={{ background: colors.white }}
    >
      <div className="">
        <img src={search} alt="search icon" />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="outline-none border-none w-full body3 placeholder:text-[#666666]"
      />
    </div>
  );
};

export default Searchbar;
