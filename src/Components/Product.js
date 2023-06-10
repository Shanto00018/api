import React from 'react'
import"./Product.css";
import Productcont from './Productcont';

export const Product = () => {
  return (
    <div className="product">
      <div className="productcontainer">
        <h3 className="section_title">Heading</h3>
        <div className="underline"></div>
        <div className="products">
          <Productcont/>
          <Productcont/>
          <Productcont/>
          <Productcont/>
          <Productcont/>
          <Productcont/>
          <Productcont/>
          <Productcont/>
        </div>
      </div>
    </div>
  )
}
export default Product;
