import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Movies from "@/component/Movies";
import SSR from "@/component/SSR";
import axios from "axios";
import Link from "next/link";
import { IMovie } from "@/component/Movies";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: {message: string, result: Array<IMovie> }) {
  console.log("Hi from client");
  // console.log({ props });
  const side = typeof window ? "client" : "server";


  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/List">List</Link>
      <Movies movies={props.result} />
      <div>You're currently on the {side}-side.</div>

    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:8080/api/movie");

  return {
    props: {
      message: "Welcome to Server Side Props",
      result: res.data.result,
    },
  };
}
