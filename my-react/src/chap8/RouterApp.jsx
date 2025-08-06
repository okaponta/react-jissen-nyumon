import { NavLink, Outlet } from "react-router-dom";
import "./RouterNav.css";

export default function RouterApp() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">トップ</NavLink>
        </li>
        <li>
          <NavLink to="/article">公開記事</NavLink>
        </li>
        <li>
          <NavLink to="/about">このサイトについて</NavLink>
        </li>
        <li>
          <NavLink to="/article/info">Infoページ</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
