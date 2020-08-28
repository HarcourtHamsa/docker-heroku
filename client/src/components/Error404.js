import React from "react";
import { MdWarning } from "react-icons/md";

export default function Error404() {
  return (
    <div>
      <div className="center text-center">
          <MdWarning size="70" />
        <h3>Page Not Found</h3>
        <p className="text-muted">This page is missing</p>
        <a href="/" className="btn btn-blue">
          Go Home
        </a>
      </div>
    </div>
  );
}
