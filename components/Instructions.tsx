import { useState } from "react";

function Instructions() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id: any) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id: any) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id: any) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="instructions-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              {/* <h5>FAQ</h5> */}
              <h2>Become a host at Pata ride with 3 easy steps</h2>
              <p>
                Join Pata Ride's Hosting Community: A Simple Three-Step Guide to
                Becoming a Host
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Open an account with Pata ride</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  No tedious process. Quickly open an account/shop with us.
                  Ensure accurate data is submitted. Guidelines are provided
                  during the registration process.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. List your beast</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Make an impression by posting accurate and quality images of
                  your ride. Let your potential clients fall in love with your
                  ride at first glance. Amuse them with the exterior, and
                  surprise them with the interior.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Set your daily rates</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  The beauty is that you get to set your own daily rates.
                  Scalable to fit your financial needs. But do not forget that
                  the market is watching!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Instructions;
