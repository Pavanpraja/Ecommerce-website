import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
    // console.log(products)
  return (
    <>
        <div className="grid-view-con">
            <div className="inn-gv-con">
                {
                    products.map((curElem)=>{
                        return <Product key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    </>
  )
}

export default GridView
