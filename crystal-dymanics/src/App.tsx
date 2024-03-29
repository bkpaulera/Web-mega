import MainRoutes from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { useTranslation } from "react-i18next";
import { Footer } from "./components/footer";
import { fetchImages } from "./services/picturesService/Pictures";

function App() {
  useEffect(() => {
    const fetchImagesFromAPI = async () => {
      try {
        //await fetchImages();
      } catch (error) {
        console.log(error);
      }
    };
    //fetchImagesFromAPI();
  }, []);

  const { t } = useTranslation();
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Router>
      <section className="h-10 md:h-10 sm:h-16" />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
