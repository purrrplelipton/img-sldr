import { useEffect, useState } from "react";
import axios from "redaxios";
import { z } from "zod";

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";

const shufflePhotos = (imgs_arr: []) => {
  const imgs_clone = [...imgs_arr];

  for (let i = imgs_arr.length - 1; i > -1; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [imgs_arr[i], imgs_arr[j]] = [imgs_arr[j], imgs_arr[i]];
  }
  return imgs_clone;
};

const Photo = z.object({
  id: z.string(),
  urls: z.object({ regular: z.string() }),
  description: z.string().nullable(),
  alt_description: z.nullable(z.string()),
});

const Response = z.object({
  total: z.number(),
  total_pages: z.number(),
  results: z.array(Photo),
});

type Response = z.infer<typeof Response>;

function App() {
  const [photosArr, updatePhotosArr] = useState([]);
  const [showLoader, updateShowLoader] = useState(true);

  const getPhotos = async () => {
    const url = new URL("/search/photos/", "https://api.unsplash.com/");
    url.searchParams.set("query", "minimal");
    const _options = {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      },
    };

    const response = await axios.get(url.toString(), _options);
    const _data = response.data;
    Response.parse(_data);

    const shuffledPhotos = shufflePhotos(_data.results);

    updatePhotosArr(shuffledPhotos);
  };

  useEffect(() => {
    getPhotos().catch((_reason) => console.log(_reason));

    updateShowLoader(() => photosArr.length === 0);

    return () => console.log("gotten images\n", photosArr, "\nunmounted");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Spinner showSpinner={showLoader} />
        <section className={"slides-wrapper"}>
          {photosArr.map((obj: z.infer<typeof Photo>, i: number) => (
            <Article
              key={obj.id}
              slideIndex={i}
              src={obj.urls.regular}
              desc={obj.description}
              alt_desc={obj.alt_description}
            />
          ))}
        </section>
      </main>
      <Footer text={"Toby"} to={"https://github.com/purrrplelipton"} />
    </>
  );
}

export default App;
