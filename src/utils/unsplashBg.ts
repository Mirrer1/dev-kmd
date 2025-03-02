import axios from 'axios';

const API_URL = `https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM`;
const CACHE_KEY = 'unsplash_bg';

export const getBg = (): string | null => localStorage.getItem(CACHE_KEY);

export const fetchAndCacheBg = async (): Promise<string | null> => {
  try {
    const { data } = await axios.get(API_URL);
    localStorage.setItem(CACHE_KEY, data.urls.regular);
    return data.urls.regular;
  } catch (e) {
    console.error(e);
    return null;
  }
};
