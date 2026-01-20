import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";


type Event = {
  name: string;
  description: string;
  month: string;
  day: number;
  time: string;
  location: string;
  slug: string;
};

export default function Event(props: Event) {
  return (
    <div className="w-full lg:w-1/2 bg-white rounded-lg border-2 border-gray-300 text-left flex flex-row transform hover:translate-y-[-5px] transition-all hover:shadow-lg">
      <div className="border-r-2 border-primary flex flex-col w-1/6  p-2 lg:p-5 text-center justify-center">
        <h3 className="text-primary">{props.day}</h3>
        <p className="text-gray-400">{props.month}</p>
      </div>

      <div className="flex flex-col w-5/6 p-2 lg:p-5 gap-3">
        <h4>{props.name}</h4>
        <p>{props.description}</p>

        <ul className="gap-3">
          <li>
            <div className="flex flow-row gap-3">
              <Image src="/svg/clock.svg" alt="phone" width={15} height={15} />
              <p className="small-text text-left">{props.time}</p>
            </div>
          </li>
          <li>
            <div className="flex flow-row gap-3">
              <Image src="/svg/map.svg" alt="phone" width={15} height={15} />
              <p className="small-text text-left">{props.location}</p>
            </div>
          </li>
        </ul>
        <Link href={`/events/${props.slug}`} className="w-full lg:w-[200px]">
          <Button size="lg" className="w-full lg:w-[200px]">
            View Event
          </Button>
        </Link>
      </div>
    </div>
  );
}
