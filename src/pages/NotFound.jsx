import React from "react";
import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

const notFound = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-screen">
        <TriangleAlert className="text-yellow-400 w-14 h-14 mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-linear-to-r from-[#0a0f3c] to-[#4b1f6f] rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};

export default notFound;
