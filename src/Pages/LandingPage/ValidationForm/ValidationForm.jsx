import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Btn from "../../../components/Btn/Btn";
import { useFormik } from "formik";
import { Email } from "@mui/icons-material";
import { SignUpSchemas } from "../../../schemas/Index";

const ValidationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchemas,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  console.log("gormiisisisis", values);
  return (
    <>
      <Box sx={{ mb: "3rem", p: "0% 5%" }}>
        <Card
          sx={{
            bgcolor: "white",
            width: { xs: "100%", sm: "80%", md: "50%" },
            m: "auto",
            p: { xs: "2rem", sm: "3rem", md: "4rem" },
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "2rem", color: "black", textAlign: "center" }}
            >
              Welcome To Registraion
            </Typography>
            <Typography
              sx={{ fontSize: "1.1rem", color: "black", textAlign: "center" }}
            >
              Feel freely to contact us!
            </Typography>
          </Box>

          <form action="" onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", mb: "1rem" }}>
              <label htmlFor="name" className="text-[1rem] text-black ">
                Name
              </label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="w-full h-[2.5rem] p-3 border focus:border-gray-500 border-gray-200 outline-none hover:text-gray-700 "
              />
              {errors.name && touched.name ? (
                <p className="text-red-500">{errors.name}</p>
              ) : null}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mb: "1rem" }}>
              <label htmlFor="email" className="text-[1rem] text-black ">
                Email
              </label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="name"
                placeholder="Enter Your Email"
                className="w-full h-[2.5rem] p-3 border focus:border-gray-500 border-gray-200 outline-none hover:text-gray-700 "
              />
              {errors.email && touched.email ? (
                <p className="text-red-500">{errors.email}</p>
              ) : null}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mb: "1rem" }}>
              <label htmlFor="password" className="text-[1rem] text-black ">
                Password
              </label>
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="name"
                placeholder="Enter Password"
                className="w-full h-[2.5rem] p-3 border focus:border-gray-500 border-gray-200 outline-none hover:text-gray-700 "
              />
              {errors.password && touched.password ? (
                <p className="text-red-500">{errors.password}</p>
              ) : null}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mb: "3rem" }}>
              <label
                htmlFor="confirm_password"
                className="text-[1rem] text-black "
              >
                Confirm Password
              </label>
              <input
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                type="text"
                id="name"
                placeholder="Confrim password"
                className="w-full h-[2.5rem] p-3 border focus:border-gray-500 border-gray-200 outline-none hover:text-gray-700 "
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-500">{errors.confirm_password}</p>
              ) : null}
            </Box>
          </form>

          <Btn children={"Registor"} onClick={handleSubmit} />
        </Card>
      </Box>
    </>
  );
};

export default ValidationForm;
