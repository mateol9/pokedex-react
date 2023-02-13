import React, { useState } from "react";
import numberSearch from "../assets/NumberSearch.svg";
import { colors } from "../utils/constants";

const SearchFilter = () => {
  const [opacity, setOpacity] = useState("none");
  const [selected, setSelected] = useState("A");

  return (
    <div>
      <div className="absolute z-50">
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center innerShadow"
          onClick={() => setOpacity(opacity === "none" ? "block" : "none")}
          style={{ background: colors.white }}
        >
          <img src={numberSearch} alt="Search by number" />
        </button>

        <div
          className="w-28 h-32 dropShadow2 rounded-xl absolute top-10 right-0"
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
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected === "A"}
                  onChange={() => setSelected("A")}
                  className="customCheckbox"
                />
                <span className="body3">Number</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected === "B"}
                  onChange={() => setSelected("B")}
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
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
        style={{ display: opacity }}
      ></div>
    </div>
  );
};

export default SearchFilter;
