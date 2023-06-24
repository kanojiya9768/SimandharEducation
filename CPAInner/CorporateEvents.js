import React from 'react'
import Image from 'next/image'
import _ from 'lodash'

const CorporateEvents = ({ corporateEventData }) => {
    let lists = _.get(corporateEventData,"lists",[])
    return (
        <>
            <section className="section corporateSection">
                <div className="help-container">
                    <div className='mainheading text-center'>
                        <h1 className='heading02'>Corporate Events</h1>
                    </div>
                    <div>
                        <p className='pr-color text-center mt-4'>{corporateEventData.description}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="gridBox">
                        {
                           lists.map((data , index) => {
                                
                                return (
                                    <div className="box" key={index}>
                                        <Image loading='lazy' src={data.image} alt="CPA Exam in India"fill={true} sizes='100vw'  className='resp-img' />
                                        <div className="overlay">
                                            <a href={data.path} target='_blank' className="btn maroon-btn maroon-arrow-btn">View Post</a>
                                        </div>
                                    </div>
                                )
                            })
                        }


                        {/* <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate2.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6695311083189735425" target='_blank' className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate3.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6695714250670919681" target='_blank' className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate4.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6685462912884191233/" target='_blank' className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate5.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/posts/simandhar-education_session-cpa-uscpa-activity-6675074247783796736-5MFf/" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate6.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/posts/simandhar-education_session-dataanalytics-cpa-activity-6675356550338625536-FanH" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate7.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/posts/simandhar-education_session-dataanalytics-cpa-activity-6675356550338625536-FanH" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate8.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/posts/simandhar-education_cia-significance-dataanalytics-activity-6672459075156094976-dt6z" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate9.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/posts/simandhar-education_covid19-growth-motivation-activity-6669595205957771264-NdR9/" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate10.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/posts/nidhi-agarwal-5442451_leadershipsession-activity-6690842061945487360-lxZR/" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate11.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6715601311401963520" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div>

                        <div className="box">
                            <Image loading='lazy' src="/img/cpa-inner/Corporate12.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            <div className="overlay">
                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6717690762479452160" className="btn maroon-btn maroon-arrow-btn">View Post</a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default CorporateEvents