export default function TitledPanel({ children }) {
  const title = children.find((elem) => elem.key === "title");
  const body = children.find((elem) => elem.key === "body");
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        border: "1px solid #000",
        width: "fit-content",
        boxShadow: "10px 5px 5px #999",
        backgroundColor: "#fff",
      }}
    >
      {title}
      <hr />
      {body}
    </div>
  );
}
