import Img2 from "/images/testimonials/3.png";
import Img1 from "/images/testimonials/1.png";
import Img3 from "/images/testimonials/2.png";
import NextImage from "next/image";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              {/* <h4>Reviewed by People</h4> */}
              <h2>Hear from our clients & hosts</h2>
              <p>
                Both our clients & hosts have a lot of good experiences to share
                since they joined our car-sharing marketplace
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "As a host i am glad to be on this platform. A vast market of
                  well behavewd clients and a relieable intermediary to ensure
                  that i am genuinely and timely compensated"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={"/images/testimonials/3.png"} alt="user_img" />
                    <span>
                      <h4>Mtaani Ridez</h4>
                      {/* <p>Belgrade</p> */}
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "I will definetly have my road trip bookings with Pata-Ride. A
                  variety of off-road cars for the likes of us who like camping
                  and uneven terrain"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={"/images/testimonials/3.png"} alt="user_img" />
                    <span>
                      <h4>Bush Hunter</h4>
                      {/* <p>Novi Sad</p> */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={"/images/testimonials/2.png"} alt="user_img" />
                    <span>
                      <h4>Savannah Travels</h4>
                      {/* <p>Novi Sad</p> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
