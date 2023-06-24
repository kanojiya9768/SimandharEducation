import Image from 'next/image'
import React, { useEffect } from 'react'
import Slider from 'react-slick'
import _ from 'lodash'
import { memo } from 'react'



const bannerSection = ({ showPopup, indexData }) => {

  var bannerSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  let banners = _.get(indexData,"banners",[])



  return (
    <>
      <section className="banner-section flex">
        <div className="right-box">
          <Slider {...bannerSlider}>
            {
              banners.map((data, index) => {
               let image1 = _.get(data,"desktopBanner")
               let image2 = _.get(data,"mobileBanner")
                return (
                  <div className='banner-slider' key={index}>
                    <div className="banner-inner-slider">
                      <div className="banner-content">
                        <Image loading='lazy' src={image1}    fill  sizes='(max-width: 1920px) 100vw' className='resp-img desktop' alt={data.name} />
                        <Image loading='lazy' src={image2}     fill  sizes='(max-width: 768px) 100vw' className='resp-img mobile' alt={data.name} />
                      </div>
                    </div>
                  </div>
                )
              })
            }




          </Slider>
        </div>

      </section>

    </>
  )
}


export default memo(bannerSection);