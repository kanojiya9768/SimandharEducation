import React from 'react'
import Image from 'next/image'
import _ from 'lodash'


const BannerSection = ({ bannerData, showData, showTitle,showImage }) => {

  let lists = _.get(bannerData,"lists",[])

  // export default function bannerSection() {
  return (
    <>
      <section className="program-banner ">
        <div className="banenr-left resp-img-box">
          {
            showImage ? 
            <Image loading='lazy' src={bannerData.img} alt="CPA canada" fill={true} sizes='100vw'  className='resp-img' /> : ""
          }

          <iframe src={bannerData.path} allowFullscreen='true'></iframe>
        </div>
        <div className="progam-info">
          <h1 className="heading02">{bannerData.mainHeding}</h1>
          {/* {showTitle ?
            <p className='title02'>{bannerData.para}</p> : ""
          } */}
            {
              showData ? (<h3 className='title01'>{bannerData.description} </h3>) : (" ")
            }
          <ul>
            {
              lists.map(((item ,index)=> {
                return <li key={index}>{item.list}</li>
              }))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default BannerSection
