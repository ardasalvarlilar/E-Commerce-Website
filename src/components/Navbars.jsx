import React, {useState, useEffect,} from 'react'
import {StyledNav,StyledLogo, StlyedUl,StyledDiv,StyledLink,StyledBag,StyledBagSpan,StyledInputSearch,StyledInputSearchDiv,StyledForSearch,StyledHamburger,NavbarWrap,HamburgerWrap} from './StyledComponents'
import {BsSearch} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import {Link } from 'react-router-dom';
import data from '../api/data.json'
const Navbars = ({getShoeDetails,addToCart}) => {
  const location = useLocation()
  const ishomepage = location.pathname === '/'
  const colorArray2 = [
    '#D3FBD8',
    '#FF9669',
    '#F2FD71',
    '#B798D4',
    '#ECCDA6',
    '#66EFEE',
    '#F5C199',
    '#2B2B2B',
    '#8DFEAE',
    '#FFD700',
    '#FF6347',
    '#4B0082',
    '#9ACD32', 
    '#00CED1', 
    '#FF1493', 
    '#6495ED',
    '#FFA500'
  ];

  const [sendColorIndex, setSendColorIndex] = useState(0)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(()=>{
    const randomNum = Math.floor(Math.random() *15)
    setSendColorIndex(randomNum)
  },[])

  const sendColor = colorArray2[sendColorIndex]


  const searching = () => {
    setIsSearching(!isSearching)
  }
  
  const products = data

  const [searchQuery, setSearchQuery] = useState(""); // Arama sorgusu için state
  const [filteredResults, setFilteredResults] = useState([]); 

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredResults([]); // Arama sorgusu boşsa sonuçları temizle
      return;
    }

    // Arama sorgusuna göre ürünleri filtrele
    const matchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  setFilteredResults(matchedProducts);
};

  return (
    <NavbarWrap>
      <HamburgerWrap>
      <StyledHamburger size={32}/>
      </HamburgerWrap>
    <StyledNav style={{padding: '20px 50px'}} 
    isusersearching = {isSearching.toString()}
    ishomepage={ishomepage.toString()}  >

      <div>
        <Link to='/'>
          <StyledLogo src='./e-commerce-app/img/logo.png'  alt="" />
        </Link>
      </div>
      <div>
        <StlyedUl>
          <li>
            <StyledLink sent={sendColor} to='/'>Home</StyledLink>
          </li>
          <li>
            <StyledLink sent={sendColor} to='/shop' >Shop</StyledLink>
          </li>
          <li>
            <StyledLink sent={sendColor} to='/lifestyle'>Lifestyle</StyledLink>
          </li>
          <li>
            <StyledLink sent={sendColor} to='/basketball' >Basketball</StyledLink>
          </li>
          <li>
            <StyledLink sent={sendColor} to='/slides' >Slides</StyledLink>
          </li>
          <li>
            <StyledLink sent={sendColor} to='/running' >Running</StyledLink>
          </li>
        </StlyedUl>
      </div>
      <StyledDiv>
      <StyledInputSearchDiv>
        <BsSearch size={30} className='cursor-pointer ' />
        <StyledInputSearch type="text" placeholder='Search' onClick={searching}
        value={searchQuery} // Arama sorgusunu input değerine bağla
        onChange={handleSearch} // Arama sorgusu değiştiğinde çağrılacak fonksiyon

        />
      </StyledInputSearchDiv>
        <Link className='flex' to='/cart' >
          <StyledBag size={35}/>
          <StyledBagSpan istwodigit={getShoeDetails.length} > {getShoeDetails.length !== 0 ? getShoeDetails.length : null}</StyledBagSpan>
        </Link>
      </StyledDiv>
    </StyledNav>
    
    <StyledForSearch usersearched = {filteredResults} isusersearching={isSearching.toString()}>
        <div className='flex items-center justify-end mb-8'>
          <button className='text-lg hover:text-footerColor' onClick={searching}>Cancel</button>
        </div>
        <div className="grid w-full grid-cols-4 gap-y-20">
          {filteredResults.map((product) => (
            <div key={product.id} className='flex flex-col w-64 h-64 rounded-xl' style={{backgroundColor: colorArray2[product.id]}}>
            <div className='mx-auto w-44'>
              <img src={product.image} alt={product.title} />
            </div>
              <div className='flex items-center justify-between px-3 py-1'>
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
              <div className='mx-auto'>
                <button className='px-4 py-3 mt-4 rounded-2xl' 
                style={{backgroundColor:colorArray2[product.id]}}
                id={product.id}
            onClick={addToCart}
                >Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </StyledForSearch>
    </NavbarWrap>
  )
}

export default Navbars