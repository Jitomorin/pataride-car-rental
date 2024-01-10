import Instructions from "@/components/Instructions";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import InstructionsGrid from "@/components/InstructionsGrid";
import HeroButton from "@/components/HeroButton";
import Button from "../components/Button";
import styled from "styled-components";
import { useAuthContext } from "@/contexts/AuthContext";

function Seller() {
  const { user }: any = useAuthContext();
  return (
    <>
      <Navbar />
      <section className="models-section">
        <HeroPages subRoute={false} name="Seller" />
        <div className="container"></div>
        <Instructions />
        <InstructionsGrid />
        <ButtonWrapper>
          {user != null ? (
            <HeroButton name={"Enlist your car"} link="/register-car" />
          ) : (
            <HeroButton name={"Become a seller"} link="/signup" />
          )}
        </ButtonWrapper>
      </section>
    </>
  );
}

export default Seller;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;
