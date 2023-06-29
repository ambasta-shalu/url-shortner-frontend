import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";
import { REACT_APP_SERVER_DOMAIN } from "../../config";

export const useUrlStore = create((set) => ({
  shortUrl: null,
  allUrls: null,
  deletedUrlCount: 0,

  // fetch short url
  fetchShortUrl: async (longUrl) => {
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

      toast.success("Url Shorten Successfully! 🤓");
      set({ shortUrl: response.data });
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },

  // fetch long url and handle redirect
  fetchLongUrl: async (shortId) => {
    try {
      const response = await axios.get(
        REACT_APP_SERVER_DOMAIN + "/url/" + shortId
      );

      const longUrl = response.data.url.longUrl;
      if (longUrl) {
        window.location.replace(longUrl);
      } else {
        toast.error("Long URL Not Found in Response 😑");
      }
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },

  // fetch all urls of provided user
  fetchAllUrls: async () => {
    const cookie = new Cookies();
    const token = cookie.get("TOKEN");

    try {
      const response = await axios.get(`${REACT_APP_SERVER_DOMAIN}/urls/`, {
        headers: {
          authorization: token,
        },
      });

      set({ allUrls: response.data });
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },

  // delete url
  delUrl: async (urlId) => {
    const cookie = new Cookies();
    const token = cookie.get("TOKEN");

    try {
      const response = await axios.delete(
        `${REACT_APP_SERVER_DOMAIN}/urls/${urlId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      set({ deletedUrlCount: response.data.deletedCount });

      toast.success("Url Deleted! 👽");
    } catch (error) {
      // handle error
      toast.error(error.message);
      console.error(`${error.message}`);
    }
  },
}));
