import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  message: Yup.string()
    .max(500, "*message exceeded 500 characters")
    .required("*message is required"),
  userName: Yup.string()
    .min(8, "*minimum 8 characters long")
    .max(20, "*maximum 20 characters long")
    .required("*username is required"),
  email: Yup.string()
    .email("*please enter a valid email address")
    .required("*email is required"),
  subject: Yup.string()
    .max(100, "*subject exceeded 100 characters")
    .required("*subject is required"),
});

const InTouch = () => {
  return (
    <>
      <Formik
        initialValues={{
          message: "",
          userName: "",
          email: "",
          subject: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              id="message"
              name="message"
              label="Enter message"
              multiline={true}
              rows={5}
              onChange={props.handleChange}
              value={props.values.message}
              error={props.touched.message && props.errors.message}
              helperText={props.touched.message && props.errors.message}
              onBlur={props.handleBlur}
            />

            <TextField
              id="userName"
              name="userName"
              label="Enter your name"
              onChange={props.handleChange}
              value={props.values.userName}
              error={props.touched.userName && props.errors.userName}
              helperText={props.touched.userName && props.errors.userName}
              onBlur={props.handleBlur}
            />

            <TextField
              id="email"
              name="email"
              label="Enter your email"
              type="email"
              onChange={props.handleChange}
              value={props.values.email}
              error={props.touched.email && props.errors.email}
              helperText={props.touched.email && props.errors.email}
              onBlur={props.handleBlur}
            />

            <TextField
              id="subject"
              name="subject"
              label="Enter your subject"
              type="subject"
              onChange={props.handleChange}
              value={props.values.subject}
              error={props.touched.subject && props.errors.subject}
              helperText={props.touched.subject && props.errors.subject}
              onBlur={props.handleBlur}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#ff5733",
                padding: "15px 30px",
                height: "52px",
                width: "198px",
              }}
            >
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InTouch;
