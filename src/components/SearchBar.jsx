import React from "react";
import { useState } from "react";
import { colors } from "../utils/constants";
import searchLogo from "../assets/Search.svg";

const Searchbar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(search);
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      handleSearch(null);
    }
  };

  return (
    <div
      className="w-[280px] h-8 rounded-2xl innerShadow flex items-center px-4 py-2 gap-2"
      style={{ background: colors.white }}
    >
      <div className="">
        <img src={searchLogo} alt="search icon" />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        className="outline-none border-none w-full body3 placeholder:text-[#666666]"
      />
    </div>
  );
};

export default Searchbar;
