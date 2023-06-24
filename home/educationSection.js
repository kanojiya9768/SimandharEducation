import Image from 'next/image'
import { memo } from 'react'

 function educationSection({indexData}) {
  return (
    <section className="section education-section">
      <div className='container eduction-container'>
        <div className='info-box'>
            <h1 className='heading02'>{indexData.mainheading}</h1>
            <p>{indexData.description}</p>
            <div className='edubox-wrap'>
                <div className='edu-row'>
                    <span className='edu-tab'>{indexData.list1}</span>
                    <span className='edu-tab'>{indexData.list2}</span>
                </div>
                <div className='edu-row'>
                    <span className='edu-tab'>{indexData.list3}</span>
                    <span className='edu-tab'>{indexData.list4}</span>
                    <span className='edu-tab'>{indexData.list5}</span>
                </div>
            </div>    
        </div>
        <div className='edu-adbox'>
            <div className='edbox resp-img-box'>
                {indexData.img1 ?  <Image loading='lazy' src={indexData.img1}  fill={true} sizes='100vw' className='resp-img' alt='Corporate tie ups'/> : "" }
            </div>
            <div className='edbox resp-img-box'>
               {
                indexData.img2 ? 
               <Image loading='lazy' src={indexData.img2}  fill={true} sizes='100vw' className='resp-img' alt='Elijah watt sells award winner'/> : "" }
            </div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  )
}

export default memo(educationSection)