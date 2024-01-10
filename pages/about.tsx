import Faq from "@/components/Faq";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";
import Team from "./Team";
import { useEffect, useState } from "react";
import { getAllData } from "@/utils/firebase/firestore";

function About() {
  const [numberOfRentals, setNumberOfRentals] = useState(0);

  useEffect(() => {
    const fetchRentals = async () => {
      const data = await getAllData("rentals");
      setNumberOfRentals(data.length);
    };
    fetchRentals();
  }, []);

  return (
    <>
      <Navbar />
      <section className="about-page">
        <HeroPages name="About" subRoute={false} />
        <div className="about_container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={"/images/about/about-main.jpg"}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={"/images/about/icon1.png"} alt="car-icon" />
                  <span>
                    <h4>{numberOfRentals}</h4>
                    <p>Cars you can rent</p>
                  </span>
                </div>
                {/* <div className="about-main__text__icons__box">
                  <img src={"/images/about/icon2.png"} alt="car-icon" />
                  <span>
                    <h4>1</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img
                    src={"/images/about/icon3.png"}
                    alt="car-icon"
                    className="last-fk"
                  />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
          <PlanTrip />
          <Team />
          <Faq />
        </div>
      </section>
      {/* <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3> +254 (20) 202 0099 </h3>
            </span>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default About;
