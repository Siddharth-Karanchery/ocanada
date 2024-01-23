import * as React from "react";
import "./Contact.css";

import { Typography, Box, Button, TextField } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";

import { appTheme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

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

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [subjectError, setSubjectError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const [formError, setFormError] = React.useState(false);

  let navigate = useNavigate();

  const CustomHelperText = (props) => {
    return (
      <FormHelperText sx={{ color: red[600] }}>
        {props.helperText}
      </FormHelperText>
    );
  };

  const formchecker = () => {
    if (nameError || emailError || subjectError || messageError)
      setFormError(true);
    else setFormError(false);
  };
  const inputNameHandler = (e) => {
    setName(e.target.value);
    if (!isNaN(name)) setNameError(true);
    else if (name.length < 3) setNameError(true);
    else setNameError(false);
    formchecker();
  };

  const inputNameChecker = (e) => {
    if (!isNaN(name)) setNameError(true);
    else if (name.length < 3) setNameError(true);
    else setNameError(false);
    formchecker();
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

  const inputSubjectHandler = (e) => {
    setSubject(e.target.value);
    if (subject.length < 3) setSubjectError(true);
    else setSubjectError(false);
    formchecker();
  };

  const inputSubjectChecker = (e) => {
    if (subject.length < 3) setSubjectError(true);
    else setSubjectError(false);
    formchecker();
  };

  const inputMessageHandler = (e) => {
    setMessage(e.target.value);

    if (message.length === 0) setMessageError(true);
    else setMessageError(false);
    formchecker();
  };

  const inputMessageChecker = (e) => {
    if (message.length === 0) setMessageError(true);
    else setMessageError(false);
    formchecker();
  };

  const submitHandler = () => {
    const emailData = {
      service_id: "service_9fojm7j",
      template_id: "ocanada_template",
      user_id: "user_NYKKjtpjlQJ6ULWwlH0Ha",
      template_params: {
        name: name,
        email: email,
        subject: subject,
        message: message,
        refnum: Date.now(),
      },
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailData),
    }).then(
      (result) => {
        alert("Mail Sent!");
        window.location.reload(false);
      },
      (error) => {
        alert("Something went wrong!");
      }
    );
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Box className="Contact">
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Contact
        </Typography>
        <Box className="Contact__content">
          <Box className="Contact__content__left">
            <img
              className="Contact__content__left__image"
              alt=""
              src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-1850.jpg?w=826&t=st=1664118608~exp=1664119208~hmac=f123eab084cc7ef054484d3108e50f6c0833f31da3f377e5698ccac9d6715af4"
            />
          </Box>
          <Box className="Contact__content__right">
            <Box className="Contact__content__right__ele">
              <CssTextField
                error={nameError}
                label="Name"
                type={"email"}
                required
                id="custom-css-outlined-input"
                onChange={inputNameHandler}
                onMouseLeave={inputNameChecker}
                className="CssTextField"
              />
              {nameError ? (
                <CustomHelperText helperText={"Please enter a valid name!"} />
              ) : null}
            </Box>
            <Box className="Contact__content__right__ele">
              <CssTextField
                label="E-Mail"
                type={"text"}
                required
                error={nameError}
                id="custom-css-outlined-input"
                className="CssTextField"
                onChange={inputEmailHandler}
                onMouseLeave={inputEmailChecker}
              />
              {emailError ? (
                <CustomHelperText helperText={"Please enter a valid email!"} />
              ) : null}
            </Box>
            <Box className="Contact__content__right__ele">
              <CssTextField
                label="Subject"
                required
                error={nameError}
                id="custom-css-outlined-input"
                className="CssTextField"
                onChange={inputSubjectHandler}
                onMouseLeave={inputSubjectChecker}
                autoComplete="new-password"
              />
              {subjectError ? (
                <CustomHelperText
                  helperText={"Please enter a valid subject!"}
                />
              ) : null}
            </Box>

            <Box className="Contact__content__right__ele">
              <CssTextField
                label="Message"
                required
                error={nameError}
                id="custom-css-outlined-input"
                className="CssTextField"
                multiline
                onChange={inputMessageHandler}
                onMouseLeave={inputMessageChecker}
                inputProps={{
                  style: {
                    height: "10rem",
                    padding: "0 14px",
                    textAlign: "initial",
                    textOverflow: "",
                    color: "white",
                    overflowY: "auto",
                  },
                }}
              />
              {messageError ? (
                <CustomHelperText
                  helperText={"Message body cannot be empty!"}
                />
              ) : null}
            </Box>
            <Box className="Contact__content__right__ele_buttonPanel">
              <Button Outlined color="secondary" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button
                Outlined
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
