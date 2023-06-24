import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import _ from 'lodash'
import { memo } from 'react'

function videoSection({ videoData }) {
  let videos = _.get(videoData, "videos", [])
  let tabs = _.get(videoData, "tabs", [])
  let path = _.get(videoData, "path")
  return (
    <section className="section video-section">
      <div className='container'>
        <h2 className='heading02'>{videoData.mainheading}</h2>
        <Tab.Group>
          <div className='video-container'>
            <div className='video-lgbox resp-img-box'>
              <Tab.Panels>
                {
                  videos.map(((video, index) => {
                    return (<Tab.Panel key={index}>
                      <iframe src={video.path} frameBorder="0" allowFullScreen></iframe>
                    </Tab.Panel>
                    )
                  }))
                }
              </Tab.Panels>
            </div>
            <div className='video-thumbbox'>
              <Tab.List className='thumb-wrap custom-scrollbar'>

                {
                  tabs.map(((tabdata, index) => {
                    return (
                      <Tab className='thumb-row' key={index}>
                        <i className='thumb-img  resp-img-box'><Image loading='lazy' src={tabdata.path}fill={true} sizes='100vw'   className='resp-img' alt={tabdata.banAlt} /></i>
                        <div className='video-info'>
                          <h2 className='heading06'>{tabdata.heading}</h2>
                          <span>{tabdata.span}</span>
                        </div>
                      </Tab>
                    )
                  }))
                }
              </Tab.List>
              <Link href="/testimonial-videos#testimonial-video-tab" className='btn maroon-border-btn maroon-border-btn-arrow'>View More</Link>
            </div>
          </div>
        </Tab.Group>
      </div>
      <div className="clear"></div>
    </section>
  )
}
export default memo(videoSection)