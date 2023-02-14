import React, { useState, useEffect } from "react";
import numberSearch from "../assets/NumberSearch.svg";
import nameSearch from "../assets/NameSearch.svg";
import { colors } from "../utils/constants";

const SearchFilter = ({ setFilter, filter }) => {
  const [opacity, setOpacity] = useState("none");

  return (
    <div>
      <div className="absolute ">
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center innerShadow"
          onClick={() => setOpacity("block")}
          style={{ background: colors.white }}
        >
          <img
            src={filter === "number" ? numberSearch : nameSearch}
            alt="Search by number"
          />
        </button>

        <div
          className="w-28 h-32 dropShadow2 rounded-xl absolute top-10 right-0 z-50"
          style={{ background: colors.primary, display: opacity }}
        >
          <div className="w-full h-full flex flex-col justify-between p-1">
            <p
              className="subtitle2 my-auto ml-4"
              style={{ color: colors.white }}
            >
              Sort by:
            </p>

            <form
              className="rounded-lg h-20 flex flex-col justify-center gap-4 px-5"
              style={{ background: colors.white }}
              onChange={() => setOpacity("none")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filter === "number"}
                  onChange={() => setFilter("number")}
                  className="customCheckbox"
                />
                <span className="body3">Number</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filter === "name"}
                  onChange={() => setFilter("name")}
                  name="test"
                  className="customCheckbox"
                />
                <span className="body3">Name</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpacity("none")}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        style={{ display: opacity }}
      ></div>
    </div>
  );
};

export default SearchFilter;
