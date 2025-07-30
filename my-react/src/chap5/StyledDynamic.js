export default function StyledDynamic({ theme }) {
  return (
    <>
      <style jsx>{`
    .panel {
      width: 200px;
      padding: 10px;
      border: 1px solid #000;
      color: white
    }
    `}</style>
      <style jsx>
        {`
        .panel {
          border-radius: ${theme.radius ? '10px' : '0'};
          background-color: ${theme.color};
        }
        `}
      </style>
      <div className="panel"><b>StyledJSX</b>はJSX式にstyle定義</div>
    </>
  )
}