import styled from "styled-components";
import Container from "components/Container";
import { useTheme } from "@/components/Theme";
// import NotFoundIllustration from 'components/NotFoundIllustration';

export default function NotFoundPage() {
  const { theme }: any = useTheme();
  return (
    <section className="not-found-wrapper">
      <div className="shared-container">
        {theme === "light" ? (
          <>
            <h1 className="not-found-title">404</h1>
            <div className="not-found-description">Page Not Found</div>
          </>
        ) : (
          <>
            <h1
              style={{
                color: "white",
              }}
              className="not-found-title"
            >
              404
            </h1>
            <div
              style={{
                color: "#6E747C",
              }}
              className="not-found-description"
            >
              Page Not Found
            </div>
          </>
        )}
      </div>
    </section>
  );
}

const Wrapper = styled.section`
  background: rgb(251, 251, 253);
  /* margin: 10rem 0; */
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 5rem;
  position: relative;
  width: auto;
  padding: 0 1rem;
  margin: auto, auto;
  margin-bottom: 3rem;
  ::after {
    content: "";
    position: absolute;
    top: 95%;
    width: 20%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #f8d521;
    /* Use a conic gradient mask to hide and show the bits you want */
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(
      from var(--start),
      white 0 var(--spread),
      transparent var(--spread)
    );
  }
  /* margin-top: 5rem; */
`;

const Description = styled.div`
  font-size: 3rem;
  opacity: 0.8;
  font-family: "Poppins", sans-serif;
  /* margin-top: 2.5rem; */
`;

const ImageContainer = styled.div`
  width: 25rem;
  margin: auto;
`;
