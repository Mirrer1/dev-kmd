import axios from 'axios';

const API_URL = `https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM`;
const CACHE_KEY = 'unsplash_bg';

/**
 * 로컬 스토리지에서 저장된 배경 이미지 URL을 가져오는 함수
 *
 * @returns {string | null} 저장된 배경 이미지 URL
 */
export const getBg = (): string | null => localStorage.getItem(CACHE_KEY);

/**
 * Unsplash API에서 랜덤 배경 이미지를 가져와 로컬 스토리지에 캐싱하는 함수
 *
 * @returns {Promise<string | null>} 가져온 배경 이미지 URL
 */
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
