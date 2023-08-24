import React, { useEffect, useState, useRef } from 'react'
import {StyledContainer,Aside,Section,StyledButton,StyledFilter,StyledGridDiv,StyledGridDivElement,StyledGridDivElementImg,StyledGridDivDesc,StyledFilterBtn,StyledHeader2,StyledShopUl, AddToCartBtn,HamburgerWrap,StyledHeadings} from './StyledComponents'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import data from '../api/data.json'
import './tailwind.css'
import '../app.css'
import { gsap } from 'gsap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './tailwind.css'
import Footers from './Footers'
import {RxHamburgerMenu} from 'react-icons/rx'
const Shop = ({addToCart}) => {

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

const [buttonColor, setButtonColor] = useState(0)
// Buraya dokundum
useEffect(()=>{
  let randomNum = Math.floor(Math.random() *15)
  setButtonColor(randomNum)
},[])
let colorArrayIndex = colorArray2[buttonColor]
// Buraya dokundum

const [products, setProducts] = useState([])
const [filterCategory, setFilterCategory] = useState([])
const [selectedCategory, setSelectedCategory] = useState(null);
const [isDivVisible, setIsDivVisible] = useState(false)
const [gird, setGrid] = useState(false)
const headerRef = useRef(null);
const listRef = useRef(null)
const imgRef = useRef(null)

useEffect(()=>{
  setProducts(data)
  setFilterCategory(data)
},[])

useEffect(()=>{
  const timeline = gsap.timeline()
  timeline.fromTo(imgRef.current, {height: '0px'}, {height: '256px'})
  .fromTo(headerRef.current, {visibility: 'hidden'}, {visibility: 'visible', duration: 1})
  .fromTo(headerRef.current, {x: -350}, {x: 0,  duration: 1},'+=.5')
  .fromTo(listRef.current, {x:-350}, {x: 0,stagger: .3 , duration: 1}, '-=1')
  .fromTo(listRef.current, {opacity: 0}, {opacity: 1, stagger: .3 ,  duration: 1}, '')

  return () => {
    timeline.kill()
  }
},[isDivVisible])




useEffect(() => {
  const filteredProducts = selectedCategory
    ? filterCategory.filter(item => item.category === selectedCategory)
    : filterCategory;
  setProducts(filteredProducts);
}, [selectedCategory, filterCategory]);

const getCategoryCounts = () => {
  const categoryCounts = {};
  filterCategory.forEach(item => {
    if (categoryCounts[item.category]) {
      categoryCounts[item.category]++;
    } else {
      categoryCounts[item.category] = 1;
    }
  });
  return categoryCounts;
};

const categoryCounts = getCategoryCounts();

const handleCategoryClick = category => {
  setSelectedCategory(selectedCategory === category ? null : category);
};

const handleButtonClick = () =>{
  setIsDivVisible(!isDivVisible)
  setGrid(!gird)
}


const options = [
  'Price: High-Low', 'Price: Low-High', 'Name: A-Z'
];

const sortOptions = {
  'Price: High-Low': (a, b) => b.price - a.price,
  'Price: Low-High': (a, b) => a.price - b.price,
  'Name: A-Z': (a, b) => a.title.localeCompare(b.title),
};

const [selectedSortOption, setSelectedSortOption] = useState(''); 
useEffect(() => {
  const sortedProducts = [...products].sort(sortOptions[selectedSortOption]);
  setProducts(sortedProducts);
}, [selectedSortOption]);


useEffect(()=>{
  const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
    
  tl.fromTo(
    '.grid-item',
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.2 }
  );
},[selectedSortOption])


  return (
    <>
    <StyledContainer>
      <Aside className='hidden p-8 border-r' showdiv={isDivVisible.toString()}>
        <div className='h-64 mt-14'>
          <img src="./E-Commerce-Website/img/nikeTest.jpg" alt="" style={{width: '100%', borderRadius: '1.5rem'}} />
        </div>
        <StyledHeader2 ref={headerRef} showheader={isDivVisible.toString()}>FOOTWEAR'S</StyledHeader2>
        <div className= 'mt-10'>
        <StyledShopUl ref={listRef} showlist = {isDivVisible.toString()}>
        {Object.entries(categoryCounts).map(([category, count], index) => (
          <li key={index}>
            <StyledFilterBtn
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
              <span  className='ml-1 text-slate-400'>({count})</span>
            </StyledFilterBtn>
          </li>
        ))}
      </StyledShopUl>

        </div>
      </Aside>  
      <Section setwidth={isDivVisible.toString()}>
      <HamburgerWrap>
          <RxHamburgerMenu size={35}/>
        </HamburgerWrap>
        <StyledHeadings>

          <h1 className='ml-16 text-2xl text-center'>BROWSE ALL FOOTWEARS</h1>
          <div className='flex items-center gap-7'>
            <StyledButton onClick={handleButtonClick}>
            {isDivVisible ? 'HIDE FILTERS' : 'SHOW FILTERS'}

            <StyledFilter size={25}/></StyledButton>
            <Dropdown options={options} value={'Sort By'} onChange={e => setSelectedSortOption(e.value)}>
              SORT BY<MdOutlineKeyboardArrowDown size={35} />
            </Dropdown>

            
          </div>
        </StyledHeadings>
        <StyledGridDiv gridlayout={gird.toString()}>
          {products.map((e,i)=>(
            <StyledGridDivElement key={i} className="grid-item" style={{backgroundColor: colorArray2[e.id] }} >
              <StyledGridDivElementImg src={e.image} alt="" />
            <StyledGridDivDesc>
                <p>{e.title.toUpperCase()}</p>
                <p>${e.price}</p>
            </StyledGridDivDesc>
            <div className='flex items-center justify-between'>
            <AddToCartBtn
            id={e.id}
            onClick={addToCart}
            className='px-5 py-3 mt-4 text-white rounded-xl' style={{backgroundColor: colorArrayIndex}}>add to cart</AddToCartBtn> 
            </div>
            </StyledGridDivElement>
          ))}
        </StyledGridDiv>
      </Section>
    </StyledContainer>
      <Footers/>
    </>
  )
}

export default Shop