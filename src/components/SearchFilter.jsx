import React from "react";
import numberSearch from "../assets/NumberSearch.svg";
import { colors } from "../utils/constants";

const SearchFilter = () => {
  return (
    <div
      className="w-8 h-8 rounded-2xl flex items-center justify-center innerShadow"
      style={{ background: colors.white }}
    >
      <img src={numberSearch} alt="Search by number" />
    </div>
  );
};

export default SearchFilter;
