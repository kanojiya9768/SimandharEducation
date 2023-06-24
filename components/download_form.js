
import React from "react";
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Image from 'next/image'
import axios from "axios";
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { urlConstants as urlConstant } from '../constants/urlConstants';




// you can use yup for default error message
const DownloadFormComponents = ({ showHeading, showHeading2, indexData, formName, DownloadForm, Qualification, heading3 }) => {
  // console.log(DownloadForm.form1)
  const { register, handleSubmit, formState: { errors }, formState, reset } = useForm();
  const router = useRouter()
  const buttonRef = useRef()


  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    qualification: "",
    formName: { formName },
    MainSource: "direct traffic"
  })
  const [success, setSuccess] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);
  const { name, email, number, city, MainSource, qualification } = values;

  const hideDwnBtn = () => { setHideBtn(true); router.push("/thankyou") }

  const onFormSubmit = async (e) => {
    try {

      let data = JSON.stringify({
        "emailAddress": email,
        "firstName": name,
        "phone": number,
        "city": city,
        "mxMainsource": MainSource,
        "mxLeadSubSource": formName,
        "qualification": qualification

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
      await axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setSuccess({ success: true })
          clearState()

        })
        .catch((error) => {
          console.log(error);
        });

      buttonRef.current.click()

    }
    catch (err) {
      console.log(err)
    }

  }
  const clearState = () => {
    setValues({
      name: "",
      email: "",
      number: "",
      city: "",
      formName: "",
      MainSource: ""
    })
  }




  return (
    <>
      <div className='enq-form'>
        <div className='form-header'>
          <i className='resp-img-box'><Image loading='lazy' src="/img/enq_icon.svg" alt="enquire icon" fill={true} sizes='100vw' className='resp-img' /></i>
          {
            showHeading ?
              <p>We assure a Price match <br /> Guarantee with any Becker Partner</p> : ""
          }
          {
            showHeading2 ? <p>{indexData.heading}</p> : " "
          }
        </div>
        <div className='form-box'>
          {heading3 ? <h6>Take The First Step!</h6> : ""}
          <form onSubmit={handleSubmit(onFormSubmit)}>
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
              //onChange={handleChange}

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
                //onChange={handleChange}
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

              {errors.course && <span className='error-message'>{errors.course?.message}</span>}
            </div>



            {/* <div className='input-box custom-select'>
              <select id="select-course" name="course" placeholder='Select Course'
                {...register("course",
                  {
                    required: "Select Course",
                    onChange: (e) => { setValues({ ...values, [e.target.name]: e.target.value }) },
                  })}
                className={errors.course ? 'error-border' : null}
                //onChange={handleChange}
                value={course}
              >
                <option value="" selected>Select Course</option>
                <option value="US CPA">US CPA</option>
                <option value="US CMA">US CMA</option>
                <option value="EA">EA</option>
                <option value='CIA'>CIA</option>
                <option value='IFRS'>IFRS</option>
                <option value='Data Analytics'>Data Analytics</option>
                <option value='Data Analytics'>Simandhar Saamarth</option>
              </select>
              {errors.course && <span className='error-message'>{errors.course?.message}</span>}
            </div> */}

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

            <div className='input-box'>

              <button type="submit" className='btn black-border black-border-btn-arrow'>Submit</button>
              {success && (hideBtn ? " " : <a href={DownloadForm.form} target="_blank" download={true} className='btn maroon-btn maroon-btn-arrow dwn-btn' onClick={hideDwnBtn}>Download PDF</a>)}

            </div>
          </form>
        </div>
      </div>


    </>
  )
}

export default DownloadFormComponents
