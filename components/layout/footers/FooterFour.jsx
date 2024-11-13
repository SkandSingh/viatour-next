import Paymentcards from "../components/Paymentcards";
import Socials from "../components/Socials";
// import Image from "next/image";
// import FooterLinksTwo from "../components/FooterLinksTwo";

export default function FooterFour() {
  return (
    <footer className="footer -type-1 -light" style={{marginTop:"20px"}} >
      <div className="footer__main" style={{background:"#ec662a"}} >
        <div className="container" >
          <div className="footer__info" >
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50 text-white"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500 text-white text-white">
                      Speak to our expert at
                      <span className="text-white">1-800-453-6744</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title text-white">
                    Follow Us
                  </div>

                  <div className="footerSocials__icons text-white">
                  <Socials />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-white-15-top">
          <div className="container">
            <div className="footer__content">
              <div className="row y-gap-40 justify-between">
                <div className="col-lg-3 col-md-6">
                  <h4 className="text-20 fw-500 text-white">Get Free Consulting Now!</h4>

                  <div className="y-gap-10 mt-20 text-white">
                    <a className="d-block" href="#">
                      About
                    </a>
                    <a className="d-block" href="#">
                    About Us
                    </a>
                    <a className="d-block" href="#">
                    Mission
                    </a>
                  </div>
                  
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="text-20 fw-500 text-white">Our Services</h4>

                  <div className="y-gap-10 mt-20 text-white">
                    <a className="d-block" href="#">
                    Travel Bookings
                    </a>
                    <a className="d-block" href="#">
                    Accommodations
                    </a>
                    <a className="d-block" href="#">
                    Personalized Itineraries
                    </a>
                    <a className="d-block" href="#">
                    Local experience suggestions
                    </a>
                    <a className="d-block" href="#">
                    Group & Corporate Travel
                    </a>
                    <a className="d-block" href="#">
                    Hassle-Free Visa Booking Assistance
                    </a>
                  </div>
                  
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="text-20 fw-500 text-white">Popular destinations</h4>

                  <div className="y-gap-10 mt-20 text-white">
                    <a className="d-block" href="#">
                    Thailand
                    </a>
                    <a className="d-block" href="#">
                    Sri Lanka
                    </a>
                    <a className="d-block" href="#">
                    Nepal 
                    </a>
                    <a className="d-block" href="#">
                    Bhutan 
                    </a>
                    <a className="d-block" href="#">
                    UAE 
                    </a>
                    <a className="d-block" href="#">
                    Kazakhstan
                    </a>
                    <a className="d-block" href="#">
                    France 
                    </a>
                    <a className="d-block" href="#">
                    Spain 
                    </a>
                  </div>
                  
                </div>

                {/* <FooterLinksTwo /> */}

                <div className="col-lg-3 col-md-6">
                  <h4 className="text-20 fw-500 text-white">Social Media Links</h4>
                  {/* <p className="text-white mt-20">
                    Subscribe to the free newsletter and stay up to date
                  </p> */}

                  {/* <div className="footer__newsletter">
                    <input type="Email" placeholder="Your email address" />
                    <button>Send</button>
                  </div>

                  <h4 className="text-20 fw-500 text-white mt-30">
                    Mobile Apps
                  </h4> */}

                  <div className="mt-10">
                    <a className="d-flex items-center text-white" href="#">
                      <i className="icon-facebook text-16 mr-10"></i>
                      FaceBook
                    </a>

                    <a
                      className="d-flex items-center text-white mt-10"
                      href="#"
                    >
                      <i className="icon-twitter text-16 mr-10"></i>
                      Twitter
                    </a>
                    <a
                      className="d-flex items-center text-white mt-10"
                      href="#"
                    >
                      <i className="icon-instagram text-16 mr-10"></i>
                      Instagram
                    </a>
                    <a
                      className="d-flex items-center text-white mt-10"
                      href="#"
                    >
                      <i className="icon-linkedin text-16 mr-10"></i>
                      Linkedin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-white-15-top">
        <div className="container">
          <div className="footer__bottom">
            <div className="row y-gap-5 justify-between items-center">
              <div className="col-auto ">
                <div>© Copyright Travel Tailor {new Date().getFullYear()}</div>
              </div>

              <div className="col-auto">
                <div className="footer__images d-flex items-center x-gap-10">
                  <Paymentcards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
