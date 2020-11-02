import React from "react";

export default function MyHr() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <div style={{ flex: "12", backgroundColor: "black", height: "0.5px" }} /> */}
      <hr style={{ flex: "12", border: "none", borderTop: "dotted" }} />
      <div style={{ flex: "1", backgroundColor: "black", height: "5px" }} />
    </div>
  );
}
