import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

export default function SSR(a: { message:string, result: string }) {
  return (
    <div>
      Sain uu
      <h1>{a.message}</h1>
      <h2>{a.result}</h2>
    </div>
  );
}
