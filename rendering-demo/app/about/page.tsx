import { cookies } from "next/headers";

function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("About server theme:", theme);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-xl">About Page</h1>
      <h2 className="text-lg">{new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default AboutPage;
