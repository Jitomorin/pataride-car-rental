import Link from "next/link";
import Logo from "/images/logo/Pata Ride Text.png";
import { useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import ColorSwitcher from "./ColorSwitcher";
import { useAuthContext } from "@/contexts/AuthContext";
import Hamburger from "./Hamburger";
import { useTheme } from "./Theme";
import { logout } from "@/utils/firebase/authentication";

const ColorSwitcherContainer = styled.div`
  width: 4rem;
  margin: 0 1rem;
`;

function Navbar() {
  const [nav, setNav] = useState(false);
  const { user }: any = useAuthContext();
  const { theme }: any = useTheme();

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke={theme === "dark" ? "#fff" : "#000"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/rent-now">
                Rent now
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/seller">
                Become a host
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <NextImage
                src={"/images/logo/Pata Ride Text.png"}
                alt="logo-img"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="buyer-link" href="/rent-now">
                Rent now
              </Link>
            </li>
            <li>
              <Link className="seller-link" href="/seller">
                Become a host
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" href="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {user != null ? (
            <div className="navbar__buttons">
              <button
                onClick={async () => {
                  await logout();
                }}
                className="navbar__buttons__sign-in"
              >
                Log out
              </button>
              <ColorSwitcherContainer>
                <ColorSwitcher />
              </ColorSwitcherContainer>
            </div>
          ) : (
            <div className="navbar__buttons">
              <Link className="navbar__buttons__sign-in" href="/login">
                Sign In
              </Link>
              <Link className="navbar__buttons__sign-in" href="/signup">
                Register
              </Link>
              <ColorSwitcherContainer>
                <ColorSwitcher />
              </ColorSwitcherContainer>
            </div>
          )}

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke={theme === "dark" ? "#fff" : "#000"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="16" height="1" rx="1" ry="1" />
              <rect x="3" y="9" width="20" height="1" rx="1" ry="1" />
              <rect x="3" y="15" width="16" height="1" rx="1" ry="1" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
