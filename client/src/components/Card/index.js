// Importing react as required for any react component
import React from "react";

// Passing the card component props and deconstructing the props object.
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}
// Export default is used to export a single class, function, or primitive from a strict files
export default Card;
