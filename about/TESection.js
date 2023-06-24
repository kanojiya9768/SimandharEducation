import React from 'react'
import Image from 'next/image'

const TESection = ({ aboutUsData }) => {
    return (
        <section className='transform-educ'>
            <div className='education-row'>
                <div className="heading02">
                    {aboutUsData.mainheading}
                </div>
                <div className="heading05">
                    
                    {aboutUsData.name}
                </div>
            </div>
            <div className='TE-flex container-l'>
                <div className='left-box'>
                    <h1 className='heading02'>  {aboutUsData.title}</h1>
                    <p className='m-block'>{aboutUsData.description}</p>
                    <div>
                        <p>{aboutUsData.listheading}</p>
                        <ul>
                            {
                                aboutUsData.lists.map((item,index) => {      
                                    // console.log(item)                           
                                    return (
                                        <>
                                            <li key={index}>{item.item}</li>                                         
                                        </>)
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className='right-box'>
                    <Image loading='lazy' src={aboutUsData.image}fill={true} sizes='100vw'  className='resp-img' alt={aboutUsData.alt} />
                </div>
            </div>

        </section>
    )
}

export default TESection