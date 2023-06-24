import React from 'react'
import Image from 'next/image'

const AlumniCard = ({AlumniCardData,companyName}) => {
    return (
        <>
            {
                AlumniCardData.map((data,index) => {
                    return (
                        < div className="box text-center" key={index} >
                            <div className="achiverImg">
                                <Image loading='lazy' src={data.img} alt={data.name}fill={true} sizes='100vw' className='resp-img alumni-img' />
                            </div>
                            <div className="title">
                                {data.name}
                            </div>
                            <div className="discription">
                                {data.description}
                            </div>

                            {
                                companyName ?
                                    <p>{data.company}</p> : " "
                            }
                        </div >
                    )
                })
            }

        </>
    )
}

export default AlumniCard