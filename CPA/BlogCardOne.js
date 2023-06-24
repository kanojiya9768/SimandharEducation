import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const StudentCorner = ({ blogCardData }) => {
  return (
    <>


      <div className="student-corner-row">
        <div className="student-corner-left-row">
          {
            blogCardData?.boxes.map(((data, index) => {

              return <div className='student-corner-left-box' key={index}>
                <h6 className="heading06"><Link href={data.path}> <span>{data.spanheading}</span> </Link>| {data.smallheading}</h6>
                <h3 className="heading03">{data.subheading}</h3>
                <p>{data.description}</p>
                <Link href={data.readmore}>Read More</Link>
                <div className="student-img">
                  <Image loading='lazy' src={data.img} fill={true} sizes='100vw' className='resp-img' alt='' />
                </div>
              </div>
            }))
          }
        </div>
      </div>




    </>
  )
}

export default StudentCorner
