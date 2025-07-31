/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
`

export default function EmotionComp() {
  return (
    <MyPanel><b>Styled JSX</b>はJSX式にスタイル定義</MyPanel>
  )
}