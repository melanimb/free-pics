"use client";

import useFetch from "app/services/useFetch.service";
import BlurImage from "./BlurImage";

const Gallery = () => {
  const photos = useFetch("https://api.pexels.com/v1/curated?per_page=15");

  return (
    <>
      {photos.map((photo, index) => (
        <BlurImage
          key={index}
          alt={photo.alt}
          src={photo.src.original}
          photographer={photo.photographer}
          photographer_url={photo.photographer_url}
        />
      ))}
    </>
  );
};
export default Gallery;
