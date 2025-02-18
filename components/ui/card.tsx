import { ProjectType } from "@/type/types";
import Image from "next/image";
import Link from "next/link";

export default function Card({ card }: { card: ProjectType }) {
  
  return (
      <div className="bg-background border-2 border-secondary rounded-lg w-full h-96 text-primary transition-all duration-300 ease-in-out group">
        <Link href={`/project/${card.id}`} className="flex flex-col items-center justify-between gap-4 h-full">
          <div className="h-1/2 w-full overflow-hidden rounded-t-lg">
            {card.image && (
              <Image src={card.image} alt={card.name} width={800} height={600} className="h-full w-full"/>
            )}
          </div>
          <div className="h-1/2 flex flex-col items-start gap-4 p-4 w-full">
            <h3 className="text-2xl font-bold">
              {card.name}
            </h3>
            <ul className="flex flex-wrap gap-1 text-danger text-lg">
              {card.technologies.map((technology, index) => (
                <li key={index}>{index > 0 ? `/ ${technology}` : technology}</li>
              ))}
            </ul>
          </div>
        </Link>
        <Link href={`https://github.com/${card.github}`} className="top-0 left-1/3 absolute p-2 -z-30 group-hover:-top-32 transition-all duration-300 ease-in-out bg-background rounded-full border-2 border-secondary shadow-md shadow-accentLight">
              <Image src="/icon/github.png" alt="Github link" width={150} height={150} className="w-24 h-24"/>
        </Link>
      </div>
  );
}
