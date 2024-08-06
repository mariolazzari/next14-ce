"use client";

import { useState } from "react";

function ClientComponentTwo() {
  const [name, setName] = useState("Mario");

  return <div>ClientComponentTwo</div>;
}

export default ClientComponentTwo;
