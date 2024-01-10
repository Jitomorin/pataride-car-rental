import Image from "next/image";
import NextImage from "next/image";
import Link from "next/link";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={"/images/chooseUs/main.png"}
              style={{ width: "65%", height: "65%" }}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Pata Ride is an established car rental marketplace that aims
                  to connect car owners (hosts) with, name a few: travelers,
                  tourists, road trip enthusiasts, event planners, and migrants.
                  Our passion for this innovative concept is driven by the need
                  to provide logistic solutions with a memorable experience to
                  all. Pata Ride offers the host an attractive entrepreneurship
                  opportunity with broad market access. Similarly, our clientele
                  gets a similar degree of access to various vehicles. The power
                  to select your ride lies with you.
                </p>
                <Link href="#home">
                  Find Details &nbsp;
                  {/* <i className="fa-solid fa-angle-right"></i> */}
                </Link>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={"/images/chooseUs/icon1.png"} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={"/images/chooseUs/icon2.png"} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={"/images/chooseUs/icon3.png"} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
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

export default ChooseUs;
