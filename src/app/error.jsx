"use client";

import { useEffect } from "react";
import { PageError } from "@/components"

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-full-section">
      <PageError reset={reset}/>
    </div>
  );
};
export default Error;
