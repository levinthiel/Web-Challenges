import { volumes } from "../../../resources/lib/data"; 
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
    const volume = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");


    return (
        <div>
            <ul>
                <li>
                    <Link href="/volumes">← All Volumes</Link>
                </li>
            </ul>
            <h1>{volume.title}</h1>
            <Image
                src="/images/the-fellowship-of-the-ring.png"
                height={140}
                width={230}
                alt="book cover for LotR 1"
            />
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book, index) => (
                    <li key={index}>
                        {book.ordinal} - {book.title}
                    </li>
                ))}
            </ul>
            <Link href="/volumes/the-two-towers">Next volume</Link>
        </div>
    );
}
