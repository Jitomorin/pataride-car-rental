import AuthButton from "../components/AuthButton";
import InputField from "../components/InputField";
import Logo from "../images/logo/Pata Ride.png";
import GoogleIcon from "../images/logo/google_icon.png";
import FacebookIcon from "../images/logo/facebook_icon.png";
import XIcon from "../images/logo/twitter_icon.png";
import Appleicon from "../images/logo/apple_icon.png";
import OrDivider from "../components/OrDivider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { login } from "@/utils/firebase/authentication";
import Snackbar from "@/components/Snackbar";

function LogIn() {
  const { user }: any = useAuthContext();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const isFormValid = () => {
    if (!emailCheck() && !passwordCheck()) {
      return false;
    }

    return true;
  };

  const loginUser = () => {
    // run an error check in the fields
    if (!isFormValid()) {
      setSnackbarMessage("Please fill in all fields correctly");
      setSnackbarOpen(true);
      return;
    } else {
      login(email, password).then((userCredential) => {
        if (userCredential) {
          const user = userCredential.user;
          console.log(user);
          router.push("/");
        } else {
          setSnackbarMessage("Error logging in");
          setSnackbarOpen(true);
        }
      });
    }
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

            <h1>Welcome back!</h1>
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
            </div>

            <div className="button_container">
              <AuthButton
                onClick={() => {
                  loginUser();
                }}
                text={loading ? "Loading..." : "Continue"}
              />
            </div>
            <div className="auth_link">
              <p>Don't have an account?</p>
              <Link href="/signup">Sign up</Link>
            </div>
            <OrDivider />
            <div className="alt_signin_container">
              <div>
                <button
                  onClick={() => {
                    setSnackbarMessage("Feature not available yet");
                    setSnackbarOpen(true);
                  }}
                >
                  <img
                    src={"../images/logo/google_icon.png"}
                    alt="google-icon"
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSnackbarMessage("Feature not available yet");
                    setSnackbarOpen(true);
                  }}
                >
                  <img
                    src={"../images/logo/facebook_icon.png"}
                    alt="facebook-icon"
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSnackbarMessage("Feature not available yet");
                    setSnackbarOpen(true);
                  }}
                >
                  <img src={"../images/logo/twitter_icon.png"} alt="X-icon" />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setSnackbarMessage("Feature not available yet");
                    setSnackbarOpen(true);
                  }}
                >
                  <img src={"../images/logo/apple_icon.png"} alt="apple-icon" />
                </button>
              </div>
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

export default LogIn;
