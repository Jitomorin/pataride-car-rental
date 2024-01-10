import Link from "next/link";
import HeroPages from "../components/HeroPages";
import MapSection from "@/views/ContactPage/MapSection";

function Contact() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="contact-page">
        <HeroPages name="Contact" subRoute={false} />
        <div className="contact_container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                Contact us about anything related to our company or services.
                We'll do our best to get back to you as soon as possible.
              </p>
              <div className="link_container">
                <Link href="/">
                  <i className="fa-solid fa-phone"></i>&nbsp; +254 (20) 202 0099
                </Link>
                <Link href="/">
                  <i className="fa-solid fa-envelope"></i>&nbsp;
                  info@pata-ride.com
                </Link>
                <Link href="/">
                  <i className="fa-solid fa-location-dot"></i>&nbsp; Nairobi •
                  Kahawa Sukari
                </Link>
              </div>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your full name"></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="Enter your email"></input>

                <label>
                  How can we help you? <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
            <MapSection />
          </div>
        </div>

        {/* <Footer /> */}
      </section>
    </>
  );
}

export default Contact;
