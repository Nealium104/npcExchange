import Image from "next/image";
import React from "react";
import { npcArray } from "./database/dummyPosts";
import Post from "./components/Post";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24">
      <div className="flex flex-col items-center gap-8">
        {npcArray.map((post, index) => (
          <Post
            key={index}
            name={post.name}
            description={post.description}
            mannerisms={post.mannerisms}
            placeOfBirth={post.placeOfBirth}
            race={post.race}
            backstory={post.backstory}
            tags={post.tags}
          />
        ))}
      </div>
    </main>
  );
}
