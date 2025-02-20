export const apikey = "93b1e6fca3bd4a529d243c2f85c33589";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
