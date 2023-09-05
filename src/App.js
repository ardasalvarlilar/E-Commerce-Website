import { Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './components/HomePage';
import Shop from './components/Shop';
import Navbars from './components/Navbars';
import Basketball from './components/Basketball'
import Slides from './components/Slides'
import Running from './components/Running'
import Lifestyle from './components/Lifestyle';
import Carts from './components/Carts'
import Alphafly from './components/Alphafly'
import './app.css'
import 'react-multi-carousel/lib/styles.css';
import { StyledNav } from './components/StyledComponents';
import './components/tailwind.css'
import { useState, useEffect, } from 'react';
import data from './api/data.json'
function App() {

  const [cartCount, setCartCount] = useState(0)
  const [getShoeDetails, setGetShoeDetails] = useState([])
  const [sendColorsCart, setSendColorsCart] = useState([])


  const increment = () =>{
  setCartCount((prevCount) => prevCount + setGetShoeDetails.length)
  }


  const addToCart = e => {
  const itemId = parseInt(e.target.id);
  increment()
  const selectedItem = data.find(item => item.id === itemId);
  setGetShoeDetails(prevDetails => [...prevDetails, selectedItem]);

  
};


console.log(sendColorsCart)

useEffect(() => {
  console.log(getShoeDetails);
}, [getShoeDetails]);
  

  return (
    <>
    <StyledNav>
      <Navbars getShoeDetails={getShoeDetails} addToCart={addToCart}/>
    </StyledNav>
      <Routes >
        <Route path='/' element={<HomePage />}  />
        <Route path='/shop' element={<Shop cartCount={cartCount} getShoeDetails={getShoeDetails} addToCart={addToCart} />}/>
        <Route path='/lifestyle' element={<Lifestyle getShoeDetails={getShoeDetails} addToCart={addToCart} />}/>
        <Route path='/basketball' element={<Basketball getShoeDetails={getShoeDetails} addToCart={addToCart} />} />
        <Route path='/slides' element={<Slides   getShoeDetails={getShoeDetails} addToCart={addToCart} />}/>
        <Route path='/running' element={<Running  getShoeDetails={getShoeDetails} addToCart={addToCart}  />}/>
        <Route path='/cart' element={<Carts getShoeDetails={getShoeDetails} setCartCount={setCartCount} setGetShoeDetails={setGetShoeDetails} />}/>
        <Route path='/alphafly' element={<Alphafly setsendcolorscart={setSendColorsCart}  />} />
        <Route path='/E-Commerce-Website' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  );
}

export default App;
