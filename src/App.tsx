import { useState } from "react";
import {
  generateDeck,
  shuffleDeck,
  dealCards,
  sortHand,
} from "./utils/deckLogic";
import { CardDisplay } from "./components/CardDisplay";
import type { Card } from "./types/game";

function App() {
  // 1. Estado da mão
  const [myHand, setMyHand] = useState<Card[]>(() => {
    const deck = shuffleDeck(generateDeck());
    const { hand } = dealCards(deck, 11);
    return hand;
  });

  // Estilo comum para os botões
  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
  };

  // 2. Funções de ação (Devem estar antes do return!)
  const handleNewHand = () => {
    const deck = shuffleDeck(generateDeck());
    const { hand } = dealCards(deck, 11);
    setMyHand(hand);
  };

  const handleSort = () => {
    const handSorted = sortHand(myHand);
    setMyHand(handSorted);
  };

  // 3. O que aparece na tela
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#2e7d32",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "white" }}>Canasta V1 - My Hand</h1>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button onClick={handleSort} style={buttonStyle}>
          Sort Hand
        </button>

        <button onClick={handleNewHand} style={buttonStyle}>
          New Hand
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {myHand.map((card) => (
          <CardDisplay key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
