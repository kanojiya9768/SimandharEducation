import React from 'react'
import Image from 'next/image';

const VisionSection = ({aboutUsData}) => {
    return (
        <section>
            <div className='three-box-grid'>
                {
                    
                    aboutUsData.map(setData => (
                        <div className='grid-box'>
                            <Image loading='lazy' src={setData.path}fill={true} sizes='100vw' alt={setData.title} className='resp-img' />
                            <h3 className='heading04'>{setData.title}</h3>
                            <p>{setData.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default VisionSection;