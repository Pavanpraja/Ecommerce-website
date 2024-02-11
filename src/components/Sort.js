import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';

const Sort = () => {
  const {grid_view, setGridView, setListView, filter_products, sorting} = useFilterContext();
  return (
    <>
      <div className="sort-con">
        <div className="sort-list">
        <button className={grid_view ?  'Active sort-btn' : 'sort-btn'} onClick={setGridView}><BsFillGridFill className="sorticon" /></button>
        <button className={!grid_view ?  'Active sort-btn' : 'sort-btn'} onClick={setListView}><BsListCheck className="sorticon" /></button>
        </div>
        <div className="sor-pro-data">
        {`${filter_products.length} Product Available`}
        </div>
        <div className="sor-sel">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sort
