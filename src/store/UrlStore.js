import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useUrlStore = create((set) => ({
  outputUrl: null,

  // handle longUrl
  url: async (longUrl) => {
    const cookie = new Cookies();
    const token = cookie.get("TOKEN");

    try {
      const response = await axios.post(
        `${REACT_APP_SERVER_DOMAIN}/`,
        {
          longUrl,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      toast.success("Url Shorten Successfully...!");

      set({ outputUrl: response.data });
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`error from url store ${error.message}`);
    }
  },
}));
