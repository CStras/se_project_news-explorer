import { checkRes } from "./utils";

export const getNews = (q, apikey, from, to, pageSize) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apikey}`
  ).then(checkRes);
};
