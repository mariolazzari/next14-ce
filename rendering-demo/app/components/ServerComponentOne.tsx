import fs from "fs";
import ServerComponentTwo from "./ServerComponentTwo";
import ClientComponentTwo from "./ClientComponentTwo";

function ServerComponentOne() {
  fs.readFileSync("app/components/ServerComponentOne.tsx", "utf-8");

  return (
    <div>
      <h1>Server Component One</h1>
      <ServerComponentTwo />
      <ClientComponentTwo />
    </div>
  );
}

export default ServerComponentOne;
