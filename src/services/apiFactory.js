import { BASE_URL, server } from "../utils/axios-utils";

const apis = {
  app: {
    allMeals: async (id) => await server.get(`${BASE_URL}/1/lookup.php?i=${id}`),
    allIngredient: async (id) => await server.get(`${BASE_URL}/1/list.php?c=list`),
    byCategory: async (catagory) => await server.get(`${BASE_URL}/1/${catagory}`),
  },
};

export default apis;
