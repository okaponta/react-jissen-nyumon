export default function EventKey() {
  const handleKey = (e) => {
    if (e.ctrlKey && e.key === "q") {
      alert("Ctrl + Q が押されました");
    }
  };

  return (
    <form>
      <label>
        名前：
        <input type="text" size="20" onKeyDown={handleKey} />
      </label>
    </form>
  );
}
