import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import _ from 'lodash'


const corporateWebinars = ({ corporateEventData }) => {
    const [file, setFile] = useState(null)

    let lists = _.get(corporateEventData,"lists", [])
    return (
        <>
            <section className='corporate-webinar section'>
                <div className="container">
                    <div>
                        <h2 className='heading05'>Watch Recent Webinars</h2>
                    </div>
                    <div className="gridRow">
                        {
                            lists.map((data, index) => {
                                // console.log('here is data', data)
                                return (
                                    <div className="box" key={index} onClick={() => setFile(data)}>
                                        <div className="content">
                                            <div className="content_img">
                                                <Image loading='lazy' src={data.thumbnail} alt="CPA Exam in India"fill={true} sizes='100vw' className='resp-img' />
                                                <div className="overlay text-center">
                                                    <p className="overlay_img">
                                                        <Image loading='lazy' src="/img/cpa-inner/videoIcon.png" alt="CPA Exam in India"fill={true} sizes='100vw' className='resp-img' />Watch Video</p>
                                                </div>
                                            </div>
                                            <div className="content_txt">
                                                <p className="title01">{data.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        < div className='popup' onClick={() => setFile(null)} style={{ display: file ? 'block' : 'none' }}>
                            <span className='close-pp' onClick={() => setFile(null)}>
                                <Image loading='lazy' src="/img/white_cross.png" alt="white cross"fill={true} sizes='100vw' className='resp-img' /></span>
                                {file && <iframe src={`${file?.path}`} ></iframe>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default corporateWebinars