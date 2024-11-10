"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import CarouselCard from "@/components/custom_curousal_card";
// import { Button } from "bootstrap";

export default function Hero8() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="hero -type-8">
      <div className="hero__bg">
        {/* <Image
          width={1920}
          height={860}
          src="/img/hero/8/1.jpg"
          alt="background"
        /> */}

        <video autoPlay loop muted>
          <source
            src="/img/hero/8/TT website .mp4" // Dummy video link
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 col-md-10">
            <div className="hero__content text-center">
              {/* <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__filter mb-60 md:mb-0 md:mt-30"
              >
                <div
                  ref={dropDownContainer}
                  className="searchForm -type-1 shadow-1 rounded-200"
                >
                  <div className="searchForm__form">
                    <div className="searchFormItem js-select-control js-form-dd">
                      <div
                        className="searchFormItem__button"
                        onClick={() =>
                          setCurrentActiveDD((pre) =>
                            pre == "location" ? "" : "location",
                          )
                        }
                      >
                        <div className="searchFormItem__icon size-55 rounded-full border-1 flex-center">
                          <i className="text-20 icon-pin"></i>
                        </div>
                        <div className="searchFormItem__content">
                          <h5>Where</h5>
                          <div className="js-select-control-chosen">
                            {location ? location : "Search destinations"}
                          </div>
                        </div>
                      </div>

                      <Location
                        setLocation={setLocation}
                        active={currentActiveDD === "location"}
                      />
                    </div>

                    <div className="searchFormItem js-select-control js-form-dd js-calendar">
                      <div
                        className="searchFormItem__button"
                        onClick={() =>
                          setCurrentActiveDD((pre) =>
                            pre == "calender" ? "" : "calender",
                          )
                        }
                      >
                        <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
                          <i className="text-20 icon-calendar"></i>
                        </div>
                        <div className="searchFormItem__content">
                          <h5>When</h5>
                          <div>
                            <span className="js-first-date">
                              <Calender
                                active={currentActiveDD === "calender"}
                              />
                            </span>
                            <span className="js-last-date"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="searchFormItem js-select-control js-form-dd">
                      <div
                        className="searchFormItem__button"
                        onClick={() =>
                          setCurrentActiveDD((pre) =>
                            pre == "tourType" ? "" : "tourType",
                          )
                        }
                      >
                        <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
                          <i className="text-20 icon-flag"></i>
                        </div>
                        <div className="searchFormItem__content">
                          <h5>Tour Type</h5>
                          <div className="js-select-control-chosen">
                            {tourType ? tourType : "All tour"}
                          </div>
                        </div>
                      </div>
                      <TourType
                        setTourType={setTourType}
                        active={currentActiveDD === "tourType"}
                      />
                    </div>
                  </div>

                  <div className="searchForm__button">
                    <button
                      onClick={() => router.push("/tour-list-7")}
                      className="button -dark-1 bg-accent-2 size-60 rounded-200 text-white"
                    >
                      <i className="icon-search text-16"></i>
                    </button>
                  </div>
                </div>
              </div> */}

              <div>
                <h1 className="hero__title text-white relative">
                  <div className="testimonials__icon size-6 absolute" style={{top:"-30px" , left:"100px", scale:2}}>
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3165 0.838867C12.1013 1.81846 10.9367 3.43478 9.77215 5.63887C8.65823 7.84295 8 10.2429 7.8481 12.8389H12.4557C12.4051 8.87152 13.6203 5.24703 16 1.91642L13.3165 0.838867ZM5.51899 0.838867C4.25316 1.81846 3.08861 3.43478 1.92405 5.63887C0.810126 7.84295 0.151899 10.2429 0 12.8389H4.60759C4.55696 8.87152 5.77215 5.19805 8.20253 1.91642L5.51899 0.838867Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="testimonials__icon size-6 absolute" style={{bottom:"0px", right:"185px" , scale:2 , transform:"rotate(180deg)"}}>
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3165 0.838867C12.1013 1.81846 10.9367 3.43478 9.77215 5.63887C8.65823 7.84295 8 10.2429 7.8481 12.8389H12.4557C12.4051 8.87152 13.6203 5.24703 16 1.91642L13.3165 0.838867ZM5.51899 0.838867C4.25316 1.81846 3.08861 3.43478 1.92405 5.63887C0.810126 7.84295 0.151899 10.2429 0 12.8389H4.60759C4.55696 8.87152 5.77215 5.19805 8.20253 1.91642L5.51899 0.838867Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span style={{fontFamily:"sans-serif", fontSize:"3.5rem"}}>go where you feel <br /> most <i>alive</i></span>
                </h1>
               
                <div className="hero__text text-white mt-10">
                  Personalized Itineraries, Hassle-Free Bookings
                  <br className="lg:d-none" />
                  Relax, We’ve Got It All!
                  <div className="mt-3">
                    <button
                      onClick={() => router.push("/tour-list-6")}
                      className="button py-16 px-25 mx-auto p-2 -dark-1 bg-accent-1 size-1500 rounded-100 text-white"
                    >
                      Inspire me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
