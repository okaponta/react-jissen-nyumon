import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import TopPage from "./TopPage.jsx";
import ArticlePage from "./ArticlePage.jsx";
import AboutPage from "./AboutPage.jsx";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>
  )
);

export default routesBasic;
