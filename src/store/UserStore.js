import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useUserStore = create((set) => ({
  userData: null,

  // fetch user data
  fetchUserData: async () => {
    const cookie = new Cookies();
    const token = cookie.get("TOKEN");

    try {
      const response = await axios.get(`${REACT_APP_SERVER_DOMAIN}/`, {
        headers: {
          authorization: token,
        },
      });

      set({ userData: response.data });
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },
}));
