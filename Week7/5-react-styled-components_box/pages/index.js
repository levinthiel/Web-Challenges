import BoxWithStyledComponent from "../components/BoxWithStyledComponents";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponent />
      <BoxWithStyledComponent $isBlack />
    </div>
  );
}
