/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function EmotionJsx() {
  const styles = css`
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    color: #333;
  `

  return (
    <div css={styles}><b>Styled JSX</b>はJSX式にスタイル定義</div>
  )
}