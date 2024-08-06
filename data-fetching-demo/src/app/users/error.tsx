"use client";

import { ErrorPage } from "@/types/ErrorPage";
import { useEffect } from "react";

function UsersError({ error }: ErrorPage) {
  useEffect(() => {
    console.error("Error loading users", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-red-500 text-xl">Error fetching users</h2>
      <h3>{error.message}</h3>
    </div>
  );
}

export default UsersError;
