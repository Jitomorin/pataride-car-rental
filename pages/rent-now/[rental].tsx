import React, { useState } from "react";
import { SharedPageProps } from "../_app";
import styled from "styled-components";
import { GetServerSideProps, GetStaticPathsResult, GetStaticProps } from "next";
import { Service } from "@/sanity/lib/queries";
import {
  getAllServiceSlugs,
  getClient,
  getServiceBySlug,
} from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";
import { useRouter } from "next/router";
import service from "@/sanity/schemas/service";
import Page from "@/components/Page";
import { RentNowProps } from ".";
import { getDocument } from "@/utils/firebase/firestore";
import { Car } from "@/components/CarData";
import HeroPages from "@/components/HeroPages";
import Loading from "@/components/Loading";
import HeroButton from "@/components/HeroButton";
import Link from "next/link";
import { useTheme } from "@/components/Theme";
import Container from "@/components/Container";
import Snackbar from "@/components/Snackbar";

// interface pageProps extends SharedPageProps {
//     service: Service;
// }
interface CarProps extends SharedPageProps {
  car: Car;
}

interface Query {
  [key: string]: string;
}

const Wrapper = styled.section<{ theme: any }>`
  background-color: ${(props) =>
    props.theme === "light" ? "#fff" : "#17191a"};
`;
const BookButton = styled.div<{ theme: any }>`
  background-color: #f8d521;
  padding: 1.8rem 3rem;
  border-radius: 0.3rem;
  transition: all 0.3s;
  font-size: 1.8rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    scale: 1.07;
  }
`;

export default function carSlugRoute(props: CarProps) {
  const router = useRouter();
  const { theme }: any = useTheme();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Default Message");
  const { car }: any = props;
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Wrapper theme={theme}>
      <HeroPages subRoute={true} name={`${car.name}`} />
      <Container>
        <div
          style={
            theme === "light"
              ? {
                  width: "80%",
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#010103",
                }
              : {
                  width: "80%",
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#fff",
                }
          }
        >
          <div
            style={{
              width: "100%",

              marginBottom: "5rem",
              marginTop: "5rem",
            }}
          >
            <div className="car-model-card__img">
              <img src={car.image} alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="car-model-card__text">
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {car.name}
                </h3>
                <p
                  style={{
                    fontSize: "1.5rem",
                    width: "50rem",
                  }}
                >
                  {car.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "50rem",
                    gap: "0.4rem",
                    paddingTop: "2rem",
                    marginTop: "2rem",
                    borderTop: "1px solid #c6c6c6",
                    borderBottom: "1px solid #c6c6c6",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                      width: "auto",
                      textAlign: "right",
                      borderRight: "1px solid #c6c6c6",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                    className="car-model-card__text__details__item"
                  >
                    <span>{car.make}</span>
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                      padding: "0px",
                      width: "auto",
                      textAlign: "right",
                      borderRight: "1px solid #c6c6c6",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                    className="car-model-card__text__details__item"
                  >
                    <h4>Price</h4>
                    <p>{`Ksh ${car.price}`}</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                      padding: "0px",
                      width: "auto",
                      textAlign: "right",
                      borderRight: "1px solid #c6c6c6",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                    className="car-model-card__text__details__item"
                  >
                    <h4>Seats</h4>
                    <p>{car.seats}</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                      padding: "0px",
                      width: "auto",
                      textAlign: "right",
                      borderRight: "1px solid #c6c6c6",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                    className="car-model-card__text__details__item"
                  >
                    <h4>Fuel</h4>
                    <p>{car.fuel}</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                      padding: "0px",
                      width: "auto",
                      textAlign: "right",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                    className="car-model-card__text__details__item"
                  >
                    <h4>Year</h4>
                    <p>{car.year}</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  marginTop: "auto",
                  // marginBottom: "auto",
                }}
              >
                <BookButton
                  onClick={() => {
                    setSnackbarMessage("Feature not available yet");
                    setSnackbarOpen(true);
                  }}
                  theme={theme}
                >
                  {/* <Link href="">Book Ride</Link> */}
                  Book Ride
                </BookButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3> +254 (20) 202 0099 </h3>
            </span>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
      <Snackbar
        message={snackbarMessage}
        isVisible={snackbarOpen}
        onClose={() => {
          setSnackbarOpen(false);
        }}
      />
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps<CarProps, Query> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  console.log("params", params);
  const car = await getDocument("rentals", params.rental);

  if (!car) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car: car,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
// export const getStaticPaths = async () => {
//   const slugs = await getAllServiceSlugs();

//   return {
//     paths: slugs?.map(({ slug }) => `/services/${slug}`) || [],
//     fallback: true,
//   };
// };
