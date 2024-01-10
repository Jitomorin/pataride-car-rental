import { carMakes } from "@/components/CarData";
import HeroPages from "@/components/HeroPages";
import { useAuthContext } from "@/contexts/AuthContext";
import { addRental } from "@/utils/firebase/firestore";
import { uploadRentalImage } from "@/utils/firebase/storage";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Snackbar from "@/components/Snackbar";
import { useRouter } from "next/router";

const RegisterCar = () => {
  const { user }: any = useAuthContext();
  const router = useRouter();
  const [carName, setCarName] = React.useState("");
  const [carMake, setCarMake] = React.useState("Toyota");
  const [carModel, setCarModel] = React.useState("");
  const [carYear, setCarYear] = React.useState(2010);
  const [carPrice, setCarPrice] = React.useState("");
  const [carSeats, setCarSeats] = React.useState(5);
  const [carFuel, setCarFuel] = React.useState("Diesel");
  const [carDescription, setCarDescription] = React.useState("");
  const [carImage, setCarImage] = React.useState();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] =
    React.useState("Default Message");

  const clearFields = () => {
    setCarName("");
    setCarMake("Toyota");
    setCarModel("");
    setCarYear(2010);
    setCarPrice("");
    setCarSeats(5);
    setCarFuel("Diesel");
    setCarDescription("");
    setCarImage(undefined);
  };
  const carNameCheck = () => {
    return carName !== "";
  };
  const carPriceCheck = () => {
    return carPrice !== "";
  };
  const carModelCheck = () => {
    return carModel !== "";
  };
  const carMakeCheck = () => {
    return carMake !== "";
  };
  const carSeatsCheck = () => {
    return carSeats > 2;
  };
  const carFuelCheck = () => {
    return carFuel !== "";
  };
  const carDescriptionCheck = () => {
    return carDescription !== "";
  };
  const carImageCheck = () => {
    return carImage !== undefined;
  };

  const registerCar = async () => {
    if (
      carNameCheck() &&
      carPriceCheck() &&
      carModelCheck() &&
      carMakeCheck() &&
      carSeatsCheck() &&
      carFuelCheck() &&
      carDescriptionCheck() &&
      carImageCheck()
    ) {
      console.log("All fields are filled");
      const rentalUid = uuidv4();
      await uploadRentalImage(carImage!, rentalUid, {
        carName,
        carPrice,
        carModel,
        carYear,
        carMake,
        carSeats,
        carDescription,
        carFuel,
      }).then((res) => {
        if (res) {
          setSnackbarMessage("Car registered successfully");
          setSnackbarOpen(true);
          clearFields();
        } else {
          setSnackbarMessage("something went wrong");
          setSnackbarOpen(true);
        }
      });
    } else {
      setSnackbarMessage("All fields are not filled");
      setSnackbarOpen(true);
      return;
    }
  };

  return (
    <>
      <section className="models-section">
        <HeroPages name="Cars" />
        <div className="container">
          <div className="enlist-div__form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Your form submission logic here
              }}
            >
              <label>
                Name
                {!carNameCheck() ? <b>*</b> : ""}
              </label>
              <input
                value={carName}
                onChange={(e: any) => {
                  setCarName(e.target.value);
                }}
                type="text"
                placeholder="Enter your cars full name"
              ></input>

              <label>
                Price per day
                {!carPriceCheck() ? <b>*</b> : ""}
              </label>
              <input
                value={carPrice}
                onChange={(e: any) => {
                  setCarPrice(e.target.value);
                }}
                type="number"
                placeholder="Enter your rate per day"
              ></input>
              <label>
                Upload an image
                {!carImageCheck() ? <b>*</b> : ""}
              </label>
              <input
                type="file"
                value={carImage}
                accept="image/*"
                onChange={(e: any) => {
                  if (e.target.files.length > 0) {
                    const file = e.target.files[0];
                    // Now you can send this file to your server or read it in the client
                    setCarImage(file);
                    console.log(file);
                  }
                }}
              />
              <label>
                Model
                {!carModelCheck() ? <b>*</b> : ""}
              </label>
              <input
                value={carModel}
                onChange={(e: any) => {
                  setCarModel(e.target.value);
                }}
                type="text"
                placeholder="Enter the model of the car"
              ></input>
              <label>
                Make
                {!carMakeCheck() ? <b>*</b> : ""}
              </label>
              <select
                onChange={(e) => {
                  setCarMake(e.target.value);
                }}
                name="fuelType"
                placeholder="Enter the model of the car"
                value={carMake}
              >
                {carMakes.map((make: any, index: any) => {
                  return (
                    <option key={index} value={make.name}>
                      {make.name}
                    </option>
                  );
                })}
              </select>
              <label>
                Year
                {/* <b>*</b> */}
              </label>
              <input
                onChange={(e: any) => {
                  setCarYear(e.target.value);
                }}
                type="number"
                min="1900"
                max="2099"
                step="1"
                value={carYear}
              />
              <label>
                Number of seats
                {!carSeatsCheck() ? <b>*</b> : ""}
              </label>
              <input
                value={carSeats}
                onChange={(e: any) => {
                  setCarSeats(e.target.value);
                }}
                type="number"
                placeholder="Enter your rate per day"
              ></input>

              <label>
                Fuel
                {!carFuelCheck() ? <b>*</b> : ""}
              </label>
              <select
                onChange={(e) => {
                  setCarFuel(e.target.value);
                }}
                name="fuelType"
                id="fuelType"
              >
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
              </select>

              {/* <label>
                Air <b>*</b>
              </label>
              <input type="number" placeholder="Enter your rate per day"></input> */}

              <label>
                Description
                {!carDescriptionCheck() ? <b>*</b> : ""}
              </label>
              <textarea
                value={carDescription}
                onChange={(e: any) => {
                  setCarDescription(e.target.value);
                }}
                placeholder="Write your description here"
              ></textarea>

              <button
                onClick={() => {
                  registerCar();
                }}
              >
                Register your car
              </button>
            </form>
          </div>
        </div>
        <Snackbar
          message={snackbarMessage}
          isVisible={snackbarOpen}
          onClose={() => {
            setSnackbarOpen(false);
          }}
        />
      </section>
    </>
  );
};

export default RegisterCar;
