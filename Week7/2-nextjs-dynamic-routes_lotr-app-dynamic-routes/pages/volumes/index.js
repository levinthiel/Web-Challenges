import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;
  function getRandomElement(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  function handleRandom(){
  
      const randomVolume = getRandomElement(volumes); 
      console.log(randomVolume);
      router.push(`/volumes/${randomVolume.slug}`);    
  }

  return (
    <>
    <Head>
      <title>The Lord of the Rings</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
            {volumes.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
            ))}
      </ul>
      <button type="button" onClick={handleRandom}> navigate to a random volume</button>
    </>
  );
}
