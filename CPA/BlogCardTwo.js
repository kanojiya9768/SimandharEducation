import React from 'react'
import Image from 'next/image'


const StudentAlumni = ({ blogCardData }) => {

  return (
    <>
      <h2 className="heading02">{blogCardData.mainheading}</h2>
      <div className="student-corner-row">
        <div className="student-corner-left-row">
          {

            blogCardData.boxes.map(((data,index) => {

              return <div className='student-corner-left-box' key={index}>
                <h6 className="heading06"><span>{data.spanheading}</span> | {data.smallheading}</h6>
                <h3 className="heading03">{data.subheading}</h3>
                <p>{data.description}</p>
                <a href={data.readmore}>Read More </a>
                <div className="student-box">
                  <div className="img-box">
                    <Image loading='lazy' src={data.img}fill={true} sizes='100vw'  className='resp-img' alt='' />
                  </div>
                  <div className='name-box'>
                    <h3 className='heading03'>{data.topic} </h3>
                    <h4 className='heading04'>{data.name}</h4>
                  </div>
                </div>
              </div>
            }))
          }
        </div>

      </div>

      {/* </div>

      </section> */}
    </>
  )
}

export default StudentAlumni