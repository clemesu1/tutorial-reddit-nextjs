import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();

  return (
    <div
      className={`relative overflow-hidden w-10 h-10 bg-white border-gray-300 rounded-full ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.name || "placeholder"
        }.svg`}
        layout="fill"
        alt="Avatar"
      />
    </div>
  );
}

export default Avatar;
