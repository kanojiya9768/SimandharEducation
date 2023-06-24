import React from "react";
import Image from "next/image";

const CarrierLadderBanner = () => {
  return (
    <>
      <section className="job_carrierladder">
        <div className="jbanner_container">
          <h2 className="heading02 text-center">
            Climb the Next Step on Your Career Ladder
          </h2>
          <p className="heading05 text-center">
            Start exploring 100+ exciting career opportunities
          </p>
          <div className="search-form">
            <form className="form-row" action="">
              <div className="form-filed">
                <div className="serch-img">
                  <Image loading='lazy' 
                    src="/img/search.png"
                   fill={true} sizes='100vw' 
                    className="resp-img mobile "
                    alt="img"
                  />
                </div>
                <div className="input-filed">
                  <input
                    type="text"
                    placeholder="Skills / Designation / Companies"
                  />
                </div>
              </div>
              <div className="form-filed exprience-drop">
                <div className="serch-img">
                  <Image loading='lazy' 
                    src="/img/years.png"
                   fill={true} sizes='100vw' 
                    className="resp-img mobile "
                    alt="img"
                  />
                </div>
                <div className="input-filed">
                  <input type="text" placeholder="Experience " />
                </div>
              </div>
              <div className="form-filed location-filed">
                <div className="serch-img">
                  <Image loading='lazy' 
                    src="/img/location.png"
                   fill={true} sizes='100vw' 
                    className="resp-img mobile "
                    alt="img"
                  />
                </div>
                <div className="input-filed">
                  <input type="text" placeholder="Location " />
                </div>
              </div>
              <div className="text-center ">
                <a href="#" className=" btn maroon-btn maroon-btn-arrow">
                  Search
                </a>
              </div>
            </form>
          </div>
          <div className="jbanner-btn">
            <div className="btn-box">
              <div className="frasher-icon">
                <Image loading='lazy' 
                  src="/img/frasher.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <p>All jobs</p>
            </div>
            <div className="btn-box">
              <div className="frasher-icon">
                <Image loading='lazy' 
                  src="/img/full-time.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <p>Part -Time</p>
            </div>
            <div className="btn-box">
              <div className="frasher-icon">
                <Image loading='lazy' 
                  src="/img/exprinced.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <p>Full Time</p>
            </div>
            <div className="btn-box">
              <div className="frasher-icon">
                <Image loading='lazy' 
                  src="/img/startup.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <p>Internees</p>
            </div>
          </div>
        </div>
      </section>
      <div className="job_steps-row">
        <div className="jobstep_container">
          <div className="job_step_box">
            <div className="job-step-inner-box">
              <div className="jrgitster-img">
                <Image loading='lazy' 
                  src="/img/register.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <div className="j-steps">
                <h3>Step 1:</h3>
                <h2>Register</h2>
              </div>
            </div>
          </div>
          <div className="job_step_box">
            <div className="job-step-inner-box">
              <div className="jrgitster-img">
                <Image loading='lazy' 
                  src="/img/prepare.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <div className="j-steps">
                <h3>Step 2:</h3>
                <h2>Prepare</h2>
              </div>
            </div>
          </div>
          <div className="job_step_box">
            <div className="job-step-inner-box">
              <div className="jrgitster-img">
                <Image loading='lazy' 
                  src="/img/apply.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <div className="j-steps">
                <h3>Step 3:</h3>
                <h2>Apply</h2>
              </div>
            </div>
          </div>
          <div className="job_step_box">
            <div className="job-step-inner-box">
              <div className="jrgitster-img">
                <Image loading='lazy' 
                  src="/img/grow.png"
                 fill={true} sizes='100vw' 
                  className="resp-img mobile"
                  alt="img"
                />
              </div>
              <div className="j-steps">
                <h3>Step 4:</h3>
                <h2>Grow</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrierLadderBanner;
