import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,

  // handle signup
  signup: async (email, firstName, lastName, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
        {
          email,
          firstName,
          lastName,
          password,
        }
      );

      set({ isLoggedIn: true });

      toast.success("SignUp Successful...!");
      console.log(response.data);
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.log(`error from signupauth store ${error.message}`);
    }
  },

  // handle login
  login: async (email, password) => {
    const cookies = new Cookies();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          email,
          password,
        }
      );

      // set the cookie
      cookies.set("TOKEN", response.data.token, {
        path: "/",
      });

      // redirect user to the auth (index page) page
      window.location.href = "/";

      set({ isLoggedIn: true });

      toast.success("Login Successful...!");
      console.log(response.data);
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.log(`error from loginauth store ${error.message}`);
    }
  },

  // handle logout
  logout: () => {
    const cookies = new Cookies();

    try {
      // destroy the cookie
      cookies.remove("TOKEN", { path: "/" });

      // redirect user to the Index Page
      window.location.href = "/";

      set({ isLoggedIn: false });

      toast.success("Logout Successful...!");
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.log(`error from logoutauth store ${error.message}`);
    }
  },
}));
