import React from 'react'
import Image from 'next/image'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { urlConstants as urlConstant } from '../constants/urlConstants'

const registrationForm = ({ formName }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter()
    const buttonRef = useRef()

    //Phone number validation
    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        course: "",
        MainSource: "direct traffic",
        formName: { formName }
    })

    const { name, email, number, course, MainSource } = values;
    const onFormSubmit = async (e) => {
        try {

            let data = JSON.stringify({
                "emailAddress": email,
                "firstName": name,
                "phone": number,
                "mxCourse": course,
                "mxMainsource": MainSource,
                "mxLeadSubSource": formName,


            });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: urlConstant.commonForm,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            // console.log("data to our Database", data);
            await axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
            buttonRef.current.click()
            router.push("/thankyou")
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <section className='register-counseling' id='register'>
                <div className="container-l">
                    {/* <h3 className='heading03'>Want to know about the US CPA and US CMA scope in India?</h3>
                            <h4 className="heading04">Register now to get free counseling for US CPA and US CMA in India</h4> */}
                    <div className='register-container'>
                        <div className="left-box">
                            <h3 className="heading03">Main Office Location</h3>
                            <div className='contact-box'>
                                <div className='flex-row'>
                                    <div className='img-box'>
                                        <Image loading='lazy' src="/img/pin.png" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                                    </div>
                                    <div>
                                        <p>Plot Number: 39/A Dr.Subba Rao Colony, Picket, Secunderabad, Telangana 500026</p>
                                    </div>
                                </div>
                                <div className='flex-row'>
                                    <div className='img-box'><Image loading='lazy' src="/img/telephone.png" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                                    </div>
                                    <div><Link href="tel:+91-7780273388"><p>+91-7780273388</p></Link></div>
                                </div>
                                <div className='flex-row'>
                                    <div className='img-box'><Image loading='lazy' src="/img/email1.png" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                                    </div>
                                    <div>
                                        <Link href="mailto:info@simandhareducation.com"><p>info@simandhareducation.com</p></Link>
                                    </div>
                                </div>
                                <div className='flex-row'>
                                    <div className='img-box'><Image loading='lazy' src="/img/web.png" alt="banner image"fill={true} sizes='100vw' className='resp-img' />
                                    </div>
                                    <div>
                                        <p>  <a href="https://simandhareducation.com/" target="_blank" >www.simandhareducation.com  </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <h3 className="heading03">Contact Details</h3>
                            <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                            <div className="form">
                                <form className='resource-form' method='post' onSubmit={handleSubmit(onFormSubmit)}>
                                    <div className="input-text input-box">
                                        {/* className="res-text" */}
                                        <input id="enquiry" name="enquiry" type="text" placeholder="Enter Your Name"  minLength="2" value={name}
                                            {...register("name", {
                                                required: "Name is required",
                                                pattern: {
                                                    value: /^[a-zA-Z ]*$/,
                                                    message: "Enter letters only"
                                                },
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.name ? 'error-border' : null} />
                                        {errors.name && <span className='error-message'>{errors.name?.message}</span>}

                                    </div>

                                    <div className="input-text input-box">
                                        <input id="enquiry" name="email" type="text" placeholder="Enter Your Email Address"
                                            {...register("email", {
                                                required: "Email Id is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                    message: "Enter valid email id"
                                                },
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.email ? 'error-border' : null}

                                            value={email}
                                        />
                                        {errors.email && <span className='error-message'>{errors.email?.message}</span>}
                                    </div>

                                    <div className='input-box'>
                                        <input id="enquiry" name="enquiry" type="tel" placeholder="Enter Your Mobile Number" minLength="10" maxLength="15"
                                            {...register("number",
                                                {
                                                    required: "Number is required",
                                                    pattern: {
                                                        value: /^[5-9]\d{9,14}/,
                                                        message: "Enter Valid Number"
                                                    },
                                                    minLength: {
                                                        value: 10,
                                                        message: "Enter Min 10 Number"
                                                    },
                                                    maxLength: {
                                                        value: 15,
                                                        message: "Enter Max 15 Number"
                                                    },
                                                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                                })}
                                            className={errors.number ? 'error-border' : null}
                                            //onChange={handleChange}
                                            value={number}
                                        />
                                        {errors.number && <span className='error-message'>{errors.number?.message}</span>}
                                    </div>

                                    <div className="input-box custom-select select-field">
                                        <select id="select-course" name="course" placeholder="Select Course" {...register("course",
                                            {
                                                required: "Select Course",
                                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                            })}
                                            className={errors.course ? 'error-border' : null}

                                            value={course}>
                                            <option value="" selected="">Select Course</option>
                                            <option value="US CPA">US CPA</option>
                                            <option value="US CMA">US CMA</option>
                                            <option value="EA">EA</option>
                                            <option value="ACCA">ACCA</option>
                                            <option value="CIA">CIA</option>
                                            <option value="IFRS">IFRS</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Simandhar Saamarth">Simandhar Saamarth</option>
                                        </select>
                                        {errors.course && <span className='error-message'>{errors.course?.message}</span>}
                                    </div>
                                    <div className='tab-box resource-btn' >
                                        <button className="btn maroon-btn maroon-btn-arrow mt-35" ref={buttonRef}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default registrationForm