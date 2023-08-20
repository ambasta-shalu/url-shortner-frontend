import React, { useEffect, useState } from "react";
import "../css/SignupPage.css";
import { validateSignup } from "../helper/ValidateForm";
import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

function SignupPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = function () {
    navigate("/login");
  };

  const signup = useAuthStore((state) => state.signup);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      cPassword: "",
    },
    validate: validateSignup,
    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        await signup(
          values.email,
          values.firstName,
          values.lastName,
          values.password
        );
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }

      setIsLoading(false);
    },
  });

  // useEffect(() => {
  //   if (formik.errors?.email) {
  //     toast.error(formik.errors.email);
  //   } else if (formik.errors?.firstName) {
  //     toast.error(formik.errors.firstName);
  //   } else if (formik.errors?.lastName) {
  //     toast.error(formik.errors.lastName);
  //   } else if (formik.errors?.password) {
  //     toast.error(formik.errors.password);
  //   } else if (formik.errors?.cPassword) {
  //     toast.error(formik.errors.cPassword);
  //   }
  // }, [formik.errors]);

  return (
    <div className="signup__page">
      <div className="shape"></div>
      <div className="shape"></div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="signup__content">
        <h1 className="signup__heading">Sign Up Here</h1>

        <form className="signup__form" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            required
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            required
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="cPassword"
            name="cPassword"
            required
            onChange={formik.handleChange}
            value={formik.values.cPassword}
          />
          <button className="signup__btn" type="submit">
            <ClipLoader
              color="#647878"
              loading={isLoading}
              size={25}
              speedMultiplier={1}
            />
            Sign Up
          </button>
        </form>

        <p>
          <span>Already Registered? </span>
          <span className="signup__link__login nowrap" onClick={handleClick}>
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
