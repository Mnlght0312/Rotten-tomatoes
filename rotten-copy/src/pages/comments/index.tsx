import axios from "axios";
import React from "react";
import Link from "next/link";
export interface IComment {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
}
export default function index({ comments }: { comments: Array<IComment> }) {
  return (
    <div>
      <h1>Comments</h1>
      {comments.map((item, index) => {
        const date = new Date(item.date);
        return (
          <>
            <div className="flex p-5 bg-slate-400 m-1 flex-col">
              <Link
                href={{
                  pathname: "/comments/[id]",
                  query: { id: item._id },
                }}
              >
                <h1 className="text-bold">{item.name}</h1>
              </Link>
              <div>
                <p>{item.text}</p>
                <p>{date.toISOString()}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:9000/api/comment");
  console.log(res.data.result);

  return {
    props: { comments: res.data.result },
  };
}
