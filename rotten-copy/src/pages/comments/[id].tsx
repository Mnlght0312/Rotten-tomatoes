import React from "react";
import { IComment } from ".";
import axios from "axios";

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div>
      Comment
      <div className="bg-black text-white">
        <h1>{comment.name}</h1>
        <h1>{comment.text}</h1>
        <h1>{comment.email}</h1>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:8080/api/comment");//getall
  const paths = res.data.result.map((item: IComment, index: number) => ({
    params: { id: item._id },
  }));
  console.log({ paths });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  console.log({ params });

  const res = await axios.get(`http://localhost:8080/api/comment/${params.id}`);//getone

  // console.log(res.data.result);

  return {
    props: {
      comment: res.data.result,
    },
  };
}
