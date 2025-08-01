import css from "styled-jsx/css";

export default css`...`;

export const globalCss = css.global`
  h3 {
    background-color: Yellow;
  }
`;

export const resolveCss = css.resolve`
  .panel {
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
  }
`;
