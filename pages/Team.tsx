import Container from "@/components/Container";
import { useTheme } from "@/components/Theme";
import styled from "styled-components";

const Wrapper = styled.section<{ theme: any }>`
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#050505"};
`;
const Header = styled.section<{ theme: any }>`
  margin: 4rem auto;
  padding: 0 auto;
  text-align: center;
  color: ${(props) => (props.theme === "light" ? "#010103" : "#fff")};
  font-family: "Oswald", sans-serif;
  font-size: 5rem;
  /* border-bottom: #f8d521 5px solid; */
  position: relative;
  width: auto;
  ::after {
    content: "";
    position: absolute;
    top: 95%;
    width: 50%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #f8d521;
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(
      from var(--start),
      white 0 var(--spread),
      transparent var(--spread)
    );
  }
`;
const TeamContainer = styled.section<{ theme: any }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 4rem;
  align-items: center;
  text-align: center;
  padding: 10rem 2rem;
  width: 110rem;
  margin: 0 auto;
  @media (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
    width: -moz-fit-content;
    width: fit-content;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: -moz-fit-content;
    width: fit-content;
  }
`;
const Box = styled.div<{ theme: any }>`
  width: 33rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#0b0b0b"};
  box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.theme === "light" ? "#f6f6f6" : "#fff"};
  img {
    width: 100%;
  }
`;
const Description = styled.div<{ theme: any }>`
  color: ${(props) => (props.theme === "light" ? "#010103" : "#fff")};
  padding: 3rem;
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: #777777;
  }
`;

function Team() {
  const { theme }: any = useTheme();
  const teamPpl = [
    { img: "/images/team/1.png", name: "James Brian", job: "Marketing Head" },
    { img: "/images/team/2.png", name: "Diaz Lopez", job: "CEO" },
    { img: "/images/team/3.png", name: "Dwayne Johnson", job: "Developer" },
    {
      img: "/images/team/4.png",
      name: "Will Smith Rivera",
      job: "HR Consultant",
    },
    { img: "/images/team/5.png", name: "Martin Lawrence", job: "CEO" },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <Wrapper theme={theme}>
        {/* <HeroPages name="Our Team" /> */}
        <Container>
          <Header theme={theme}>Come meet our Team</Header>
          <TeamContainer>
            {teamPpl.map((ppl, id) => (
              <Box theme={theme} key={id}>
                <ImageContainer theme={theme}>
                  <img src={ppl.img} alt="team_img" />
                </ImageContainer>
                <Description theme={theme}>
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </Description>
              </Box>
            ))}
          </TeamContainer>
        </Container>

        {/* <Footer /> */}
      </Wrapper>
    </>
  );
}

export default Team;
