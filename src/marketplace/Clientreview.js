import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

function Clientreview() {
  return (
    <div>
      <div
        className="Clientreviewmaindiv"
        style={{
          marginTop: "30px",
          position: "relative",
          paddingBottom: "30px",
        }}
      >
        <Carousel
          arrows={false}
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={false}
          centerMode={false}
          dotListClass=""
          infinite={false}
          draggable={true}
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              slidesToSlide: 2,
            },
            mobile: {
              breakpoint: {
                max: 550,
                min: 0,
              },
              items: 1,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 550,
              },
              items: 2,
              slidesToSlide: 2,
            },
          }}
          showDots={true}
          sliderClass=""
          swipeable={true}
        >
          <div className="clientreviewcoursel1" style={{ marginRight: "10px" }}>
            <div>
              <img
                src="https://www.medikabazaar.com/media/Raajiv.png"
                style={{
                  Width: "100%",
                  display: "block",
                  height: "auto",
                  margin: "none",
                }}
                alt=""
              />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "#2a4689",
                  fontWeight: "600",
                }}
              >
                Dr Raajiv Singhal
              </h4>
              <p style={{ fontSize: "14px" }}>
                CEO, CARE Hospital Group, Hyderabad
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "27px",
                  paddingBottom: "27px",
                }}
              >
                Medikabazaar is a winning formula to cut down our procurement
                costs. Their largest product portfolio enables me to compare and
                buy supplies as per my requirements.{" "}
              </p>
            </div>
          </div>
          <div className="clientreviewcoursel1" style={{ marginLeft: "10px" }}>
            <div>
              <img
                src="https://www.medikabazaar.com/media/Ninad_katdare.png"
                style={{
                  Width: "100%",
                  display: "block",
                  height: "auto",
                  margin: "none",
                }}
                alt=""
              />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "#2a4689",
                  fontWeight: "600",
                }}
              >
                Dr. Ninad Katdare
              </h4>
              <p style={{ fontSize: "14px" }}>
                Surgical Oncologist, Reliance Hospital, Mumbai
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "27px",
                }}
              >
                Indian healthcare facilities need a solution like Medikabazaar
                which can go a long way in not only cutting procurement cost,
                but that too from a one-stop platform which helps us cut down on
                operational time and concentrate on our duties.
              </p>
            </div>
          </div>
          <div className="clientreviewcoursel1" style={{ marginRight: "10px" }}>
            <div>
              <img
                src="https://www.medikabazaar.com/media/Harsh.png"
                style={{
                  Width: "100%",
                  display: "block",
                  height: "auto",
                  margin: "none",
                }}
                alt=""
              />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "#2a4689",
                  fontWeight: "600",
                }}
              >
                Dr. Harsh Mahajan
              </h4>
              <p style={{ fontSize: "14px" }}>Mahajan Imaging, New Delhi</p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "27px",
                }}
              >
                Medikabazaar is fast emerging as a high end technology
                aggregator in addition to being a single point of contact for
                all medical supplies and consumables. We are excited to join
                hands with Medikabazaar for Molecular Imaging products.
              </p>
            </div>
          </div>
          <div className="clientreviewcoursel1" style={{ marginLeft: "10px" }}>
            <div>
              <img
                src="https://www.medikabazaar.com/media/yuvaraja.png"
                style={{
                  Width: "100%",
                  display: "block",
                  height: "auto",
                  margin: "none",
                }}
                alt=""
              />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "#2a4689",
                  fontWeight: "600",
                }}
              >
                Dr. T.B. Yuvaraja
              </h4>
              <p style={{ fontSize: "14px" }}>
                Head of Robotic Surgery, Kokilaben Hospital, Mumbai
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "27px",
                }}
              >
                It’s vital for hospitals to upgrade themselves with
                technologically advanced medical devices for enhanced
                treatments. Medikabazaar is contributing massively to this cause
                by introducing products like HIVEC (BRS system) and improving
                patient care.
              </p>
            </div>
          </div>
          <div className="clientreviewcoursel1" style={{ marginRight: "10px" }}>
            <div>
              <img
                src="https://www.medikabazaar.com/media/Dr_Arun.png"
                style={{
                  Width: "100%",
                  display: "block",
                  height: "auto",
                  margin: "none",
                }}
                alt=""
              />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "#2a4689",
                  fontWeight: "600",
                }}
              >
                Dr. Arun Puri
              </h4>
              <p style={{ fontSize: "14px" }}>
                Director & HOD, Max Super Speciality Hospital, Patparganj
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "27px",
                  paddingBottom: "27px",
                }}
              >
                We are using Zimmer DVT Pump supplied by Medikabazaar. It is
                lightweight, quiet, and has all the safety features for a smooth
                operation. I highly recommend it.
              </p>
            </div>
          </div>
          <div className="clientreviewcoursel1" style={{ marginLeft: "10px" }}>
            <div>
              <img
                src="	https://www.medikabazaar.com/media/M_D_Ray.png"
                style={{
                  Width: "100%",
                  display: "block",
                  height: "auto",
                  margin: "none",
                }}
                alt=""
              />
            </div>
            <div>
              <h4
                style={{
                  fontSize: "20px",
                  color: "#2a4689",
                  fontWeight: "600",
                }}
              >
                Dr. M.D. Ray
              </h4>
              <p style={{ fontSize: "14px" }}>
                Surgical Oncologist, AIIMS, New Delhi
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "27px",
                }}
              >
                HIPEC is a very effective and established modality of treatment
                for peritoneal cancer. Patients gain immense benefits from the
                HIPEC machine, and I am receiving excellent service from
                Medikabazaar
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Clientreview;
