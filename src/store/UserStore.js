import { create } from "zustand";
import axios from "axios";
import Cookies from "universal-cookie";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useUserStore = create((set) => ({
  user: null,

  // handle user data
  userData: async () => {
    const cookie = new Cookies();
    const token = cookie.get("TOKEN");

    try {
      const response = await axios.get(`${REACT_APP_SERVER_DOMAIN}/`, {
        headers: {
          authorization: token,
        },
      });

      console.log(response);
      set({ user: response.data });
    } catch (error) {
      // handle error
      console.log(`error from user auth store ${error.message}`);
    }
  },
}));
