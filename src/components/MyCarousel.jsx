import React from 'react'
import {StyledCarousel} from './StyledComponents'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from './CarouselItem';

const MyCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        dots: false,
        arrows: false
      }
    }]
    



  };
  return (
    <div style={{padding: '20px 50px'}}>
    <StyledCarousel {...settings}>
      <CarouselItem shoeName="Air Force 1 '07" src='./img/air-force-1.png' price="110" />
      <CarouselItem shoeName="Air Jordan 1 Low" src='./img/air-jordan-1.png' price="110" />
      <CarouselItem shoeName="Air Jordan 13 Retro " src='./img/air-jordan-13.png' price="200" />
      <CarouselItem shoeName="Air Max 1" src='./img/air-max-1-mens-slides.png' price="75" />
      <CarouselItem shoeName="Air Zoom Alphafly 2" src='./img/alphafly-2-racing-.png' price="275" />
      <CarouselItem shoeName="Blazer Mid 77" src='./img/blazer-mid-77.png' price="110" />
      <CarouselItem shoeName="Calm Slides" src='./img/calm-mens-slides.png' price="50" />
      <CarouselItem shoeName="Freak 4 'Greek Coastline'" src='./img/freak-4-greek-coastline.png' price="130" />
      <CarouselItem shoeName="Nike Go Flyease" src='./img/go-flyease.png' price="125" />
      <CarouselItem shoeName="Jordan Play" src='./img/jordan-play-mens-slides-.png' price="40" />
      <CarouselItem shoeName="LeBron XX" src='./img/lebron-xx.png' price="200" />
      <CarouselItem shoeName="Luka 1" src='./img/luka-1.png' price="110" />
      <CarouselItem shoeName="Nike Pegasus 40" src='./img/pegasus-40-mens-running.png' price="140" />
      <CarouselItem shoeName='Sabrina 1 "Spark"' src='./img/sabrina-1.png' price="130" />
      <CarouselItem shoeName="Nike Tempo" src='./img/tempo-mens-running.png' price="200" />
    </StyledCarousel>
    </div>
  )
}

export default MyCarousel