import React, { useEffect, useState } from 'react';
import { StyledGridForPages, StyledGridDivElementImg, StyledGridDivElement, StyledGridDivDesc,StyledHeadings } from './StyledComponents';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import data from '../api/data.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { gsap } from 'gsap';
import Footers from './Footers';

const Slides = ({addToCart}) => {
  
  const colorArray2 = [
    '#D3FBD8', '#FF9669', '#F2FD71', '#B798D4', '#ECCDA6', '#66EFEE',
    '#F5C199', '#2B2B2B','#8DFEAE', '#FFD700', '#FF6347', '#4B0082',
    '#9ACD32', '#00CED1', '#FF1493', '#6495ED',  '#FFA500'
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
    const lifestyleItems = data.filter(item => item.category === 'slide');
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
    <StyledHeadings>

      <h1 className='mt-12 text-lg text-center lg:mt-0 lg:ml-16 sm:text-2xl'>BROWSE ALL FOOTWEARS</h1>
      <div className='flex items-center mt-12 lg:mt-0 gap-7'>
        <Dropdown options={options} value={'Sort By'} onChange={e => setSelectedSortOption(e.value)}>
        SORT BY<MdOutlineKeyboardArrowDown size={35} />
        </Dropdown>
      </div>
    </StyledHeadings>
      <StyledGridForPages>
        {products.map((e, i) => {

          return (
            <StyledGridDivElement className='mx-auto grid-item md:mx-0' key={i} style={{ backgroundColor: colorArray2[e.id] }}>
              <StyledGridDivElementImg src={e.image} alt="" />
              <StyledGridDivDesc>
                <p>{e.title.toUpperCase()}</p>
                <p>${e.price}</p>
              </StyledGridDivDesc>
              <button
              id={e.id}
              onClick={addToCart}
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

export default Slides;
