import React, { useState } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../redux/actions/cart';
import { Toaster, toast } from 'react-hot-toast';
import { urlConstants } from '../constants/urlConstants';
import { AUTH_KEY_NAME, statusConstants } from '../constants/statusCodes';
import axios from 'axios';
import { formatAmount } from '../utils';
import { getCookie } from 'cookies-next';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image'


const CourseList = ({ courseData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log("🚀 ~ file: CourseList.js:18 ~ CourseList ~ cartItems:", cartItems)

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleCart = async (e, course, index) => {
    e.preventDefault();
    if (!course.inCart) {
      const defaultMessage = 'You can add only one CPA Course bundle - Becker Unlimited or Becker Limited.';
      try {
        if (course.sequence === 1) {
          if (cartItems.some(item => item.sequence === 2)) {
            toast.error(defaultMessage);
            return;
          }
        } else if (course.sequence === 2) {
          if (cartItems.some(item => item.sequence === 1)) {
            toast.error(defaultMessage);
            return;
          }
        }
      } catch (error) {
        console.log("🚀 ~ file: CourseList.js:28 ~ handleCart ~ error:", error)
      }
    }
    console.log("After Try ===>", course)

    const token = `${getCookie(AUTH_KEY_NAME) ? getCookie(AUTH_KEY_NAME) : ''}`
    if (token) {
      const headers = {
        Authorization: `JWT ${token}`,
      }
      try {
        setButtonDisabled(index);

        const object = {
          courseId: course._id
        }
        let response = await axios.post(urlConstants.addToCart, object, { headers: headers });
        if (response.status === statusConstants.ok) {
          course.inCart ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
          toast.success(response.data.message)
        }
      } catch (error) {
        console.log("🚀 ~ file: CourseList.js:41 ~ handleCart ~ error:", error)
        toast.error('An error occurred during adding to cart. Please try again later.', error)
      } finally {
        setButtonDisabled(false);
      }
    } else {
      console.log('IN CART ===>', course.inCart);
      course.inCart ? toast.success('Course has been removed.') : toast.success('Course has been added.')
      course.inCart ? dispatch(removeFromCartAction(course)) : dispatch(addToCartAction(course))
    }
  }


  let courses = courseData.sort((a, b) => a.sequence - b.sequence);
  console.log("lists", courses)

  return (
    <>
      {
        courseData.map((item, index) => {
          if (item.price.totalPrice > 0) {
            return (
              <figure className='course-row' key={index}>
                <div className='course-imgbox'>
                  <Image loading='lazy' src={item.thumbnail}fill={true} sizes='100vw' className='resp-img' alt='thumbnail' />
                </div>
                <figcaption className='course-infobox'>
                  <Link href={`/courseDetail/${item.sequence}`}>
                    <div>
                      <h3 className='heading03'>{item.title}</h3>
                      <p>{parse(item.description)}</p>
                      {/*<p className='duration-row'>
                      <dl>
                        <dt>
                          <span>{durationInDays}</span> days duration
                        </dt>
                        <dd>
                          <span>28</span> lectures
                        </dd>
                      </dl>
                    </p> */}
                    </div>
                  </Link>
                  <div className='price-box'>
                    <p className='discount-price'>{item.price && formatAmount(item.price.totalPrice)}</p>
                    <p className='actual-price strip'>{item.price && formatAmount(item.price.discountPrice)}</p>
                  </div>

                  {item.IsBoughtAlready ? (
                    <Link href={item.courseLink || '#'} className="btn maroon-btn maroon-btn-arrow">Go to course</Link>
                  ) : (
                    <>
                      <button className={`btn maroon-btn maroon-btn-arrow ${isButtonDisabled === index ? 'disabled' : ''}`} disabled={isButtonDisabled === index} onClick={(e) => handleCart(e, item, index)}>
                        {isButtonDisabled === index ? 'Loading...' : (item.inCart) ? 'Remove from cart' : 'Add to cart'}
                      </button>
                    </>
                  )}

                </figcaption>
              </figure>
            )
          }

        })
      }
    </>
  )
}

export default CourseList