import { useEffect, useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import { FacebookIcon, LinkedinIcon } from "react-share";
import NextLink from "next/link";
import { media } from "../utils/media";
import Link from "next/link";

export default function StickySocialMediaBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add event listener to check screen width on mount and resize
    function handleResize() {
      setIsMobile(window.innerWidth != 768); // Adjust the breakpoint as needed
    }

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper>
      <ShareBar>
        <SocialmediaLink>
          <Link target="_blank" href="#" passHref>
            <img
              src="/linkedin-icon.png"
              alt="Linkedin Link"
              width={isMobile ? 45 : 30}
              height={isMobile ? 45 : 30}
            />
            {/* <LinkedinIcon size={isMobile ? 50 : 40} round={true} /> */}
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link target="_blank" href="#" passHref>
            {/* <TwitterIcon size={50} round={true} /> */}
            <img
              src="/instagram-icon.png"
              alt="Instagram Link"
              width={isMobile ? 45 : 30}
              height={isMobile ? 45 : 30}
            />
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link target="_blank" href="#" passHref>
            <img
              src="/facebook-icon.png"
              alt="Whatsapp Link"
              width={isMobile ? 45 : 30}
              height={isMobile ? 45 : 30}
            />
            {/* <FacebookIcon size={isMobile ? 50 : 40} round={true} /> */}
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link target="_blank" href="#" passHref>
            {/* <TwitterIcon size={50} round={true} /> */}
            <img
              src="/whatsapp-icon.png"
              alt="Whatsapp Link"
              width={isMobile ? 45 : 30}
              height={isMobile ? 45 : 30}
            />
          </Link>
        </SocialmediaLink>
      </ShareBar>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translateY(-20%);
  margin-right: 1rem;
  z-index: 1000;
  ${media("<tablet")} {
    display: none;
  }
`;
const ShareBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialmediaLink = styled.div`
  cursor: pointer;
  padding: 0, 0.9rem;
  transition: ease-in-out 0.3s;

  &:hover {
    scale: 1.2;
    transition: ease-in-out 0.3s;
  }
`;
