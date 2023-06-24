import React from "react";
import _ from 'lodash'
import Image from "next/image";

const CorporateLogos = ({
  corporateLogosData,
  index,
  showHeading,
  showButton,
  showDescription1,
  showDescription2,
}) => {
  let lists = _.get(corporateLogosData, "lists", []);
  return (
    <>
      <section className="simandhartieups-section" key={index}>
        <div className="container">
          {showHeading ? <h2 className="heading02">Corporate Tie-Ups</h2> : " "}

          <div>
            {showDescription1 ? (
              <p>
                Mr. Sripal Jain's expertise has helped numerous big companies,
                including BIG4, to achieve their business objectives by training
                their employees.
              </p>
            ) : (
              ""
            )}
            {showDescription2 ? (
              <p>
                If you aspire to work for one of these leading organisations,
                Simandhar Recruitment Portal is the perfect place to start. By
                registering with us, we will not only provide you with the
                opportunity to sit for the interview with these companies, but
                also offer specialised training to enhance your skills and
                increase your chances of landing your dream job. So don't wait
                any longer, take the first step towards your career aspirations
                today by signing up with Simandhar Recruitment Portal.
              </p>
            ) : (
              " "
            )}
          </div>
        </div>
      </section>
      <section className="logo-section">
        <div className="container-l">
          <div className="logo-grid">
            {lists.map((data) => {
              return (
                <>

                    <div>
                      <Image loading='lazy' 
                        src={data.path}
                       fill={true} sizes='100vw'
                        className="resp-img"
                        alt="corporate logos"
                      />
                    </div>
                </>
              );
            })}
          </div>
          <div className="text-center mt-4">
            {showButton ? (
              <a href="#" className=" btn maroon-btn maroon-btn-arrow">
                View More
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateLogos;
