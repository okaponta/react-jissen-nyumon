import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RouterApp from "./RouterApp.jsx";
import TopPage from "./TopPage.jsx";
import ArticlePage from "./ArticlePage.jsx";
import AboutPage from "./AboutPage.jsx";
import InfoPage from "./InfoPage.jsx";

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterApp />}>
      <Route path="" element={<TopPage />} />
      <Route path="article" element={<ArticlePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="article/info" element={<InfoPage />} />
    </Route>
  )
);

export default routesLink;
