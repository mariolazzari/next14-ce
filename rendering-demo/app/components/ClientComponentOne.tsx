"use client";

import { ReactNode, useState } from "react";
import ClientComponentTwo from "./ClientComponentTwo";

type Props = {
  children: ReactNode;
};

function ClientComponentOne({ children }: Props) {
  const [name, setName] = useState("Mario");

  return (
    <div>
      <h1>Client Component One</h1>
      <ClientComponentTwo />
      {/* <ServerComponentOne /> */}
      {children}
    </div>
  );
}

export default ClientComponentOne;
