import React from 'react'
import {StyledCarouselItem,StyledCarouselItemImg,StyledCarouselItemImgDiv,StyledCarouselItemDiv} from './StyledComponents'

const CarouselItem = ({shoeName,src,price}) => {

  return (
    <StyledCarouselItem>
        <h4 style={{textAlign: 'end'}}>{shoeName}</h4>
        <div style={{display: 'flex'}}>
        <StyledCarouselItemImgDiv>
        <StyledCarouselItemImg src={src} alt='resim' />
      </StyledCarouselItemImgDiv>
      <StyledCarouselItemDiv>
        <p>★★★★★</p>
        <p>${price}</p>

      </StyledCarouselItemDiv>
        </div>
      
    </StyledCarouselItem>
  )
}

export default CarouselItem