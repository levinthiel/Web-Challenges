import cities from "../../lib/data"
import Link from "next/link";
import { useRouter } from "next/router";

export default function City(){
    const router = useRouter();
    const { slug } = router.query;

    const city = cities.find((city) => city.slug === slug);


    return (
        <>
            <h1>
                {city.name}
            </h1>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
            <p>Description: {city.description}</p>
            <br></br>
            <Link href="/cities">← Go back to all cities</Link>
        </>
    )

}