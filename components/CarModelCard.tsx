import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import React from "react";

const CarModelCard = (car: any) => {
  const { user }: any = useAuthContext();
  return (
    <div className="models-div__box">
      <div className="models-div__box__img">
        <img src={car.car.image} alt="car_img" />
        <div className="models-div__box__descr">
          <div className="models-div__box__descr__name-price">
            <div className="models-div__box__descr__name-price__name">
              <p>{car.car.name}</p>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4>{`Ksh${car.car.price}`}</h4>
              <p>per day</p>
            </div>
          </div>
          <div className="models-div__box__descr__name-price__details">
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {car.car.make}
            </span>
            <span style={{ textAlign: "right" }}>
              {car.car.year} <i className="fa-solid fa-car-side"></i>
            </span>
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
              {`${car.car.seats} seats`}
            </span>
            <span style={{ textAlign: "right" }}>
              {car.car.fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
          </div>
          <div className="models-div__box__descr__name-price__btn">
            {user == null ? (
              <Link href="/login">Book Ride</Link>
            ) : (
              <Link href={`/rent-now/${car.car.uid}`}>Book Ride</Link>
            )}

            {/* <Link href={`/rent-now/${car.car.uid}`}>Book Ride</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModelCard;
