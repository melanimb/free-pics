"use client";

import { API_KEY, CURATED_URL, getPhotos } from "app/services";
import { useEffect, useState } from "react";
import BlurImage from "./BlurImage";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
    setLoading(true);
    const res = await fetch(CURATED_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await res.json();
    setLoading(false);
    setPhotos(data.photos);
  };

  console.log(photos);

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {photos.map((photo, index) => (
        <BlurImage
          key={index}
          alt={photo.alt}
          src={photo.src.medium}
          photographer={photo.photographer}
          photographer_url={photo.photographer_url}
        />
      ))}
    </>
  );
};
export default Gallery;
