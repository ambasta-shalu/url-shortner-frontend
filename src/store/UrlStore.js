import { create } from "zustand";
import axios from "axios";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useUrlStore = create((set) => ({
  outputUrl: null,

  // handle longUrl
  url: async (longUrl) => {
    try {
      const response = await axios.post(`${REACT_APP_SERVER_DOMAIN}/`, {
        longUrl,
      });

      toast.success("Url Shorten Successfully...!");

      set({ outputUrl: response.data });
      console.log(response.data);
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.log(`error from url auth store ${error.message}`);
    }
  },
}));
