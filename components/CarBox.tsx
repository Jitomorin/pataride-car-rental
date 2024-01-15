import { media } from "@/utils/media";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Spinner = styled.div`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 48px;
  height: 48px;
  border: 5px solid rgba(0, 0, 0, 0.2588235294);
  border-bottom-color: #4e4e4e;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  right: 43%;
`;
const Wrapper = styled.div`
  gap: 11rem;
  display: flex;
  justify-content: space-between;
  ${media("<=largeDesktop")} {
    gap: 2rem;
  }
  ${media("<=tablet")} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
`;
const PickCar = styled.div`
  width: 50rem;
  position: relative;
  img {
    width: 100%;
    margin-top: 6rem;
  }
  ${media("<=tablet")} {
    width: 100%;
  }
`;
const Description = styled.div`
  width: 25rem;
`;
const Price = styled.div<{ theme: any }>`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light" ? "#999291" : "#414141"};
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  padding: 0.3rem 1.9rem;
  white-space: nowrap;
  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;
const Table = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  font-size: 1.4rem;
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;
const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  grid-template-rows: auto;
  padding: 0.9rem 0.5rem;
  border-bottom: 2px solid #706f7b;
  border-right: 2px solid #706f7b;
  border-left: 2px solid #706f7b;
  span:nth-child(1) {
    border-right: 2px solid #706f7b;
  }
`;

function CarBox({ data, carID, theme }: any) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car: any, id: any) => (
        <Wrapper>
          {/* car */}
          <PickCar>
            {carLoad && <Spinner />}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </PickCar>
          {/* description */}
          <Description>
            <Price theme={theme}>
              <span>Ksh{car.price}</span>/ per day
            </Price>
            <Table theme={theme}>
              <Column>
                <span>Model</span>
                <span>{car.model}</span>
              </Column>

              <Column>
                <span>Mark</span>
                <span>{car.mark}</span>
              </Column>

              <Column>
                <span>Year</span>
                <span>{car.year}</span>
              </Column>

              <Column>
                <span>Doors</span>
                <span>{car.doors}</span>
              </Column>

              <Column>
                <span>AC</span>
                <span>{car.air}</span>
              </Column>

              <Column>
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </Column>

              <Column>
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </Column>
            </Table>
            {/* btn cta */}
            <Link className="cta-btn" href="#booking-section">
              Reserve Now
            </Link>
          </Description>
        </Wrapper>
      ))}
    </>
  );
}

export default CarBox;
