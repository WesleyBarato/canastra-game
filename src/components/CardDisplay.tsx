import type { Card } from "../types/game";

interface CardProps {
  card: Card;
}

export const CardDisplay = ({ card }: CardProps) => {
  // Estilo básico inline só para a gente enxergar
  const cardStyle: React.CSSProperties = {
    border: "1px solid #000",
    borderRadius: "8px",
    width: "80px",
    height: "120px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
    backgroundColor: "white",
    color: card.suit === "hearts" || card.suit === "diamonds" ? "red" : "black",
    fontWeight: "bold",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
  };

  return (
    <div style={cardStyle}>
      <span>{card.label}</span>
      <span style={{ fontSize: "24px" }}>
        {card.suit === "hearts" && "♥"}
        {card.suit === "diamonds" && "♦"}
        {card.suit === "clubs" && "♣"}
        {card.suit === "spades" && "♠"}
      </span>
      {card.isWild && <small style={{ fontSize: "10px" }}>WILD</small>}
    </div>
  );
};
