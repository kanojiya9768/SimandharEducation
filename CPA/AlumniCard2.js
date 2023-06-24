import React from 'react'
import Image from "next/legacy/image"

const AlumniCard = ({ companyName, AlumniCardData }) => {
    return (
        <>
            {
                AlumniCardData.map((data,index) => {
                    return (
                        <>
                            <div className="box text-center" key={index}>
                                <div className="achiverImg">
                                    <Image loading='lazy' src={data.img} alt={data.name}fill={true} sizes='100vw' className='resp-img' />
                                </div>
                                <div className="title">
                                    {data.name}
                                </div>
                                <div className="discription">
                                    {data.description}
                                </div>
                                <div className="company">
                                    <div className="caption">
                                        Placed at
                                    </div>
                                    <div className="icon">
                                        <Image loading='lazy' src="/img/cpnAlu/company1.webp" alt="company logo"fill={true} sizes='100vw' className='resp-img' />
                                    </div>
                                </div>
                                <div className="youtube">
                                    <Image loading='lazy' src="/img/cpnAlu/youtube.webp" alt="Youtube Icon"fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                           
                        </>

                    )
                })
            }
        </>
    )
}

export default AlumniCard