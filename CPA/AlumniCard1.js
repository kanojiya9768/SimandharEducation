import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AlumniCard1 = ({ AlumniCardData }) => {

    return (
        <>
            {
                AlumniCardData.map((data, index) => {
                    return (
                        <div className="box text-center" key={index}>
                            <div className="achiverImg">
                                <Image loading='lazy' src={data.img} alt={data.name}fill={true} sizes='100vw' className='resp-img alumni-img' />
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
                                    <Image loading='lazy' src={data.company} alt=""fill={true} sizes='100vw' className='resp-img' />
                                </div>
                            </div>
                            <div className="youtube">
                                <Link href={data.path} target='_blank'> <Image loading='lazy' src={data.icon} alt=""fill={true} sizes='100vw' className='resp-img ' /></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AlumniCard1