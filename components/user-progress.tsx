import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Infinity } from "lucide-react";

type Props = {
  activeCourse: {
    imageSrc: string;
    title: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image 
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image 
            src="/points.svg"
            alt="Points"
            height={22}
            width={22}
            className="mr-2"
          />
          { points }
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image 
            src="/heart.svg"
            alt="Hearts"
            height={22}
            width={22}
            className="mr-2"
          />
          { 
            hasActiveSubscription 
            ? <Infinity className="szie-4"/> 
            : hearts 
          }
        </Button>
      </Link>
    </div>
  );
}