"use client";

type Props = {
  error: Error;
  reset: () => void;
};

function ErrorBoundary({ error, reset }: Props) {
  return (
    <div>
      <h1>Error page</h1>
      <h2>{error.message}</h2>
      <h3>{error.name}</h3>
      <button className="bg-orange-600 text-white p-4" onClick={reset}>
        Try again
      </button>
    </div>
  );
}

export default ErrorBoundary;
