import React from "react";

function index() {
  const side = typeof window ? "client" : "server";
  return <div>You're currently on the {side}-side.</div>;
}
export default index;
