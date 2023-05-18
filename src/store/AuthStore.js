import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,

  // handle signup
  signup: async (email, firstName, lastName, password) => {
    const cookies = new Cookies();

    try {
      const response = await axios.post(`${REACT_APP_SERVER_DOMAIN}/signup`, {
        email,
        firstName,
        lastName,
        password,
      });

      // set the cookie
      cookies.set("TOKEN", response.data.token, {
        path: "/",
        // expires in 2 hour
        expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      });

      // redirect user to the auth (index page) page
      window.location.href = "/";

      set({ isLoggedIn: true });

      toast.success("SignUp Successful...!");
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`error from signup auth store ${error.message}`);
    }
  },

  // handle login
  login: async (email, password) => {
    const cookies = new Cookies();

    try {
      const response = await axios.post(`${REACT_APP_SERVER_DOMAIN}/login`, {
        email,
        password,
      });

      // set the cookie
      cookies.set("TOKEN", response.data.token, {
        path: "/",
        // expires in 2 hour
        expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      });

      // redirect user to the auth (index page) page
      window.location.href = "/";

      set({ isLoggedIn: true });

      toast.success("Login Successful...!");
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`error from login auth store ${error.message}`);
    }
  },

  // handle logout
  logout: () => {
    const cookies = new Cookies();

    try {
      // destroy the cookie
      cookies.remove("TOKEN", { path: "/" });

      // redirect user to the Login Page
      window.location.href = "/login";

      set({ isLoggedIn: false });

      toast.success("Logout Successful...!");
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`error from logout auth store ${error.message}`);
    }
  },
}));
