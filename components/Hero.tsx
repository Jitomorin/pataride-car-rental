import BgShape from "/images/hero/hero-bg.png";
import HeroCar from "/images/hero/main-car.png";
import { useEffect, useState } from "react";
import CTAButton from "./HeroButton";
import HeroButton from "./HeroButton";
import StickySocialMediaBar from "./StickySocialMediaBar";
import Loading from "./Loading";
import NextImage from "next/image";
import { useTheme } from "./Theme";

function Hero() {
  const [goUp, setGoUp] = useState(false);
  const { theme }: any = useTheme();

  // const scrollToTop = () => {
  //   window.scrollTo({ top: (0, 0), behavior: "smooth" });
  // };

  // const bookBtn = () => {
  //   const doc: any = document;
  //   doc
  //     ?.querySelector("#booking-section")
  //     .scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   const onPageScroll = () => {
  //     if (window.pageYOffset > 600) {
  //       setGoUp(true);
  //     } else {
  //       setGoUp(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onPageScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onPageScroll);
  //   };
  // }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          {theme === "light" ? (
            <img
              className="bg-shape"
              src={"/images/hero/hero-bg.png"}
              alt="bg-shape"
            />
          ) : (
            <></>
          )}
          <div className="hero-content">
            <div className="hero-content__text">
              {/* <h4>Explore</h4> */}
              <h1>
                <div>Pata Ride</div> Yako
              </h1>
              <h2>the largest car-sharing marketplace in Africa</h2>
              <p>
                Experience the ride of a lifetime with the car you've always
                dreamed of. Enjoy unparalleled affordability, limitless mileage,
                and the freedom to pick up your dream car at your convenience.
                Elevate your journey with unbeatable prices and a range of
                flexible options that go beyond the ordinary.
              </p>
              {/* <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/rent-now"
                >
                  Browse Cars &nbsp;
                </Link>

                
              </div> */}
              <HeroButton name={"Browse cars"} link="/rent-now" />
            </div>

            {/* NextImage */}
            <img
              src={"/images/hero/main-car.png"}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
          {/* <Loading/> */}
        </div>

        {/* page up */}
      </section>
    </>
  );
}

export default Hero;
