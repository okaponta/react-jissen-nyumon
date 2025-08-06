import { ErrorBoundary } from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow.jsx";

export default function ErrorRetryRoot() {
  const handleFallback = ({ error, resetErrorBoundary }) => {
    const handleClick = () => resetErrorBoundary();
    return (
      <div>
        <h4>以下のエラーが発生しました</h4>
        <p>{error.message}</p>
        <button type="button" onClick={handleClick}>
          Retry
        </button>
      </div>
    );
  };
  const handleReset = () => {
    console.log("リセットされました");
  };

  return (
    <>
      <h3>Error Boundary</h3>
      <ErrorBoundary onReset={handleReset} fallbackRender={handleFallback}>
        <ErrorRetryThrow />
      </ErrorBoundary>
    </>
  );
}
