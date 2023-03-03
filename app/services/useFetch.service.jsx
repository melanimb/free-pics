import { useEffect, useState } from "react";

export const API_KEY =
  "SM4Csl2Z1ZSwzIsllQgJeVjFMjPWg8D4S5XTJ1YJPa3WXbYz9rkisgEt";
const CURATED_URL = "https://api.pexels.com/v1/curated?per_page=15";

// Custom Hook

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.photos))
  }, [url]);

  return data;
};

export default useFetch;
