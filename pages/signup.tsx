import Link from "next/link";
import AuthButton from "../components/AuthButton";
import InputField from "../components/InputField";
import Logo from "../images/logo/Pata Ride.png";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { logout, signup } from "@/utils/firebase/authentication";
import { addData, addUser } from "@/utils/firebase/firestore";
import { set } from "sanity";
import { signOut } from "firebase/auth";
import Snackbar from "@/components/Snackbar";

function SignUp() {
  const { user }: any = useAuthContext();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Default Message");

  const emailCheck = () => {
    return email !== "" && email.includes("@") && email.includes(".com");
  };
  const passwordCheck = () => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-z]/i.test(password);
    return password.length >= 6 && hasUpperCase && hasNumber && hasLetter;
  };
  const confirmPasswordCheck = () => {
    return password === confirmPassword;
  };
  const fullNameCheck = () => {
    return fullName !== "";
  };

  const isFormValid = () => {
    if (
      emailCheck() &&
      passwordCheck() &&
      confirmPasswordCheck() &&
      fullNameCheck()
    ) {
      console.log("true");
      return true;
    }

    console.log("false");
    return false;
  };

  const createUser = (email: string, password: string, fullName: string) => {
    setLoading(true);
    // run an error check in the fields
    if (!isFormValid()) {
      setSnackbarMessage("Please fill in all fields correctly");
      setSnackbarOpen(true);
      setLoading(false);
      return;
    } else {
      signup(email, password).then((userCredential: any) => {
        if (!userCredential) {
          setSnackbarMessage("Error creating account");
          setSnackbarOpen(true);
        } else {
          setSnackbarMessage("Redirecting to login page");
          setSnackbarOpen(true);
          const uid = userCredential.user?.uid;
          addUser({ uid, email, fullName, isHost: false }).then(() => {
            console.log("User added successfully");
            logout().then(() => {
              console.log("User logged out");

              router.push("/login");
            });
          });
        }
      });
    }
    // signup function

    setLoading(false);
  };

  useEffect(() => {
    if (user != null) router.push("/");
  }, [user]);

  return (
    <>
      {/* <Navbar /> */}
      <section className="models-section">
        {/* <HeroPages name="Vehicle Models" /> */}
        <div className="signup_wrapper">
          <div className="signup_container">
            <Link href="/">
              <img
                src={"../images/logo/Pata Ride.png"}
                alt="logo"
                className=""
              />
            </Link>
            <h1>Create a new account</h1>
            <div className="input_container">
              <div style={{ display: "flex" }}>
                <span>Email</span>
                {
                  <span style={{ marginLeft: "1px", color: "red" }}>
                    {emailCheck() ? "" : "*"}
                  </span>
                }
              </div>

              <InputField
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
              />
            </div>
            <div className="input_container">
              <div style={{ display: "flex" }}>
                <span>Full Name</span>
                <span style={{ marginLeft: "1px", color: "red" }}>
                  {fullNameCheck() ? "" : "*"}
                </span>
              </div>

              <InputField
                value={fullName}
                onChange={(e: any) => {
                  setFullName(e.target.value);
                }}
                placeholder="Enter your full name"
              />
            </div>
            <div className="input_container">
              <div style={{ display: "flex" }}>
                <span>Password</span>
                <span style={{ marginLeft: "1px", color: "red" }}>
                  {passwordCheck() ? "" : "*"}
                </span>
              </div>

              <InputField
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your full password"
                type="password"
              />
              {passwordCheck() ? (
                <></>
              ) : (
                <span
                  style={{ fontSize: "10px", marginTop: "1rem", color: "red" }}
                >
                  Password must contain at least 6 characters 1 uppercase letter
                  and 1 number
                </span>
              )}
            </div>
            <div className="input_container">
              <div style={{ display: "flex" }}>
                <span>Confirm password</span>
                <span style={{ marginLeft: "1px", color: "red" }}>
                  {confirmPasswordCheck() ? "" : "*"}
                </span>
              </div>

              <InputField
                value={confirmPassword}
                onChange={(e: any) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm your password"
                type="password"
              />
            </div>
            <div className="button_container">
              <AuthButton
                onClick={() => {
                  createUser(email, password, fullName);
                }}
                text={loading ? "Loading..." : "Continue"}
              />
            </div>
            <div className="auth_link">
              <p>Already have an account?</p>
              <Link href="/login">Log in</Link>
            </div>
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
}

export default SignUp;
