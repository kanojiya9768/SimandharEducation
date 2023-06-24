import React,{useState} from 'react'
import Image from 'next/image'
const WebinarCard = () => {
    const [isShow, setShow] = useState(false);
    const [buttonText, setButtonText] = useState(false);
    const showContent = () => {
        setShow(!isShow);
        setButtonText(!buttonText);
    };
    // const [isShow1, setShow1] = useState(false);
    // const [buttonText1, setButtonText1] = useState(false);
    // const showContent1 = () => {
    //     setShow1(!isShow1);
    //     setButtonText1(!buttonText1);
    // };
    return (
        <>
            <section className='webinar-card'>
              <a href="https://us02web.zoom.us/webinar/register/4216865555445/WN_1qFU6SDOSHi4IRS5EVDtog" target='_blank'>  <Image loading='lazy' src='/img/CPA-Webinar-Banner.webp' alt="CPA Webinar"fill={true} sizes='100vw' className='resp-img' /></a>
                <div className={'container' + " " +(isShow ? "active" : "")}>
                    <div className="content text-center">
                        <h3 className="heading03">Certified Public Accountant (CPA)</h3>
                        <p>Certified Public Accountant (CPA) is a designation given by AICPA to individuals who have completed the Uniform CPA exam, met the required and relevant criteria. The CPA designation enforces high professional standards in the field of accounting.</p>
                    </div>
                    <div className="grid-section text-center">
                        <h3 className="heading03">Benefits of Enrolling in US CPA Course</h3>
                        <div className="grid">
                            <div className="gird-box">
                                <Image loading='lazy' src="/img/earth.png" alt="Global Recognition" />
                                <p>Global Recognition</p>
                            </div>
                            <div className="gird-box">
                                <Image loading='lazy' src="/img/visa.png" alt="Migration with Ease" />
                                <p>Migration with Ease</p>
                            </div>
                            <div className="gird-box">
                                <Image loading='lazy' src="/img/stats.png" alt="Hikes in Salary" />
                                <p>Hikes in Salary</p>
                            </div>
                            <div className="gird-box">
                                <Image loading='lazy' src="/img/success.png" alt="Huge Career Opportunities" />
                                <p>Huge Career Opportunities</p>
                            </div>
                            <div className="gird-box">
                                <Image loading='lazy' src="/img/badge.png" alt="Highly-acclaimed Certification" />
                                <p>Highly-acclaimed Certification</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center">                    
                    <p className="btn maroon-btn maroon-btn-arrow"
                        onClick={showContent}  >
                        {buttonText ? "View Less " : "View More"}
                    </p>                   
                </div>
            </section>
            {/* <section className='webinar-card mt-6'>
                <a href="https://us02web.zoom.us/webinar/register/8516860325464/WN_KkNJNfacRgWfkRtjQ7LQOw#/registration" target='_blank'> <Image loading='lazy' src='/img/EAWebinarBanner.webp' alt="CPA Webinar"fill={true} sizes='100vw' className='resp-img' /></a>
                <div className={'container' + " " +(isShow1 ? "active" : "")}>
                    <div className="content text-center">
                        <h3 className="heading03">Enrolled Agent (EA)</h3>
                        <p>The EA Exam, officially known as the Special Enrollment Examination (SEE), is a three-part exam administered by Prometric on behalf of the Internal Revenue Service. Each part is taken as a separate 100 question exam, and you will have 3.5 hours to answer all questions for that part. The IRS Special Enrollment Exam (SEE) is the easiest of the exams that give you unlimited representation rights to practice before the IRS.</p>
                    </div>
                </div>
                <div className="text-center">                   
                    <a
                        className="btn maroon-btn maroon-arrow-btn"
                        onClick={showContent1}
                    >
                        {buttonText1 ? "View Less " : "View More"}
                    </a>                    
                </div>
            </section> */}
        </>
    )
}

export default WebinarCard