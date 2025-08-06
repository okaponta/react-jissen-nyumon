import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import InfoPage from "./InfoPage";

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
