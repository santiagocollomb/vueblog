import { get } from "axios";

const API_URL = "http://nosoyculto.com/wp-json/wp/v2/";

// Creamos la función getToken
function getPosts() {
  return get(API_URL + "posts");
}

// Exportamos la función para poder usarla más tarde
export { getPosts };
