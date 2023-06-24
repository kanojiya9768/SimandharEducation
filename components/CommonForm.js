import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import _ from 'lodash'
import { urlConstants as urlConstant } from '../constants/urlConstants';
import indexData from '../database/index.json'
import Head from 'next/head';

let cpa = _.get(indexData, "SimandharCPA.form")
let cma = _.get(indexData, "SimandharCMA.form")
let cia = _.get(indexData, "SimandharCIA.form")
let ea = _.get(indexData, "SimandharEA.form")

const CommonForm = ({ isactive, showPopup, showTitle, showcity, showcourse, indexData, formName, showDownloadMCQ, showCtc, position, showRadio, showRadioStatus, showPara, shownoticeperiod, showposition, showLastCompany, showResume, showIcon, Qualification }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // For Download MCQ on section
    const [selectedMcq, setSelectedMcq] = useState('');
    const handleSelectChange = (event) => {
        setSelectedMcq(event.target.value);
    };
    const handleDownload = () => {
        // Logic to download PDF based on selectedOption
        // For example, fetch the PDF file from a server and initiate download
        if (selectedMcq === 'CPA') {
            window.open(cpa);
        } else if (selectedMcq === 'CMA') {
            window.open(cma);

        } else if (selectedMcq === 'CIA') {
            window.open(cia);

        } else if (selectedMcq === 'EA') {
            window.open(ea);
        }
    };


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter()
    const buttonRef = useRef()

    //Phone number validation
    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        course: "",
        city: "",
        // position: { position },
        noticeperiod: "",
        lastCompany: "",
        ctc: "",
        resume: "",
        formName: { formName },
        MainSource: "direct traffic",
        radioStatus: "",
        qualification: "",
        existingStudent: { selectedOption }
    })

    // console.log(values)
    const { name, email, number, city, course, noticeperiod, lastCompany, resume, ctc, radioStatus, existingStudent, MainSource, qualification } = values;
    const [success, setSuccess] = useState(false);

    const [hideBtn, setHideBtn] = useState(false);
    const hideDwnBtn = () => { setHideBtn(true); router.push("/thankyou"); };

    const onFormSubmit = async (e) => {
        try {

            let data = JSON.stringify({
                "emailAddress": email,
                "firstName": name,
                "phone": number,
                "mxCourse": course || selectedMcq,
                "mxMainsource": MainSource,
                "mxLeadSubSource": formName,
                "mxCity": city,
                // "position": position,
                "noticeperiod": noticeperiod,
                "lastCompany": lastCompany,
                "ctc": ctc,
                "resume": resume,
                "mxExistingStudent": selectedOption,
                "qualification": qualification
            });
            // console.log("data to our Database", data);      
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: urlConstant.commonForm,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            await axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
            buttonRef.current.click()
            handleDownload()
            router.push("/thankyou")
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <Head>

            </Head>
            <div className='form-box'>
                <div className="form-header">
                    {
                        showIcon ? <i className='resp-img-box'><Image loading='lazy' src="/img/enq_icon.svg" alt="enquire icon" fill={true} sizes='100vw' className='resp-img' /></i> : ""
                    }
                    {
                        showTitle ? (
                            <>
                                <h6 className='heading06'>{indexData.heading}</h6>
                                <p>{position}</p>
                            </>
                        ) : ('')
                    }
                </div>
                <form method="post" onSubmit={handleSubmit(onFormSubmit)}   >
                    <input type='hidden' name={formName} value={formName} />

                    <div className='input-box'>
                        <input type="text" name="name" placeholder='Enter your Name' minLength="2"
                            value={name}
                            {...register("name", {
                                required: "Name is required",
                                pattern: {
                                    value: /^[a-zA-Z ]*$/,
                                    message: "Enter letters only"
                                },
                                onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                            })}
                            className={errors.name ? 'error-border' : null}


                        />
                        {errors.name && <span className='error-message'>{errors.name?.message}</span>}
                    </div>
                    <div className='input-box'>
                        <input type="text" name="email" placeholder='Enter Your Email Address'
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
                                        value: /^[6-9]\d{9,14}/,
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
                    {
                        Qualification ?
                            <div className='input-box'>
                                <input type="text" name="qualification" placeholder='Qualification' minLength="2"
                                    value={qualification}
                                    {...register("qualification", {
                                        required: "qualification is required",

                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                    className={errors.qualification ? 'error-border' : null}


                                />
                                {errors.qualification && <span className='error-message'>{errors.qualification?.message}</span>}
                            </div> : ""
                    }


                    {
                        showcity ?
                            <div className='input-box custom-select'>
                                <input type="text" name="city" placeholder='Enter City'
                                    value={city}
                                    {...register("city", {
                                        required: "City is required",
                                        pattern: {
                                            value: /^[a-zA-Z ]*$/,
                                            message: "Enter letters only"
                                        },
                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                    className={errors.city ? 'error-border' : null} />
                                {errors.city && <span className='error-message'>{errors.city?.message}</span>}


                            </div> : " "
                    }

                    {
                        showcourse ?
                            <div className='input-box custom-select'>
                                <select id="select-course" name="course" placeholder='Select Course'
                                    {...register("course",
                                        {
                                            required: "Select Course",
                                            onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                        })}
                                    className={errors.course ? 'error-border' : null}

                                    value={course}
                                >
                                    <option value="" selected>Select Course</option>
                                    <option value="US CPA">US CPA</option>
                                    <option value="US CMA">US CMA</option>
                                    <option value="EA">EA</option>
                                    <option value="ACCA">ACCA</option>
                                    <option value='CIA'>CIA</option>
                                    <option value='IFRS'>IFRS</option>
                                    <option value='Data Analytics'>Data Analytics</option>
                                    <option value='Simandhar Saamarth'>Simandhar Saamarth</option>
                                </select>
                                {errors.course && <span className='error-message'>{errors.course?.message}</span>}
                            </div> : ' '
                    }

                    {
                        showposition ?
                            <div className='input-box custom-select'>
                                <select id="select-position" name={position} placeholder='Select' value={position}
                                    {...register("position",
                                        {
                                            required: "Select",
                                            onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                        })}
                                    className={errors.position ? 'error-border' : null} >
                                    <option value="" selected>position</option>
                                    <option value="Sr. SEO Specialist">{position}</option>
                                    <option value="Academic Counselor">Academic Counselor</option>
                                    <option value="Digital Marketing">Digital Marketing </option>
                                    <option value='Student Engagement'>Student Engagement </option>
                                    <option value='Senior Frontend Developer'>Senior Frontend Developer  </option>
                                    <option value='Senior Backend Developer'>Senior Backend Developer  </option>
                                    <option value='Content Writer '>Content Writer </option>
                                    <option value="Human Resource">Human Resource</option>
                                    <option value="Quality Auditor ">Quality Auditor </option>
                                    <option value="Finance Associate">Finance Associate</option>
                                </select>
                                {errors.position && <span className='error-message'>{errors.position?.message}</span>}
                            </div> : ' '
                    }

                    {
                        showDownloadMCQ ?
                            <div className='input-box custom-select select-field'>
                                <select value={selectedMcq} onChange={handleSelectChange}>
                                    <option value="">Select Course</option>
                                    <option value="CPA">US CPA</option>
                                    <option value="CMA">US CMA</option>
                                    <option value="CIA">CIA</option>
                                    <option value="EA">EA</option>
                                </select>
                            </div> : ""
                    }

                    {
                        shownoticeperiod ?
                            <div className='input-box'>
                                <input type="text" name="noticeperiod" placeholder='Enter Notice Period'
                                    value={noticeperiod}
                                    {...register("noticeperiod", {
                                        required: "notice period required",
                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                    className={errors.noticeperiod ? 'error-border' : null}
                                />
                                {errors.noticeperiod && <span className='error-message'>{errors.noticeperiod?.message}</span>}
                            </div> : ""
                    }
                    {
                        showLastCompany ?
                            <div className='input-box'>
                                <input type="text" name="lastCompany" placeholder='Enter Last Company'
                                    value={lastCompany}
                                    {...register("lastCompany", {

                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                    className={errors.lastCompany ? 'error-border' : null}
                                />
                                {errors.lastCompany && <span className='error-message'>{errors.lastCompany?.message}</span>}
                            </div> : ""
                    }
                    {
                        showCtc ?
                            <div className='input-box'>
                                <input type="text" name="ctc" placeholder='Enter Current CTC'
                                    value={ctc}
                                    {...register("ctc", {

                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                    className={errors.ctc ? 'error-border' : null}
                                />
                                {errors.ctc && <span className='error-message'>{errors.ctc?.message}</span>}
                            </div> : ""
                    }
                    {
                        showResume ?
                            <div className='input-box'>
                                <input type="file" name="resume" placeholder='Upload resume'
                                    value={resume}
                                    {...register("resume", {

                                        onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                                    })}
                                    className={errors.lastCompany ? 'error-border' : null}
                                />
                                {errors.resume && <span className='error-message'>{errors.resume?.message}</span>}
                            </div> : ""
                    }

                    {
                        showRadio ?
                            <div className="input-box radio" style={{ borderBottom: 'none' }}>
                                <p>Simandhar or Non-Simandhar Student</p>
                                <label class="radio-btn">Simandhar
                                    <input type="radio" checked={selectedOption === 'Simandhar'} name="radio" value="Simandhar" onChange={handleOptionChange} />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radio-btn">Non-Simandhar
                                    <input type="radio" checked={selectedOption === 'Non-Simandhar'} name="radio" value="Non-Simandhar" onChange={handleOptionChange} />
                                    <span class="checkmark"></span>
                                </label>
                            </div> : ''
                    }
                    {
                        showRadioStatus ?
                            <div className="input-box radio" style={{ borderBottom: 'none' }}>
                                <p>Status</p>
                                <label class="radio-btn">Student
                                    <input type="radio" value="Student" checked={selectedOption === 'Student'} name="radio" onChange={handleOptionChange} />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radio-btn">Working Professional
                                    <input type="radio" checked={selectedOption === 'Working Professional'} value="Working Professional" name="radio" onChange={handleOptionChange} />
                                    <span class="checkmark"></span>
                                </label>
                            </div> : ''
                    }
                    {
                        showPara ?
                            <p className='formPara'>
                                Disclaimer - Keeping in view of the various aspects, students enrolled by our corporate client will not be provided with any placement assistance.
                            </p> : ''

                    }

                    <div className='input-box'>
                        <button className='btn maroon-border-btn maroon-border-btn-arrow' ref={buttonRef} > Register</button>
                        {success && (hideBtn ? " " : <a href='/img/sample.pdf' download={true} className='btn maroon-btn maroon-btn-arrow dwn-btn' onClick={hideDwnBtn}>Download PDF</a>)}



                        {/* 
                    <button type="submit" className='btn black-border black-border-btn-arrow'>Submit</button>
                    {success && (hideBtn ? " " : <a href='/img/sample.pdf' download={true} className='btn maroon-btn maroon-btn-arrow dwn-btn' onClick={hideDwnBtn}>Download PDF</a>)} */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default CommonForm