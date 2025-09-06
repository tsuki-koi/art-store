import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center p-5">
      <PuffLoader color="#38cb72" />
    </div>
  );
};

export default Loader;
