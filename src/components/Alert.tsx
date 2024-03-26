import React from "react";

interface Props {
  clearAlert: () => void;
}

function Alert({ clearAlert }: Props) {
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={clearAlert}
        ></button>
      </div>
    </div>
  );
}

export default Alert;
