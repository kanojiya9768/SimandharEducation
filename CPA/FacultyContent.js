import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const FacultyContent = ({ facultyData }) => {

    
    return (
        <>
            <section className="facultySection">
                <div className="container">
                    <h1 className="heading02 text-center">Our Faculty</h1>
                    <h2 className='heading03 text-center'>Know about our faculty</h2>

                    <div className="facultyContainer">

                        {
                            facultyData.members.map((data, index) => {
                                // console.log("faclty data", data)
                                return (
                                    <div className="box text-center" key={index}>
                                        <div className="facultyImg">
                                            <Image loading='lazy' src={data.image} alt={data.alt}fill={true} sizes='100vw'  className='resp-img' />
                                        </div>
                                        <div className="title">
                                            {data.name}
                                            <Link href={data.link}>
                                                <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="caption">
                                               {data.post}
                                            </div>
                                            <div className="caption">
                                                {data.course}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="box text-center">
                            <div className="facultyImg">

                                <Image loading='lazy' src="/img/cpnAlu/faculty2.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Suraj Lakhotia
                                <Link href="https://www.linkedin.com/in/surajlakhotia/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                </Link>

                            </div>
                            <div className="content">
                                <div className="caption">
                                    Senior Instructor
                                </div>
                                <div className="caption">
                                    CA (AIR 2), CIMA (UK)
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty3.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Karan B Nathwani
                                <Link href="https://www.linkedin.com/in/karan-nathwani-ca-cisa-a9bb063a/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Senior Instructor
                                </div>
                                <div className="caption">
                                    CA,IIM(I),CISA & CCSK
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty4.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Amit Kumar Gupta
                                <Link href="https://www.linkedin.com/in/amit-kumar-gupta-8937a21b/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Instructor
                                </div>
                                <div className="caption">
                                    ACA, ACS, CMA
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty5.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Heena Vithlani
                                <Link href="https://www.linkedin.com/in/heena-vithlani-91b71b36/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Instructor
                                </div>
                                <div className="caption">
                                    B.Com, CA, CPA USA
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty6.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Dhanushree Kshirsagar
                                <Link href="https://www.linkedin.com/in/dhanashree-k-61a71130/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Instructor
                                </div>
                                <div className="caption">
                                    B.Com, CA, CPA USA
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty7.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Surinder Kaur
                                <Link href="https://www.linkedin.com/in/surinder-kaur-us-cpa-73a0a866/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Instructor
                                </div>
                                <div className="caption">
                                    B.Com, CPA USA
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty8.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Sudha Murthy
                                <Link href="https://www.linkedin.com/in/sudha-murthy-5088882b">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw' 
                                        className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Lead Instructor
                                </div>
                                <div className="caption">
                                    CA, AUD & CIA
                                </div>
                            </div>
                        </div>
                        <div className="box text-center">
                            <div className="facultyImg">
                                <Image loading='lazy' src="/img/cpnAlu/faculty9.webp" alt=""fill={true} sizes='100vw'  className='resp-img' />
                            </div>
                            <div className="title">
                                Geetanjali Garg Singla
                                <Link href="https://www.linkedin.com/in/geetanjali-ca-cpa-1521a219/">
                                    <Image loading='lazy' src="/img/cpnAlu/linkedin.webp" alt=""fill={true} sizes='100vw' 
                                        className='resp-img' />
                                </Link>
                            </div>
                            <div className="content">
                                <div className="caption">
                                    Lead Instructor
                                </div>
                                <div className="caption">
                                    US CMA-US CPA, CA(ICAI)
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>


        </>
    )
}

export default FacultyContent;