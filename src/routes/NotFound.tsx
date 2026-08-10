import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2rem",
        gap: "1rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div>
        <h1>Page not found</h1>
        <p>
          <Link to="/">Return to the homepage</Link>
        </p>
      </div>
    </main>
  );
}
