import React, { useState } from "react";

export const playerContext = React.createContext();
export default function PlayerDataProvider(props) {
  const [players, setPlayers] = useState([]);

  if (players.length > 0) {
    console.log(players);
  }

  const addPlayer = (player) => {
    setPlayers((prev) => {
      return [...prev, player];
    });
  };

  const deletePlayer = (id) => {
    setPlayers((prev) => {
      let filter = prev.filter((p) => p.id !== id);
      return filter;
    });
  };
  return (
    <>
      <playerContext.Provider value={{ players, addPlayer, deletePlayer }}>
        {props.children}
      </playerContext.Provider>
    </>
  );
}
