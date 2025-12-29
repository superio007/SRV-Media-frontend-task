import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

const NotFound = () => {
  return (
    <section
      className="text-center flex flex-col justify-center items-center h-screen"
      aria-labelledby="not-found-heading"
    >
      <TriangleAlert
        className="text-yellow-400 w-14 h-14 mb-4"
        aria-hidden="true"
      />
      <h1 id="not-found-heading" className="text-6xl font-semibold mb-4">
        404 Not Found
      </h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-linear-to-r from-[#000E38] to-[#3F186A] rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
