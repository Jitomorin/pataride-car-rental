import NextImage from "next/image";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Rent your car now</h3>
              <h2>Quick & easy</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={"/images/plan/first-icon.png"} alt="icon_img" />
                <h3>For Executives</h3>
                <p>
                  Choose your ride, fuel your dreams. You now have a chance to
                  show up in style. Let your presence be acknowledged. Let them
                  feel your strength.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={"/images/plan/second-icon.png"} alt="icon_img" />
                <h3>For Tours</h3>
                <p>
                  Hidden beyond the rugged African terrains is unexpected
                  beauty. Here, you get an opportunity to venture beyond
                  challenges with ease. Choose your dream 4x4 ride and have a
                  unique expereence. Camp with ease, feel the untamed nature.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={"/images/plan/third-icon.png"} alt="icon_img" />
                <h3>For Movers</h3>
                <p>
                  Relocating? Worry no more. Find movers you can trust with your
                  home. Here, safety is a key aspect. We strictly vet movers to
                  give you a perfect gome experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
