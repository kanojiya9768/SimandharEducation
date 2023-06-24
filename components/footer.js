import React from 'react'
import Image from 'next/image'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'

export default function footer() {
  return (
    <>
      <footer className='footer' id="footer">
        <div className='ft-top-row'>
          <div className='hf-container footer_row'>
            <div className='Footer_box1 flex01'>
              <div className='logo_img  resp-img-box'>
                <Image loading='lazy' src='/img/logo.png'  fill={true} sizes='100vw' className='resp-img' alt='Simnadhar logo'></Image>
              </div>
              <div className='social_media'>
                <a href="https://www.facebook.com/SimandharEducationCPACMA/" target="_blank"><i><BsFacebook /></i></a>
                <a href="https://twitter.com/simandharedu?lang=en" target="_blank"><i><BsTwitter /></i></a>
                <a href="https://www.instagram.com/simandhar.cpa.cma.ea.acca/" target="_blank"> <i><BsInstagram /></i></a>
                <a href="https://www.youtube.com/channel/UCNtcsDN1WhnsdS_m2wY-Z-g" target="_blank"><i><BsYoutube /></i></a>
                <a href="https://in.linkedin.com/company/simandhar-education" target="_blank"> <i><BsLinkedin /></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='ft-bottom-row'>
          <div className='hf-container'>
            <div className='footer_grid'>

              <div className='footer_box a'>
                <p className='footer_para'>An award-winning institute that believes in transforming lives. Simandhar Education aims to upskill you and create a new-age approach for success.</p>
              </div>
              <div className='footer_box b'>
                <h4 className='footer_title'>Our Courses <span><i>< IoChevronForward /></i></span> </h4>
                <ul>
                  <li ><Link href="/course/cpa" className='title01'> US Certified Public Accountant</Link></li>
                  <li><Link href="/course/cma" className='title01'>US Certified Management Accountant</Link></li>
                  <li><Link href="/course/ea" className='title01'>Enrolled Agent</Link></li>
                  <li><Link href="/acca" className='title01'>ACCA</Link></li>
                  <li><Link href="/course/cia" className='title01'>Certified Internal Auditor</Link></li>
                  <li><Link href="/course/ifrs" className='title01'>IFRS</Link></li>
                  <li><Link href="/data-analytics" className='title01'>Data Analytics</Link></li>
                  <li><Link href="/saamarth" className='title01'>Simandhar Saamarth Program</Link></li>
                </ul>
              </div>
              <div className='footer_box c'>
                <div>
                  <h4 className='footer_title'><Link href="/webinars">Webinars</Link>  <span><i>< IoChevronForward /></i></span> </h4>
                  {/* <ul>
                    <li><Link href="/us-cpa" className='title01'>US CPA</Link></li>
                    <li><Link href="/us-cma" className='title01'> US CMA </Link></li>
                    <li><Link href="ea/" className='title01'>EA</Link></li>
                  </ul> */}
                </div>
                <div>
                  <h4 className='footer_title'><Link href="/blogs/category/student-corner"> Student Corner   </Link><span><i>< IoChevronForward /></i></span> </h4>

                  <h4 className='footer_title'><Link href="/testimonial">Testimonials</Link>   <span><i>< IoChevronForward /></i></span> </h4>
                 
                  <h4 className='footer_title'> <Link href='/testimonial-videos'>Testimonials Videos</Link><span><i>< IoChevronForward /></i></span> </h4>

                </div>
 
              </div>
              <div className='footer_box d'>
                <div>
                  <h4 className='footer_title'>Corporate   <span><i>< IoChevronForward /></i></span> </h4>
                  <ul>
                    <Link href="/corporate-journey"> <li className='title01'>Corporate Journey</li></Link>
                    <Link href="/corporate-events"> <li className='title01'> Corporate Events </li></Link>
                    <Link href="/simandharTieUps"> <li className='title01'>Corporate Tie Ups</li></Link>
                  </ul>
                </div>
                <div> <h4 className='footer_title'><Link href="/blogs">Blogs</Link>   <span><i>< IoChevronForward /></i></span> </h4>
                  <h4 className='footer_title'><Link href="/careers">Career</Link>    <span><i>< IoChevronForward /></i></span> </h4>
                </div>

              </div>
              <div className='footer_box e'>
                <div>
                  {/* <Link href="/signup"> <h4 className='footer_title'>User Registration / Sign-up    <span><i>< IoChevronForward /></i></span> </h4></Link> */}
                  <ul>

                    {/* <Link href="/login"> <li className='title01'>User Login</li></Link> */}
                    {/* <li className='title01'>Corporate Tie Ups</li> */}
                  </ul></div>
                <div> <h4 className='footer_title'><Link href="/about-simandhar"> About Us    <span><i>< IoChevronForward /></i></span> </Link></h4>
                  <h4 className='footer_title'><Link href="/contact-simandhar">Contact Us</Link>  <span><i>< IoChevronForward /></i></span> </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <h3 className='copyright'>Copyright © 2023 SIMANDHAR EDUCATION LLP - All rights reserved</h3>
        </div>

      </footer>
    </>
  )
}

