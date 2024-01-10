import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "./config";
import { v4 as uuidv4 } from "uuid";
import { addRental } from "./firestore";

export const uploadRentalImage = async (
  file: any,
  rentalUid: any,
  {
    carName,
    carPrice,
    carModel,
    carYear,
    carMake,
    carSeats,
    carDescription,
    carFuel,
  }: any
) => {
  const storageUID = uuidv4();
  // ... existing code ...

  if (file) {
    const storage = getStorage();
    const storageRef = ref(storage, `rentals/${rentalUid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          await addRental(
            rentalUid,
            carName,
            carPrice,
            downloadURL,
            carModel,
            carYear.toString(),
            carMake,
            carSeats.toString(),
            carDescription,
            carFuel
          );
        });
      }
    );
    return true;
  }
  return false;

  // ... existing code ...
};
