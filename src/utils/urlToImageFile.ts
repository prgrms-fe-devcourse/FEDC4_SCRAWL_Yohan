import { PROXY_URL } from "@constants/api";

export const urlToImageFile = (url: string, fileName: string) => {
  return fetch(PROXY_URL + url)
    .then((response) => response.arrayBuffer())
    .then((buffer) => new File([buffer], fileName, { type: "image/jpeg" }));
};
