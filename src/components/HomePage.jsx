import React from 'react'
import {HomeDiv,StyledMain,StyledMainImg,StyledMainImgDiv,StyledSpanFirst,StyledSpanSecond,Collection} from './StyledComponents'
import MyCarousel from './MyCarousel'
import {PiSneakerMoveFill} from 'react-icons/pi'


const HomePage = () => {
  return (
    <HomeDiv >
      <StyledMain>
        <StyledSpanFirst>NIKE SHOES</StyledSpanFirst>
        <StyledMainImgDiv>
          <StyledMainImg src='./e-commerce-app/img/alphaflyLending.png' alt="" />
        </StyledMainImgDiv>
        <StyledSpanSecond>COLLECTIONS</StyledSpanSecond>
        <Collection to='/alphafly'>
          Browse new collection <PiSneakerMoveFill/>
        </Collection>
      </StyledMain>
      <section>
        <MyCarousel  />
      </section>
    </HomeDiv>
  )
}

export default HomePage