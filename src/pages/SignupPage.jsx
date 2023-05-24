import React, { useEffect } from "react";
import "../css/SignupPage.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { validateSignup } from "../helper/ValidateForm";
import { useAuthStore } from "../store/AuthStore";

function SignupPage() {
  const navigate = useNavigate();

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
      try {
        await signup(
          values.email,
          values.firstName,
          values.lastName,
          values.password
        );
        // console.log(JSON.stringify(values, null, 2));
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  useEffect(() => {
    if (formik.errors?.email) {
      toast.error(formik.errors.email);
    } else if (formik.errors?.firstName) {
      toast.error(formik.errors.firstName);
    } else if (formik.errors?.lastName) {
      toast.error(formik.errors.lastName);
    } else if (formik.errors?.password) {
      toast.error(formik.errors.password);
    } else if (formik.errors?.cPassword) {
      toast.error(formik.errors.cPassword);
    }
  }, [formik.errors]);

  return (
    <div className="signup__page">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="signup__heading">Sign Up Here</h1>
      <form className="signup__form" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {/* {formik.errors.email && <p>{formik.errors.email}</p>} */}
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="cPassword"
          name="cPassword"
          onChange={formik.handleChange}
          value={formik.values.cPassword}
        />
        <button className="signup__btn" type="submit">
          Sign Up
        </button>
      </form>
      <p>
        Already Registered?{" "}
        <span className="signup__link__login" onClick={handleClick}>
          Login Now
        </span>
      </p>
    </div>
  );
}

export default SignupPage;
