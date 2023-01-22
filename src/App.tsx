import { useEffect, useState } from "react";
import axios from "redaxios";

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

function App() {
  interface stateProps {
    showLoader: boolean;
    photosArr: [];
  }

  const [state, updateState] = useState<stateProps>({
    showLoader: true,
    photosArr: [],
  });

  const getPhotos = async () => {
    const url = new URL("/search/photos/", "https://api.unsplash.com/");
    url.searchParams.set("query", "aeriel view");
    const _options = {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      },
    };

    const req = axios.get(url.toString(), _options);
    const res = await req;

    const { total, total_pages, results } = res.data,
      photos = shufflePhotos(results);
    updateState((prevState) => ({
      ...prevState,
      photosArr: [...prevState.photosArr, photos],
    }));
  };

  useEffect(() => {
    getPhotos().catch((_reason) => console.log(_reason));
    updateState((prevState) => ({
      ...prevState,
      showLoader: prevState.photosArr.length === 0,
    }));
    return () => console.log("gotten images\n", state.photosArr, "\nunmounted");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Spinner showSpinner={state.showLoader} />
        <section className={"slides-wrapper"}>
          {state.photosArr.map((obj: object, i: number) => (
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
