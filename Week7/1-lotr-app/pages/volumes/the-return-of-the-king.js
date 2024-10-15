import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Pagesthree() {
    const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

    return (
        <>
            <ul>
                <li>
                    <Link href="../volumes">← All Volumes</Link>
                </li>
            </ul>
            <h1>{volume.title}</h1>
            <Image
                src="/images/the-return-of-the-king.png"
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
            <Link href="/volumes/the-two-towers">Previous volume</Link>
        </>
    )
}
