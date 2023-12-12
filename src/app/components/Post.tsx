import React from "react";

interface PostProps {
  name: string;
  description: string;
  mannerisms: string;
  placeOfBirth: string;
  race: string;
  backstory: string;
  tags: string[];
}

export default function Post(props: PostProps) {
  return (
    <article className="bg-charcoal px-8 shadow-lg py-4">
      <header className="flex flex-col gap-2">
        <div className="flex flex-col py-4">
          <h2 className="font-roboto text-3xl text-neon font-bold">
            {props.name}
          </h2>
          <p className="italic">{props.description}</p>
        </div>
        <div>
          <span className="text-white/50 text-sm italic">Mannerisms:</span>
          <p>{props.mannerisms}</p>
        </div>
        <div>
          <span className="text-white/50 text-sm italic">Place of Birth:</span>
          <p>{props.placeOfBirth}</p>
        </div>
        <div>
          <span className="text-white/50 text-sm italic">Race:</span>
          <p>{props.race}</p>
        </div>
      </header>
      <p className="py-4">{props.backstory}</p>
      <ul className="flex gap-2">
        {props.tags.map((tag: string) => {
          return (
            <li className="px-2 border-2 border-white rounded-full">{tag}</li>
          );
        })}
      </ul>
    </article>
  );
}
