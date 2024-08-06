import fs from "fs";

function ServerComponentTwo() {
  fs.readFileSync("app/components/ServerComponentTwo.tsx", "utf-8");

  return <div>Server Component Two</div>;
}

export default ServerComponentTwo;
