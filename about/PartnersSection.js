import React from 'react'
import Image from 'next/image'
const PartnersSection = ({aboutUsData}) => {
    
    return (
        <section className='partners-section'>

            <h3 className='heading02 text-center'>OUR OFFICIAL PARTNERS</h3>
            <div className='container-s'>
            <div className='partners-grid'>
                {
                    aboutUsData.list.map(images =>(
                        <div className='grid-box'><Image loading='lazy' src={images.path}fill={true} sizes='100vw' className='resp-img' alt={images.alt} /></div>
                        ))
                }
            </div>
            </div>
        </section>
    )
}

export default PartnersSection  