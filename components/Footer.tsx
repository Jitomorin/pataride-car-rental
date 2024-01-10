import Link from "next/link";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li className="footer_title">
                <span>Pata-ride</span> Rentals
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <Link href="tel: +254 (20) 202 0099 ">
                  <i className="fa-solid fa-phone"></i> +254 (20) 202 0099
                </Link>
              </li>

              <li>
                <Link
                  href="mailto: 
                  info@pata-ride.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  info@pata-ride.com
                </Link>
              </li>
              <li>
                <p style={{ fontSize: "14px", fontFamily: "Oswald" }}>
                  Powered by:
                </p>
                <Link
                  href="https://mocapital.co.ke/"
                  target="_blank"
                  style={{ fontSize: "14px", fontFamily: "Oswald" }}
                >
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  Mo Capital Company Limited
                </Link>
              </li>

              <li>
                <p style={{ fontSize: "14px" }}>icons by Icons8</p>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li className="footer_title">Company</li>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#home">Rent now</Link>
              </li>
              <li>
                <Link href="#home">Become a host</Link>
              </li>
              <li>
                <Link href="#home">About</Link>
              </li>
              <li>
                <Link href="#home">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy">T's & C's</Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li className="footer_title">Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li className="footer_title">Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
