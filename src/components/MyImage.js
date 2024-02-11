import React, { useState } from "react";

const MyImage = ({ imgs = [{url: ""}] }) => {

  const [mainImage, setMainImage] = useState(imgs[0]);

  // console.log(imgs)
  return (
    <>
      <div className="grid-four-col">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-images-style"
                key={index}
                onClick={()=>setMainImage(curElm)}
              />
            </figure>
          )
        })}
      </div>
      <div className="p_main_p">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </>
  );
};

export default MyImage;
