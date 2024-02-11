import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import './styles/App.css'
// import { useFilterContext } from './context/FilterContext';

function Products() {

  // const {filter_products} = useFilterContext();
  // console.log(filter_products);

  return (
    <>
      <div className="ps-cont">
        <div className="ps-all-con">
          <div className="ps-f-sec">
          <FilterSection />
          </div>
          <div className="ps-s-sec">
            <div className="ps-sf-sec"><Sort /></div>
            <div className="ps-ss-sec"><ProductList /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
