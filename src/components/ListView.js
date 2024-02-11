import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <>
    <div className="list-view-con">
            <div className="inn-lv-con">
                {
                    products.map((curElem)=>{
                  const {id, name, image, price, description} = curElem;
                        return (
                          <div className="two-col">
                            <figure>
                              <img src={image} alt={name} />
                            </figure>
                            <div className="img-des">
                              <h2>{name}</h2>
                              <h2><FormatPrice price={price} /></h2>
                              <p>{description.slice(0, 90)} ...</p>
                              <NavLink to={`/singleproduct/${id}`}>
                                <button>Know More...</button>
                              </NavLink>
                            </div>
                          </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default ListView
