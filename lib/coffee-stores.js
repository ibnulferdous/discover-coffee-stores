import { createApi } from "unsplash-js";

// Unsplash API - server side code
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latLong}&query=${query}&limit=${limit}&radius=70000`;
};

const getCoffeeShopPhotos = async () => {
  const unsplashResponse = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    page: 4,
    perPage: 18,
    orientation: "landscape",
  });

  const unsplashData = unsplashResponse.response.results;
  return unsplashData.map((result) => result.urls.regular);
};

export const fetchCoffeeStores = async (
  latLong = "40.6748569165649,-73.92520931430597",
  limit = 6
) => {
  const photos = await getCoffeeShopPhotos();

  const response = await fetch(
    getUrlForCoffeeStores(latLong, "coffee", limit),
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
      },
    }
  );

  const data = await response.json();

  return data.results.map((result, index) => {
    return {
      ...result,
      imgUrl: photos[index],
    };
  });
};
