import React, { useEffect, useState } from 'react';
import { StyledGridForPages, StyledGridDivElementImg, StyledGridDivElement, StyledGridDivDesc } from './StyledComponents';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import data from '../api/data.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { gsap } from 'gsap';
import Footers from './Footers';

const Lifestyle = ({addToCart}) => {

  const colorArray2 = [
    '#D3FBD8', '#FF9669', '#F2FD71', '#B798D4', '#ECCDA6', '#66EFEE', '#F5C199', '#2B2B2B',
    '#8DFEAE', '#FFD700', '#FF6347', '#4B0082', '#9ACD32', '#00CED1', '#FF1493', '#6495ED'
  ];

  const [products, setProducts] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const options = [
    'Price: High-Low', 'Price: Low-High', 'Name: A-Z'
  ];
  const sortOptions = {
    'Price: High-Low': (a, b) => b.price - a.price,
    'Price: Low-High': (a, b) => a.price - b.price,
    'Name: A-Z': (a, b) => a.title.localeCompare(b.title),
  };

  useEffect(() => {
    const lifestyleItems = data.filter(item => item.category === 'running');
    const sortedItems = [...lifestyleItems].sort(sortOptions[selectedSortOption]);
    setProducts(sortedItems);

    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
    
    tl.fromTo(
      '.grid-item',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
  }, [selectedSortOption]);

  const handleSortChange = (e) => {
    setSelectedSortOption(e.value);
  };

  const [buttonColor, setButtonColor] = useState(0)
useEffect(()=>{
  let randomNum = Math.floor(Math.random() *15)
  setButtonColor(randomNum)
},[])
let colorArrayIndex = colorArray2[buttonColor]

  return (
    <>
    <div className='px-24 py-0 bg-white'>
      <div className='flex justify-between py-5 px-14'>
        <div>
          <h1 className='text-2xl text-center'>BROWSE RUNNING SHOES</h1>
        </div>
        <div>
          <Dropdown options={options} value={'Sort By'} onChange={handleSortChange}>
            SORT BY<MdOutlineKeyboardArrowDown size={35} />
          </Dropdown>
        </div>
      </div>
      <StyledGridForPages>
        {products.map((e, i) => {

          return (
            <StyledGridDivElement className='grid-item' key={i} style={{ backgroundColor: colorArray2[e.id] }}>
              <StyledGridDivElementImg src={e.image} alt="" />
              <StyledGridDivDesc>
                <p>{e.title.toUpperCase()}</p>
                <p>${e.price}</p>
              </StyledGridDivDesc>
              <button id={e.id} onClick={addToCart}
              className='px-5 py-3 mt-4 text-white rounded-xl' style={{backgroundColor: colorArrayIndex}}>add to cart</button>
            </StyledGridDivElement>
          );
        })}
      </StyledGridForPages>
    </div>
    <Footers/>
    </>
  );
};

export default Lifestyle;
