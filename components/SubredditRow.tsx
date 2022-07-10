import { ChevronUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

type Props = {
  index: number;
  topic: string;
};

function SubredditRow({ index, topic }: Props) {
  return (
    <div className="flex items-center px-4 py-2 space-x-2 bg-white border-t last:rounded-b">
      <p>{index + 1}</p>
      <ChevronUpIcon className="flex-shrink-0 w-4 h-4 text-green-400" />
      <Avatar seed={topic} />
      <p className="flex-1 truncate">r/{topic}</p>
      <Link href={`/r/${topic}`}>
        <div className="px-3 text-white bg-blue-500 rounded-full cursor-pointer">
          View
        </div>
      </Link>
    </div>
  );
}

export default SubredditRow;
