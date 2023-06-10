import React from 'react'
import { Banner } from './Banner';
import Catagory from './Catagory';
import"./Home.css";
import Product from './Product';

export const Home = () => {
  return (
    <>
    <Banner/>
    <Catagory/>
    <Product/>
    </>
  )
}
export default Home;