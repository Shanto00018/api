import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Catagory from './Components/Catagory';
import Product from './Components/Product';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import IndividualCatagory from './Components/IndividualCatagory';
import Singlepro from './Components/Singlepro';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/catagory" element={<IndividualCatagory/>}/>
      <Route path="/product" element={<Singlepro/>}/>

    </Routes>
    <Newsletter/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
