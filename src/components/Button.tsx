import React from "react";

interface Props {
  onClickBtn: () => void;
}

function Button({ onClickBtn }: Props) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClickBtn}>
      Primary
    </button>
  );
}

export default Button;
