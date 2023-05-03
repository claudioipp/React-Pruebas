//import { useState } from 'react'
import "./App.css";
import { TwitterCard } from "./Components/TwitterCard";

function App() {
  //const [count, setCount] = useState(0)

  const cards = [
    {
      user: "claudioippoliti",
      name: "Claudio Ippoliti",
      isFollowing: true,
      isStared: true,
    },
    {
      user: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
      isStared: false,
    },
    {
      user: "pheralb",
      name: "Pablo Heraldo",
      isFollowing: false,
      isStared: false,
    },
    {
      user: "PacoHdezs",
      name: "Paco Hernandez",
      isFollowing: false,
      isStared: true,
    },
  ];

  return (
    <div className="App">
      {cards.map(({ user, name, isFollowing, isStared }) => (
        <TwitterCard
          key={user}
          user={user}
          name={name}
          isFollowingInicial={isFollowing}
          isStaredInicial={isStared}
        ></TwitterCard>
      ))}
    </div>
  );
}

export default App;
