import React from "react";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
const JobDetails = () => {
  return (
    <>
      <section className="section job-deatil-section">
        <div className="job-details-container">
          <a href="#" className="btn maroon-btn maroon-btn-arrow d-iflex">
          <FaAngleLeft/> Back to job search
          </a>

          <div className="job-deatils-row">
            <div className="jd-left-box">
              <div className="jd-left-firstbox">
                <h3>Evaluation</h3>
                <h4>Simandhar Education</h4>
              </div>
              <div className="jd-left-secondbox">
                <div className="jd-evalution">
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
                <div className="jd-evalution">
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
                <div className="jd-evalution">
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
                <div className="jd-evalution">
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
                <div className="jd-evalution">
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
            </div>
            <div className="jd-right-box">
              <div className="jd-inner-right">
                <div className="simandhar-logo">
                  <Image loading='lazy' 
                    src="/img/simandhar_detail-icon.jpg"
                   fill={true} sizes='100vw' 
                    className="resp-img mobile "
                    alt="img"
                  />
                </div>
                {/* <div className="btn"> */}
                <a href="#" className="btn maroon-btn maroon-btn-arrow">
                  Apply Now
                </a>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="jd-opning">
            <p>Posted : 2 days ago</p>
            <p>Openings : 2</p>
            <p>Job Applicants : 136</p>
          </div>
          <div className="job-details-row">
            <div className="inner-job-details">
              <p>Job Role : Evaluation </p>
              <p>Experience : 1+ years</p>
              <p>Job Location : Hyderabad</p>
              <p>Mode of Work : Work from office</p>
              <p>Eligibility Criteria :</p>
              <ul className="mb-35">
                <li>
                  Should have an aggregate of 60% in the academics till date.
                </li>
                <li>Any Graduate/Post Graduate.</li>
              </ul>
              <p>Roles & Responsibilities :</p>
              <ul className="mb-35">
                <li>Performing regular tasks assigned</li>
                <li>Organizing the evaluation agency meetings / webinars</li>
                <li>MOM preparation and updating the SOP’s</li>
                <li>Providing the student eligibilities to counsellors</li>
                <li>Conducting webinars</li>
                <li>Detailed process knowledge guidance to the students</li>
                <li>Student email responses</li>
                <li>Handling escalations and solving smoothly</li>
                <li>Monitoring CRM data for evaluations, telegram groups</li>
                <li>Majorly coordinating with students on the queries</li>
              </ul>

              <p>Skills & Requirements :</p>
              <ul className="mb-35">
                <li>Verbal & Email communication skills,</li>
                <li>Quick learner,</li>
                <li>Good educational subject knowledge,</li>
                <li>Smooth Escalation handling,</li>
                <li>Internet research,</li>
                <li>
                  Integrity, with an ability to handle confidential information
                </li>
              </ul>
              <a href="#" className="btn maroon-btn maroon-btn-arrow">
                Apply Now
              </a>
            </div>
            <div className="jd-aboutcompaney">
              <p>About Company</p>

              <p>
                Simandhar Education - India's leading corporate training
                institute for CPA|CMA| EA| IFRS|CIA, Watt Sells Awardee
                Institute IMA approved. Simandhar Education ensures in providing
                quality education to prepare aspirants for success in the
                professional exam. Simandhar education (Official partner of
                Becker international USA)".
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
