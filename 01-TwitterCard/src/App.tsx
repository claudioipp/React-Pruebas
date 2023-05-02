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
    },
    {
      user: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      user: "pheralb",
      name: "Pablo Heraldo",
      isFollowing: false,
    },
    {
      user: "PacoHdezs",
      name: "Paco Hernandez",
      isFollowing: false,
    },
  ];

  return (
    <div className="App">
      {cards.map((u) => {
        return (
          <TwitterCard
            user={u.user}
            name={u.name}
            isFollowingInicial={u.isFollowing}
          ></TwitterCard>
        );
      })}
    </div>
  );
}

export default App;
