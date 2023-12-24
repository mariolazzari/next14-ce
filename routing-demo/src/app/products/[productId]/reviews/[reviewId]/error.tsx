"use client";

type Props = {
  error: Error;
};

function ErrorBoundary({ error }: Props) {
  return (
    <div>
      <h1>Error page</h1>
      <h2>{error.message}</h2>
      <h3>{error.name}</h3>
    </div>
  );
}

export default ErrorBoundary;
