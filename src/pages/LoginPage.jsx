import React, { useEffect } from "react";
import "../css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { validateLogin } from "../helper/ValidateForm";
import { useAuthStore } from "../store/AuthStore";

function LoginPage() {
  const navigate = useNavigate();

  const handleClick = function () {
    navigate("/signup");
  };

  const login = useAuthStore((state) => state.login);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        // console.log(JSON.stringify(values, null, 2));
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  // useEffect(() => {
  //   if (formik.errors?.email) {
  //     toast.error(formik.errors.email);
  //   } else if (formik.errors?.password) {
  //     toast.error(formik.errors.password);
  //   }
  // }, [formik.errors]);

  return (
    <div className="login__page">
      <div className="shape"></div>
      <div className="shape"></div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="login__content">
        <h1 className="login__heading">Login Here</h1>

        <form className="login__form" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="abc@mail.com"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button className="login__btn" type="submit">
            Login
          </button>
        </form>

        <p>
          <span> New User? </span>
          <span className="login__link__signup nowrap" onClick={handleClick}>
            Sign Up Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
