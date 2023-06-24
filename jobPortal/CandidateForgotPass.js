import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { FaAngleLeft } from 'react-icons/fa';


const CandidateForgotPass = () => {
    return (
        <>
            <section className='job_candidatelogin-section'>
                <div className='can-login-leftbox'>
                <Image loading='lazy' 
                    src="/img/can_login_banner.png"
                   fill={true} sizes='100vw' 
                    className="resp-img mobile "
                    alt="img"
                  />
                    <h2 className='heading02'>Step into
                        <br /> Your  <br />
                        Dream Job</h2>
                </div>
                <div className='can-login-righttbox'>
                    <div className='text-center'>
                        <h3 className='heading03'>Forgot password?</h3>
                        <p>Please enter you email address and we will mail you a link to reset your password.</p>
                    </div>

                    <form action="" className='canloginform '>
                        <div className="input_field ">
                            <input type="text" name="" id="" className='w-100' placeholder='Enter Your Email Address' />
                        </div>
                    </form>
                    <div className="jcloginBtn mt-4">
                        <a href="javascript:;" className='w-100 text-center btn maroon-btn maroon-btn-arrow'>Submit</a>
                    </div>
                    <p className='text-center'> <FaAngleLeft/><FaAngleLeft/>  Back to <span className='ml-2'><Link className="heading04" href="/signup"> Log in</Link></span></p>
                </div>
            </section>
        </>
    )
}

export default CandidateForgotPass
