"use client";

import { useState } from "react";

function DashboardPage() {
  const [name, setName] = useState("");

  console.log("Dashboard client");

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        className="text-black"
        type="text"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <p>Hello {name}</p>
    </div>
  );
}

export default DashboardPage;
