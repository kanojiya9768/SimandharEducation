import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CandidateSignUp = () => {
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
                    <h2 className='heading02'>One Click
                        <br/>Closer to Your<br/>
                        Dream Job</h2>
                </div>
                <div className='can-login-righttbox'>
                    <div className='text-center'>
                        <h3 className='heading03'>Sign Up</h3>
                        <p>Already have an account?<span><Link className="heading04" href="/signup"> Log in</Link></span></p>
                    </div>

                    <form action="" className='canloginform '>
                        <div className="input_field mt-4">
                            <input type="text" name="" id="" className='w-100' placeholder='Enter Your Full Name' />
                        </div>
                        <div className="input_field mt-4">
                            <input type="text" name="" id="" className='w-100' placeholder='Enter Email Address' />
                        </div>
                        <div className="input_field mt-4">
                            <input type="password" name="" className='w-100' id="" placeholder='Enter Password' />
                            <span className='pass-hideshow'>Show</span>
                        </div>
                        <div className='input_field mt-2 radiobtn-box'>
                            <input type="radio"/>
                            <label htmlFor="">I agree to the <span>Terms and Conditions.</span></label>
                        </div>
                    </form>
                    <div className="jcloginBtn mt-4">
                        <a href="javascript:;" className='w-100 text-center btn maroon-btn maroon-btn-arrow'>Sign in</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CandidateSignUp
