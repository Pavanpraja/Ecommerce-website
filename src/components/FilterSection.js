import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {filter: {text}, updateFiltervalue} = useFilterContext();
  return (
    <>
      <div className="filter-con">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updateFiltervalue} />
        </form>
      </div>
    </>
  );
};

export default FilterSection;
