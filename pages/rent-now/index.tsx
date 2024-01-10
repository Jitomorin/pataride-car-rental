import HeroPages from "../../components/HeroPages";
import { useEffect, useState } from "react";
import { getData } from "@/utils/firebase/firestore";
import CarModelCard from "@/components/CarModelCard";
import { Car } from "@/components/CarData";
import { GetServerSideProps } from "next";
import { getClient } from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";

export interface RentNowProps {
  cars: Car[];
}

function RentNow(props: RentNowProps) {
  // const [cars, setCars] = useState([]);
  const { cars } = props;

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     let docs = [];
  //     await getData("rentals").then((data: any) => {
  //       console.log(data);
  //       data.forEach((doc: any) => {
  //         docs.push(doc);
  //       });
  //       setCars(data);
  //     });
  //   };
  //   fetchCars();
  // }, []);
  return (
    <>
      <section className="models-section">
        <HeroPages subRoute={false} name="Cars" />
        <div className="container">
          <div className="models-div">
            {cars !== null ? (
              <>
                {cars.map((car: any) => {
                  return <CarModelCard car={car} />;
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="book-banner">
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
        </div>
      </section>
    </>
  );
}

export default RentNow;

export const getServerSideProps: GetServerSideProps<RentNowProps> = async (
  ctx
) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const cars = await getData("rentals");
  console.log("Server Side Props: ", cars);

  if (!cars) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cars,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
