import React from "react";

export default function ToTopButton() {
  const btnStyle = {
    // display: "none",
    position: "fixed",
    bottom: "100px",
    right: "100px",
    Zindex: "99",
    border: "none",
    outline: "none",
    backgroudColor: "gray",
    // color: "white",
    padding: "10px",
    borderRadius: "100%",
    cursor: "pointer",
  };
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <button style={btnStyle} onClick={() => moveToTop()} title="Go to top">
      <i aria-hidden className="fas fa-angle-double-up"></i>
    </button>
  );
}
