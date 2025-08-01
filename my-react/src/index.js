import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import HookDeferredTransition from "./chap7/HookDeferredTransition";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <HookDeferredTransition />
  </RecoilRoot>
);

// setInterval(() => {
//   root.render(
//     <p>現在時刻：{(new Date()).toLocaleString()}</p>
//   )
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
