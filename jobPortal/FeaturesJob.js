import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const FeaturesJob = () => {
  var partnerSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="job_featured_section pt-8">
        <div className="container">
          <h2 className="heading02"> Featured Jobs</h2>
          <div className="featured_row partnerSlider">
            <Slider {...partnerSlider}>
              <div className="featured_box">
                <div className="feat_two_row">
                  <div className="feat_left_box">
                    <h4>Sr. SEO Specialist</h4>
                    <h5>Simandhar Education</h5>
                  </div>
                  <div className="s_logo">
                    <Image loading='lazy' 
                      src="/img/s_logo.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="jdetails-row">
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/location.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Ahmedabad, Gujarat</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/years.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>1 to 2 Yrs</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/full_time.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Full-time</h2>
                  </div>
                </div>
                <h6 className="days-ago">Posted 1 day ago</h6>
              </div>
              <div className="featured_box">
                <div className="feat_two_row">
                  <div className="feat_left_box">
                    <h4>Academic Counseler</h4>
                    <h5>Simandhar Education</h5>
                  </div>
                  <div className="s_logo">
                    <Image loading='lazy' 
                      src="/img/s_logo.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="jdetails-row">
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/location.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Ahmedabad, Gujarat</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/years.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>2 to 3 Yrs</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/full_time.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Full-time</h2>
                  </div>
                </div>
                <h6 className="days-ago">Posted 5 day ago</h6>
              </div>
              <div className="featured_box">
                <div className="feat_two_row">
                  <div className="feat_left_box">
                    <h4>Digital Marketing</h4>
                    <h5>Simandhar Education</h5>
                  </div>
                  <div className="s_logo">
                    <Image loading='lazy' 
                      src="/img/s_logo.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="jdetails-row">
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/location.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Secunderabad, Picket</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/years.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>3 Yrs</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/full_time.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Full-time</h2>
                  </div>
                </div>
                <h6 className="days-ago">Posted week ago</h6>
              </div>
              <div className="featured_box">
                <div className="feat_two_row">
                  <div className="feat_left_box">
                    <h4>Content Writer</h4>
                    <h5>Simandhar Education</h5>
                  </div>
                  <div className="s_logo">
                    <Image loading='lazy' 
                      src="/img/s_logo.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="jdetails-row">
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/location.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Secunderabad, Picket</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/years.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>0 to 5 Yrs</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/full_time.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Full-time</h2>
                  </div>
                </div>
                <h6 className="days-ago">Posted 2 weeks ago</h6>
              </div>
              <div className="featured_box">
                <div className="feat_two_row">
                  <div className="feat_left_box">
                    <h4>Content Writer</h4>
                    <h5>Simandhar Education</h5>
                  </div>
                  <div className="s_logo">
                    <Image loading='lazy' 
                      src="/img/s_logo.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="jdetails-row">
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/location.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Secunderabad, Picket</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/years.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>0 to 5 Yrs</h2>
                  </div>
                  <div className="jdetaile-box">
                    <div className="jloc-img">
                      <Image loading='lazy' 
                        src="/img/full_time.png"
                       fill={true} sizes='100vw' 
                        className="resp-img mobile"
                        alt="img"
                      />
                    </div>
                    <h2>Full-time</h2>
                  </div>
                </div>
                <h6 className="days-ago">Posted 2 weeks ago</h6>
              </div>
            </Slider>
          </div>
          <div className="text-center mt-4">
            <a href="#" className=" btn maroon-btn maroon-btn-arrow">
              View All Jobs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesJob;
