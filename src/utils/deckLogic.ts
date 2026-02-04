import type { Card, Suit } from "../types/game";

export const generateDeck = (): Card[] => {
  const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
  const deck: Card[] = [];

  // Mapeamento para nomes especiais (A, J, Q, K)
  const specialLabels: { [key: number]: string } = {
    1: "A",
    11: "J",
    12: "Q",
    13: "K",
  };

  // Loop 1: Rodamos 2 vezes porque a canastra usa 2 baralhos
  for (let deckIndex = 1; deckIndex <= 2; deckIndex++) {
    // Loop 2: Percorremos cada naipe
    suits.forEach((suit) => {
      // Loop 3: Criamos as cartas de 1 a 13 para cada naipe
      for (let value = 1; value <= 13; value++) {
        // Lógica do Label (se for 1, vira "A", se for 10, vira "10")
        const label = specialLabels[value] || value.toString();

        // Criamos o objeto da carta seguindo a interface 'Card'
        const newCard: Card = {
          id: `${suit}-${value}-${deckIndex}`, // ID único ex: "hearts-7-1"
          suit: suit,
          value: value,
          label: label,
          isWild: value === 2, // Se o valor for 2, isWild será true
        };

        deck.push(newCard); // Adiciona a carta no nosso "monte"
      }
    });
  }

  return deck;
};
export const shuffleDeck = (deck: Card[]): Card[] => {
  // Criamos uma cópia para não modificar o array original (imutabilidade)
  const shuffled = [...deck];

  // Começamos do último elemento e vamos voltando
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Escolhemos um índice aleatório entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));

    // Trocamos os elementos de lugar (Destructuring assignment)
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const dealCards = (deck: Card[], count: number) => {
  // .slice(0, count) pega as primeiras X cartas
  const hand = deck.slice(0, count);
  // .slice(count) retorna o RESTANTE do baralho
  const remainingDeck = deck.slice(count);

  return { hand, remainingDeck };
};
export const sortHand = (hand: Card[]): Card[] => {
  return [...hand].sort((a, b) => {
    // Primeiro compara o naipe (ordem alfabética: clubs, diamonds, hearts, spades)
    if (a.suit < b.suit) return -1;
    if (a.suit > b.suit) return 1;
    // Se for o mesmo naipe, compara o valor numérico
    return a.value - b.value;
  });
};
