function Team() {
  const teamPpl = [
    { img: "/images/team/1.png", name: "Luke Miller", job: "Salesman" },
    { img: "/images/team/2.png", name: "Michael Diaz", job: "Business Owner" },
    { img: "/images/team/3.png", name: "Briana Ross", job: "Photographer" },
    { img: "/images/team/4.png", name: "Lauren Rivera", job: "Car Detailist" },
    { img: "/images/team/5.png", name: "Martin Rizz", job: "Mechanic" },
    { img: "/images/team/6.png", name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <section className="team-page">
        {/* <HeroPages name="Our Team" /> */}
        <div className="cotnainer">
          <h1 className="team-header">Our Team</h1>
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <Footer /> */}
      </section>
    </>
  );
}

export default Team;
