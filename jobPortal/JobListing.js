import React from "react";
import Image from "next/image";

const JobListing = () => {
  return (
    <>
      <section className="section joblisting-section">
        <div className="joblisting-container">
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
                    placeholder="Skills / Designation / Companies "
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
            <div className="dropdowm-row mt-35">
          <div className="dropdown-box">
            <select name="cars" id="cars">
                <option value="volvo">Date posted</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
          </div>
          <div className="dropdown-box">
            <select name="cars" id="cars">
                <option value="volvo">Work mode</option>
                <option value="saab">All jobs</option>
                <option value="opel">Part-time</option>
                <option value="audi">Full-time</option>
                <option value="audi">Internees</option>
            </select>
          </div>
          <div className="dropdown-box">
            <select name="cars" id="cars">
                <option value="volvo">Salary estimate</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
          </div>
          <div className="dropdown-box">
            <select name="cars" id="cars">
                <option value="volvo">Company Type</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
          </div>
          </div>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Evaluation</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>1+ years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/location.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/calender.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Immediate joiner</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/ruppes.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6-12 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full_time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row display-block">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/job-desc.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Monitoring CRM data for evaluations, telegram groups.</p>
                </div>
              </div>
              <p className="days">2 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>

          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Evaluation</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>1+ years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/location.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/calender.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Immediate joiner</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/ruppes.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6-12 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full_time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row display-block">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/job-desc.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Monitoring CRM data for evaluations, telegram groups.</p>
                </div>
              </div>
              <p className="days">2 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Evaluation</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>1+ years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/location.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/calender.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Immediate joiner</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/ruppes.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6-12 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full_time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row display-block">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/job-desc.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Monitoring CRM data for evaluations, telegram groups.</p>
                </div>
              </div>
              <p className="days">2 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Evaluation</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>1+ years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/location.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/calender.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Immediate joiner</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/ruppes.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6-12 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full_time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row display-block">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/job-desc.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Monitoring CRM data for evaluations, telegram groups.</p>
                </div>
              </div>
              <p className="days">2 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Evaluation</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>1+ years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/location.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/calender.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Immediate joiner</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/ruppes.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6-12 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full_time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row display-block">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/job-desc.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Monitoring CRM data for evaluations, telegram groups.</p>
                </div>
              </div>
              <p className="days">2 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Evaluation</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>1+ years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/location.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/calender.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Immediate joiner</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/ruppes.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6-12 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full_time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row display-block">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/job-desc.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Monitoring CRM data for evaluations, telegram groups.</p>
                </div>
              </div>
              <p className="days">2 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          
          
          {/* <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Sr. SEO Specialist</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>2-8 years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Mumbai</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>N/A</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Not Disclosed</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full-time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Sr. SEO Specialist to coordinate SEO efforts, onsite and offsite optimization and keyword expansion research.</p>
                </div>
              </div>
              <p className="days">8 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Academic Counselor</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>2-3 years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Hyderabad</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>3 months</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>3-4 lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full-time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Part-time</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Bill checking & Making payment of all vendors, MIS Daily, Weekly & Monthly Basis. Preparing Bk & Party Reconciliation on weekly basis. Deduction & Deposition of TDS & Calculating GST & Deposition of GST, Filing of TDS Return& GST Return.</p>
                </div>
              </div>
              <p className="days">12 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Senior Frontend Developer</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>2-8 years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Secunderabad, Picket</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>6 months</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>3-4.25 Lacs P.A.</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full-time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Full-time</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>We are looking for a skilled React.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts.</p>
                </div>
              </div>
              <p className="days">24 days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div>
          <div className="jl-detail-row">
            <div className="jl-box">
              <h3>Content Writer</h3>
              <h4>Simandhar Education</h4>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>0-5 years</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Secunderabad, Picket</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>2 Months</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Not Disclosed</p>
                </div>
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/full-time.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>Part-time</p>
                </div>
              </div>
              <div className="jl-icons-row">
                <div className="jlyear-box">
                  <span>
                    <Image loading='lazy' 
                      src="/img/years.png"
                     fill={true} sizes='100vw' 
                      className="resp-img mobile "
                      alt="img"
                    />
                  </span>
                  <p>We are looking to hire a dedicated content writer to create content for blogs, articles, product descriptions, social media, and the company website.</p>
                </div>
              </div>
              <p className="days">30+ days ago</p>
            </div>
            
            <span className="simandhar-logo">
              <Image loading='lazy' 
                src="/img/simandhar_detail-icon.jpg"
               fill={true} sizes='100vw' 
                className="resp-img mobile "
                alt="img"
              />
            </span>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default JobListing;
