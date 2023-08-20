import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,

  // HANDLE SIGNUP
  signup: async (email, firstName, lastName, password) => {
    const cookies = new Cookies();

    try {
      const response = await axios.post(`${REACT_APP_SERVER_DOMAIN}/signup`, {
        email,
        firstName,
        lastName,
        password,
      });

      // SET THE COOKIE
      cookies.set("TOKEN", response.data.token, {
        path: "/",
        // EXPIRES IN 6 HOUR
        expires: new Date(new Date().getTime() + 6 * 60 * 60 * 1000),
      });

      // REDIRECT USER TO THE AUTH (INDEX PAGE) PAGE
      window.location.href = "/";

      set({ isLoggedIn: true });

      toast.success("SignUp Successful...!");
    } catch (error) {
      // HANDLE ERROR
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },

  // HANDLE LOGIN
  login: async (email, password) => {
    const cookies = new Cookies();

    try {
      const response = await axios.post(`${REACT_APP_SERVER_DOMAIN}/login`, {
        email,
        password,
      });

      // SET THE COOKIE
      cookies.set("TOKEN", response.data.token, {
        path: "/",
        // EXPIRES IN 6 HOUR
        expires: new Date(new Date().getTime() + 6 * 60 * 60 * 1000),
      });

      // REDIRECT USER TO THE AUTH (INDEX PAGE) PAGE
      window.location.href = "/";

      set({ isLoggedIn: true });

      toast.success("Login Successful...!");
    } catch (error) {
      // HANDLE ERROR
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },

  // HANDLE LOGOUT
  logout: () => {
    const cookies = new Cookies();

    try {
      // DESTROY THE COOKIE
      cookies.remove("TOKEN", { path: "/" });

      // REDIRECT USER TO THE LOGIN PAGE
      window.location.href = "/login";

      set({ isLoggedIn: false });

      toast.success("Logout Successful...!");
    } catch (error) {
      // HANDLE ERROR
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },
}));
