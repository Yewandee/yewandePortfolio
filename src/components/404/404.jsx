import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center px-3">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="fs-4 text-dark">Oops! Page Not Found</p>
      <Link to="/" className="btn btn-outline-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
