import { Image } from "../types/Image";

const getImageUrl = (image: Image) => {
  const base64 = btoa(
    image.data.data.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
  return `data:image/png;base64,${base64}`;
};
export default getImageUrl;
