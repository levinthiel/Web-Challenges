import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 2,
      name: '🥝 Kiwi',
      color: 'green',
    },
    {
      id: 3,
      name: '🍎 Apple',
      color: 'red',
    },
    {
      id: 4,
      name: '🍊 Orange',
      color: 'orange',
    },
    {
      id: 5,
      name: '🍇 Grapes',
      color: 'purple',
    },
];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name}  style={{background:fruit.color}}/>
      ))}
      
    </div>
  );
}
