// import React from 'react'
// import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { urlConstants as urlConstant } from '../constants/urlConstants';


// you can use yup for default error message
const FormComponents = ({ isactive, showPopup, formName }) => {

  const { register, handleSubmit, formState: { errors }, formState, reset } = useForm();
  const router = useRouter()
  const buttonRef = useRef()

  //Phone number validation
  const [phoneNumber, setPhoneNumber] = useState('')

  const [values, setValues] = useState({
    name: "",
    email: "",
    course: "",
    number: "",
    formName: { formName },
    MainSource: "direct traffic"
  })
  // console.log(values)
  const { name, email, number, course, MainSource } = values;
  const onFormSubmit = async (e) => {
    try {

      let data = JSON.stringify({
        "emailAddress": email,
        "firstName": name,
        "phone": number,
        "mxCourse": course,
        "mxMainsource": MainSource,
        "mxLeadSubSource": formName
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
      clearState()
      router.push("/thankyou")

    }
    catch (err) {
      console.log(err)
    }
  }
  const clearState = () => {
    setValues({
      name: '',
      email: '',
      course: '',
      number: '',
    })
  }

  return (
    <>
      <div className={'enq-form' + ' ' + (isactive ? 'active' : '')}>
        <button className='close-form resp-img-box' onClick={showPopup} ref={buttonRef}><Image loading='lazy' src="/img/form_arrow.svg" alt="form arrow"fill={true} sizes='100vw' className='resp-img' /></button>
        <div className='form-header'>
          <i className='resp-img-box'><Image loading='lazy' src="/img/enq_icon.svg" alt="enquire icon"fill={true} sizes='100vw' className='resp-img' /></i>
          <p>We assure a Price match <br /> Guarantee with any Becker Partner</p>
        </div>
        <div className='form-box'>
          <h6>Take The First Step!</h6>

          <form method="post" onSubmit={handleSubmit(onFormSubmit)}>
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
                <option value="">Select Course</option>
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
            </div>
            <div className='input-box'>
              <button className='btn black-border black-border-btn-arrow'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="overlay" onClick={showPopup} style={{ display: (isactive ? "block" : 'none') }}></div>

    </>
  )
}

export default FormComponents
