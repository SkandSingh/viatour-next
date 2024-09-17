import Image from "next/image";
import React from "react";

export default function Banner10() {
  return (
    <section className="layout-pt-xl layout-pb-xl relative mt-60">
      <div className="sectionBg">
        <Image
          src="/img/cta/9/bg.jpg"
          width={1920}
          height={501}
          alt="image"
          className="img-cover"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-40 md:text-30 fw-700"
            >
              Be the First to Know 
              <br className="md:d-none" /> About Hidden Gems!
            </h2>
            <p data-aos="fade-up" data-aos-delay="" className="mt-20">
            Join Us for the Latest Travel Trends and Deals
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="singleInput type-1 -light mt-30"
            >
              <input
                type="text"
                placeholder="Your email"
                className="bg-white"
              />
              <button className="button -md -dark-1 bg-accent-1 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
