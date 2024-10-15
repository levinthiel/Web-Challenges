import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Pagestwo() {
    const volume = volumes.find(({ slug }) => slug === "the-two-towers");

    return (
        <>
            <ul>
                <li>
                    <Link href="../volumes">← All Volumes</Link>
                </li>
            </ul>
            <h1>{volume.title}</h1>
            <Image
                src="/images/the-two-towers.png"
                height={230}
                width={140}
                alt="book cover for Lotr 1"
            />;
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book, index) => (
                    <li key={index}>
                        {book.ordinal} - {book.title}
                    </li>
                ))}
            </ul>
            <Link href="/volumes/the-fellowship-of-the-ring">Previous volume</Link>
            <Link href="/volumes/the-return-of-the-king">Next volume</Link>
        </>
    )
}

/* volumes.find(({slug}) => slug === "the-fellowship-of-the-ring") */