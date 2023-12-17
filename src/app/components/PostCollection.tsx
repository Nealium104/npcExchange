"use client";

import React, { useState, useEffect } from "react";
import { DBFetch } from "../database/DBFetch";

interface Post {
  post_id: number;
  user_id: number;
  name: string;
  description: string;
  mannerisms: string;
  place_of_birth: string;
  race: string;
  backstory: string;
}

export default function PostCollection() {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    DBFetch().then(setData);
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((post: any, index: any) => (
        <div key={index}>
          <h2>{post.name}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
