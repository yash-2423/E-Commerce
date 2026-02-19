import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className="container text-center mt-5">

      <h1 className="display-1 text-danger">404</h1>

      <h2>Page Not Found</h2>

      <p className="mb-4">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>

    </div>
  );
};

export default Pagenotfound;
