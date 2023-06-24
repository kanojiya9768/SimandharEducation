import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const CandidateLogin = () => {
    return (
        <div>
            <section className='job_candidatelogin-section'>
                <div className='can-login-leftbox'>
                <Image
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
                    <h3 className='heading03'>Login</h3>
                    <p>Don't have an account? <span><Link className="heading04" href="/signup">Sign Up</Link></span></p>
                    </div>
                    
                    <form action="" className='canloginform '>
                        <div className="input_field ">
                            <input type="text" name="" id="" className='w-100' placeholder='Enter Your Email ID / Username' />
                        </div>
                        <div className="input_field mt-4">
                            <input type="password" name="" className='w-100' id="" placeholder='Enter Password' />
                            <span className='pass-hideshow'>Show</span>
                        </div>
                        <Link className="forgot-pass" href="/signup">Forgot Password?</Link>
                    </form>
                    <div className="jcloginBtn mt-4">
                            <a href="javascript:;" className='w-100 text-center btn maroon-btn maroon-btn-arrow'>Login</a>
                        </div>
                       <div className='login-or text-center'> <span className=' '>Or</span></div>
                    {/* <div className='jobsignup-google'>
                    <Link href="/shoppingCart"><Image loading='lazy' src="/img/google-login.png" alt=""fill={true} sizes='100vw'  className='resp-img text-center' /></Link>
                    </div> */}
                </div>
            </section>

        </div>
    )
}

export default CandidateLogin
