import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import './styles/App.css';
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log(singleProduct)

  const {
    id: random,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div
        className="page_loaded"
        style={{
          fontSize: "7rem",
          fontWeight: 600,
          textAlign: "center",
          position: "relative",
          top: "12rem",
          marginBottom: "32rem",
        }}
      >
        Loading.....
      </div>
    );
  }
  return (
    <>
      <div className="pageNavigation">
        <PageNavigation title={name} />
        <div className="sp-container">
          <div className="prod-imgs">
            <MyImage imgs={image} />
          </div>
          {/* product data */}
          <div className="sing-product-con">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="spro-price">
              <del>
                MRP: <FormatPrice price={price + 25000} />
              </del>
            </p>
            <p className="product-data-price" style={{color: "#0ae393"}}>
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="out-w-con">
              <div className="product-data-warranty">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-data-warranty">
                <TbReplace className="warranty-icon" />
                <p>10 Days Replacement</p>
              </div>
              <div className="product-data-warranty">
                <TbTruckDelivery className="warranty-icon" />
                <p>Varde Delivered</p>
              </div>
              <div className="product-data-warranty">
                <MdSecurity className="warranty-icon" />
                <p>1 Year Warranty</p>
              </div>
              <div className="product-data-info">
                <p>Available: <span>{stock > 0 ? "In Stock": "Not Available"}</span></p>
                <p>ID: <span>{id}</span></p>
                <p>Brand: <span>{company}</span></p>
              </div>
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
