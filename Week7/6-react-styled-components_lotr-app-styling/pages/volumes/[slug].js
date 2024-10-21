import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  const isVol1 = volumeIndex === 0;
  const isVol2 = volumeIndex === 1;
  const isVol3 = volumeIndex === 2;

  return (
    <StyledDiv $vol1={isVol1} $vol2={isVol2}  $vol3={isVol3}>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </StyledDiv>
  );
}


const StyledDiv = styled.div`

    ${({ $vol1 }) =>
      $vol1 &&
      css`
        background-color: lightblue;
      `}

    ${({ $vol2 }) =>
      $vol2 &&
      css`
        background-color: lightgreen;
      `}

    ${({ $vol3 }) =>
      $vol3 &&
      css`
        background-color: lightcoral;
      `}
`;