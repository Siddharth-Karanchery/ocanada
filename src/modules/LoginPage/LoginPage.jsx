import * as React from "react";
import "./LoginPage.css";

import { Typography, Box, Button, TextField } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";

import { appTheme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASEURL,
  projectId: process.env.REACT_APP_FB_PROJECTID,
  storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FB_APPID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENTID,
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const CssTextField = styled(TextField)({
  "& label": {
    color: "grey",
  },
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
      color: "grey",
    },
    "& input": { color: "white" },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export const LoginPage = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [loginError, setLoginError] = React.useState({});

  const [formError, setFormError] = React.useState(true);

  let navigate = useNavigate();

  const CustomHelperText = (props) => {
    return (
      <FormHelperText sx={{ color: red[600] }}>
        {props.helperText}
      </FormHelperText>
    );
  };

  const formchecker = () => {
    if (emailError || passwordError) setFormError(true);
    else setFormError(false);
  };
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
    if (!email.includes("@")) setEmailError(true);
    else if (email.length < 3) setEmailError(true);
    else setEmailError(false);
    formchecker();
  };

  const inputEmailChecker = (e) => {
    if (!email.includes("@")) setEmailError(true);
    else if (email.length < 3) setEmailError(true);
    else setEmailError(false);
    formchecker();
  };

  const inputPwdHandler = (e) => {
    setPassword(e.target.value);
    if (password.length === 0) setPasswordError(true);
    else setPasswordError(false);
    formchecker();
  };
  const inputPwdChecker = (e) => {
    if (password.length === 0) setPasswordError(true);
    else setPasswordError(false);
    formchecker();
  };

  const submitHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setUserDetails(user);
        setLoginError({
          state: false,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/wrong-password") {
          setLoginError({
            state: true,
            errorCode: errorCode,
            errorMessage: "Invalid Password!",
          });
        } else if (errorCode === "auth/user-not-found") {
          setLoginError({
            state: true.valueOf,
            errorCode: errorCode,
            errorMessage: "User not found!",
          });
        }
      });
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box className="Login">
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Login
        </Typography>
        <Box className="Login__content">
          <Box className="Login__content__left">
            <img
              className="Login__content__left__image"
              alt=""
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-748.jpg?w=2000"
            />
          </Box>
          <Box className="Login__content__right">
            {loginError.state ? (
              <CustomHelperText helperText={loginError.errorMessage} />
            ) : (
              ""
            )}
            <Box className="Login__content__right__ele">
              <CssTextField
                error={emailError}
                label="E-Mail"
                type={"email"}
                required
                id="custom-css-outlined-input"
                onChange={inputEmailHandler}
                onMouseLeave={inputEmailChecker}
                className="CssTextField"
              />
            </Box>
            <Box className="Login__content__right__ele">
              <CssTextField
                error={passwordError}
                label="Password"
                type={"password"}
                required
                id="custom-css-outlined-input"
                className="CssTextField"
                onChange={inputPwdHandler}
                onMouseLeave={inputPwdChecker}
              />
            </Box>

            <Box className="Login__content__right__ele_buttonPanel">
              <Button outlined color="secondary" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button
                outlined
                color="error"
                disabled={formError}
                onClick={submitHandler}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
