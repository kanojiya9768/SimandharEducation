import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CandidateResetPass = () => {
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
                        <h3 className='heading03'>Choose New Password</h3>
                        <p>Almost Done. Enter your new password and you’re all set.</p>
                    </div>

                    <form action="" className='canloginform '>
                        <div className="input_field mt-4">
                            <input type="password" name="" id="" className='w-100' placeholder='Enter New Password' />
                            <span className='pass-hideshow'>Show</span>
                        </div>
                        <div className="input_field mt-4">
                            <input type="password" name="" id="" className='w-100' placeholder='Confirm New Password' />
                            <span className='pass-hideshow'>Show</span>
                        </div>
                    </form>
                    <div className="jcloginBtn mt-4">
                        <a href="javascript:;" className='w-100 text-center btn maroon-btn maroon-btn-arrow'>Reset password</a>
                    </div>
                </div>
            </section>
 </>
  )
}

export default CandidateResetPass
