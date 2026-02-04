export type Suit = "hearts" | "diamonds" | "clubs" | "spades";

export interface Card {
  id: string; // Identificador único (fundamental para o React saber qual carta é qual)
  suit: Suit; // Usa o tipo que definimos acima
  value: number; // Valor numérico (1 a 13) para podermos fazer cálculos de sequência
  label: string; // O texto que o usuário vê: "A", "2", "J", "Q", "K" ou "10"
  isWild: boolean; // Flag estratégica para o "2" (coringa)
}

export interface GameState {
  deck: Card[]; // O array com as 104 cartas (o monte de compra)
  playerHand: Card[]; // As 11 cartas na sua mão
  opponentHand: Card[]; // As 11 cartas na mão do computador/oponente
  tableP1: Card[][]; // Atenção aqui: é um array de arrays!
  discardPile: Card[]; // O "lixo"
}
