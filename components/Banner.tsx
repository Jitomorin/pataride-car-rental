import styled from "styled-components";

import CTAButton from "./CTAButton";
function Banner() {
  return (
    <>
      <section className="banner-section">
        <div className="banner_image_background">
          <Container>
            <div className="banner_container">
              <div className="banner-content">
                <div className="banner-content__text">
                  <h2>Reach out!</h2>
                  <p>
                    {/* Top Airports. Local Suppliers. <span>24/7</span> Support. */}
                    We'll get back to you as soon as possible
                  </p>
                </div>
                <CTAButton name="Contact us" link="/contact" />
                {/* <HeroButton name={'Browse cars'}/> */}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Banner;
const Container = styled.div`
  background: rgb(21, 35, 62, 0.8);

  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;
