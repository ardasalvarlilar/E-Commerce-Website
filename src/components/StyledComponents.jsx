import { styled } from 'styled-components';
import {NavLink,Link } from 'react-router-dom';
import Slider from "react-slick";
import {GiSettingsKnobs} from 'react-icons/gi'
import {BsFillHandbagFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'



// navbar start
const StyledLogo = styled.img`
  width: 50px;
  height: 20px;
`

const HamburgerWrap = styled.div`
display: none;
  @media (max-width: 1024px){
    display: block;
  }
`
const StyledHamburger = styled(RxHamburgerMenu)`
  display: none;

  @media (max-width: 768px){
    display: block;
  }
`
const NavbarWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px){
    display: block;
  }
`

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-bottom: .5px solid white;
  background: ${({ ishomepage }) =>ishomepage === 'true' 
    ? 'linear-gradient(to right, #e94c89, #bea3d7)'
    : 'white'};

`
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  &.active{
    color: ${props => props.sent}; 
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${props => props.sent};
    position: absolute;
    bottom: -6px;
    left: 0;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.2s ease-in-out;
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const StyledInputSearchDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  background-color: #f5f5f5;
  border-radius: 1rem;
  height: 40px;
`

const StyledInputSearch = styled.input`
  background-color: transparent;
  border-radius: 1rem;
  padding: 5px 10px;
  color: #E84C89;

  &:focus{
    outline: none;
  }
  &::placeholder{
    padding: 5px, 10px;
    color: #E84C89;
  }
`
const StyledForSearch = styled.div`
  display: ${props=> props.isusersearching === 'true' ? 'block' : 'none'};
  justify-content: space-between;
  padding: ${props => props.isusersearching === 'true' ? '20px 50px' : '0'};
  height: ${props => props.isusersearching ==='true' ? '100vh' : '0%' };
  margin-bottom: ${props => props.usersearched.length !== 0 ? '700px' : '0px'};

  @media (max-width: 1024px) {
    display: none  !important;
  }
`

//navbar end

// homepage start
const HomeDiv = styled.div`
  background-image: linear-gradient(to right, #E94C89, #BEA3D7);
  min-height: 100vh;

  @media (max-width: 768px){
    overflow-x: hidden;
  }
`
const StyledMain = styled.main`
  position: relative;
  padding: 20px 50px;

  @media (max-width: 1024){
    padding: 0px;
  }
`
const StyledMainImg = styled.img`
  width: 100%;
  z-index:1;
`

const StyledMainImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 60px auto 0;
  transform: rotate(-23deg);
  z-index: 10;
  
  @media (max-width: 768px){
    margin-top: 150px;
    width: 100%;
    z-index: 2;
  }
`

const StyledSpanFirst = styled.h1`
  color: hotpink;
  font-size: 12rem;
  letter-spacing: 40px;
  font-weight: 1000;
  position: absolute;
  z-index: 0;
  color: white;
  top: -20px;
  left: 200px;
  
  @media (max-width: 	1536px) {
    font-size: 6rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
    top: 0;
    left: 150px;
    position: static
  }
  @media (max-width: 	768px) {
    font-size: 2.5rem;
    left: 100px;
  }

  @media (max-width: 640px){
    font-size: 2.3rem;
    letter-spacing: 10px;
    position: absolute;
    top: 70px;
    left: 60px;
  }
`

const StyledSpanSecond = styled.h1`
  color: white;
  font-size: 10rem;
  letter-spacing: 35px;
  font-weight: 1000;
  z-index: 0;
  position: absolute;
  bottom: 0px;
  left: 200px;

  @media (max-width: 	1536px) {
    font-size: 6rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
    left: 150px;
    position: static;
    margin-top: 30px;
  }

  @media (max-width: 	768px) {
    font-size: 2rem;
    left:100px;
  }

  @media (max-width: 640px){
    font-size: 2rem;
    letter-spacing: 10px;
    margin-top: 100px;
  }
`

const Collection = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  transition: all linear;
  right: 80px;
  bottom: 208px;
  color: #B7013B;

  @media (max-width: 1536px){
    font-size: 1.2rem;
    right: 50px;
  }

  @media (max-width: 1024px){
    right: 30px;
    bottom: 150px;
    position: static;
  }

  @media (max-width: 768px){
    margin-top: 50px;
    font-size: 1rem;
    bottom: 50px;
  }
  @media (max-width: 640px){
    font-size: .8rem;
    bottom: 30px;
    margin-top: 50px;
  }
`
// homepage end

// carousel start
const StyledCarousel = styled(Slider)`
  cursor: grab;

  @media (max-width: 768px){
    display: none;
  }
`

const StyledCarouselItem = styled.div`
  width: 70%;
  border-radius: 1rem;
  background-color: white;
  padding: 12px 20px;

  @media (max-width: 768px){
    width: 80%;
  }
`

const StyledCarouselItemImgDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -20px;
  z-index: 4;
`


const StyledCarouselItemImg = styled.img`
  width:100%;
  height:150px;
  margin-left: -40px;
  z-index: 4;
  transform: rotate(-23deg);
`

const StyledCarouselItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`


//SHOP SECTION COMPONENTS
const StyledContainer = styled.main`
  display: flex;
  background-color: white;
  min-height: 100vh;
`
const Aside = styled.aside`
  width: ${props => props.showdiv === 'true' ? '30%' : '0%'};
  padding: 32px;
  border-right: ${props => props.showdiv === 'true' ? '.5px solid #bbb' : 'none'};
  /* display: ${props => props.showDiv ? 'block' : 'none'}; */
  display: block;
  transition: linear 1s;
  @media (max-width: 1024){
    display: none!important;
  }
`
const Section = styled.section`
  width: ${props => props.setwidth === 'true' ? '70%' : '100%'};
  transition: width linear 1s;
`

const StyledHeadings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px){
    flex-direction: column;
  }
`

const StyledButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`
const StyledFilter = styled(GiSettingsKnobs)`
  transform: rotate(90deg);
`
const StyledGridDiv = styled.div`
  display: grid;
  grid-template-columns: ${props=> props.gridlayout === 'true' ? 'repeat(4,1fr)' : 'repeat(5,1fr)'};
  transition: linear 1s;
  row-gap: 130px;
  column-gap: 30px;
  padding: 50px;

  @media (max-width: 1535px){
    grid-template-columns: ${props => props.gridlayout === 'true' ? 'repeat(3,1fr)!important' : 'repeat(4,1fr)!important'};
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  @media (max-width: 768px){
    grid-template-columns: repeat(1,1fr)!important;
  }
`

const StyledGridDivElement = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    width: 230px;
    height: 230px;
  }
`
const StyledGridDivElementImg = styled.img`
  width:90%;
  transform: rotate(-23deg);
  filter: drop-shadow(8px 8px 4px #bbb);
`
const StyledGridDivDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  margin-top: -50px;
  padding: 1px 10px;
  font-family: 'Space Grotesk', sans-serif!important;
`

const StyledFilterBtn = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer; 

  &.selected::before {
    content: '|';
    position: absolute;
    left: -15px;
    transform: rotate(90deg);
  }
  &.selected {
    transform: translateX(20px);
  }
`;

  const StyledHeader2 = styled.h2`
    margin-top: 20px;
    font-size: 40px;
    font-weight: 900;
    display: ${props => props.showheader === 'true' ? 'block' : 'none'};
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 640px) {
      font-size: .65rem;
    }
  `

  const StyledShopUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 18px;
    display: ${props => props.showlist === 'true' ? 'block' : 'none'};
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 640px) {
      font-size: .65rem;
    }
  `

const StyledGridForPages = styled.main`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: linear 1s;
  row-gap: 100px;
  column-gap: 30px;
  padding: 50px;
  background-color: #fff;
  min-height: 100vh;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;



const StyledBag = styled(BsFillHandbagFill)`
  position: relative;
`
const StyledBagSpan = styled.span`
  position: absolute;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 900;
  right: ${props => props.istwodigit <10 ? '63px' : '57px'};
  top: 28px;
`
const AddToCartBtn = styled.button`
  padding: 12px 20px;
  margin-top: 1rem;
  color: 'white';
  border-radius: 1rem;
`
//! ****************************************
const CartDiv = styled.div`
  min-height: 100vh;
  background:${props => props.iscart === 'true' ?  'white' : 'linear-gradient(to right, #e94c89, #bea3d7)'};
`
const StyledInput = styled.input`
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 3px 7px;
  &::placeholder{
    font-size: 0.9rem;
    padding: 3px 7px;
  }
  &:focus{
    outline: none;
  }
`

const StyledProductDelete = styled(AiFillCloseCircle)`
  font-size: 2rem;
  cursor: pointer;
`
const StyledAlphafly = styled.div`
  min-height: 100vh;
  background-color: white;
`

const AlphaImageDiv = styled.div`
  width: 1000px;
  margin: auto;
  position: relative;
`
const AlphaflyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 1rem;

  @media (max-width: 640px) {
    column-gap: 0px;
    row-gap: 0px
  }
`

const OwnColorShowDiv = styled.div`
  padding-bottom: 80px;
  display: ${props => props.mayishow === 'true' ? 'block' : 'none' }
`

const AlphaflyA = styled.a`
  position: absolute;
  font-size: 20px;
  color: #B7013B;
  right: 128px;
  top: 352px;
  scroll-behavior: smooth;
`

// HOMEPAGE EXPORT
export {HomeDiv,StyledNav,StyledLogo,StyledLink,StyledMain,StyledMainImg,StyledMainImgDiv,StyledSpanFirst,StyledSpanSecond,StyledBag,StyledBagSpan,StyledInputSearch,StyledInputSearchDiv,StyledForSearch,Collection,StyledHamburger,NavbarWrap,HamburgerWrap} // for navbar
export {StyledCarousel,StyledCarouselItem,StyledCarouselItemImg,StyledCarouselItemImgDiv,StyledCarouselItemDiv}//for carousel

//SHOP PAGE EXPORT
export {StyledContainer,Aside,Section,StyledButton,StyledFilter,StyledGridDiv,StyledGridDivElement,StyledGridDivElementImg,StyledGridDivDesc,StyledFilterBtn,StyledHeader2,StyledShopUl,AddToCartBtn,StyledHeadings}

export {StyledGridForPages}

export {CartDiv,StyledInput,StyledProductDelete}

export{StyledAlphafly,AlphaImageDiv,AlphaflyGrid,OwnColorShowDiv,AlphaflyA}