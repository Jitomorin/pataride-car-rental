import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";
import { media } from "utils/media";
import MailSentState from "../../components/MailSentState";
import Map from "components/Map";

export default function MapSection() {
  return (
    <div className="map_wrapper">
      <h3>Come see us!</h3>
      <Map />
    </div>
  );
}

const Wrapper = styled.div`
  flex: 2;
  margin: 0 10rem;

  h3 {
    font-size: 3.5rem;
    /* font-weight: bold; */
    color: white;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-family: "Oswald", sans-serif;
  }
  ${media("<=largeDesktop")} {
    max-width: 90%;
  }
  ${media("<tablet")} {
    margin: 0 2rem;
  }
`;
