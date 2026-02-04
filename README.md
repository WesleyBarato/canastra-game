# Canasta Card Game - Web Engine (V1)

A professional implementation of the classic Canasta card game, developed with a focus on clean code, complex logic validation, and a seamless user experience.

## 🚀 Project Overview

This project aims to recreate the strategic depth of Canasta. Unlike standard Rummy, this version implements specific rules such as the "Wild 2s" (Coringas) and the "Ace-to-Ace" (1000-point) Canasta.

## 🛠 Tech Stack

- **Framework:** React.js (Vite)
- **Language:** TypeScript (for robust type safety)
- **Styling:** Tailwind CSS
- **State Management:** React Context API / Hooks

## 📋 V1 Features (Minimum Viable Product)

- [ ] **Double Deck Engine:** Generation of a 104-card deck with unique UIDs.
- [ ] **Shuffle & Deal:** Implementation of the Fisher-Yates shuffle algorithm.
- [ ] **Hand Management:** Distribution of 11 cards per player.
- [ ] **Sequence Validator (The Engine):**
  - Identification of "Trincas" (3+ cards of the same suit in sequence).
  - **Wildcard Logic:** Supporting "2s" as wildcards (Coringas).
  - **Circular Ace:** Validation for `Q-K-A` and `A-2-3` sequences.
- [ ] **Meld Mechanics:** Ability to move cards from the hand to the table.
- [ ] **Canasta Detection:** Automatic identification of Clean, Dirty, and "Ace-to-Ace" (1000 pts) Canastas.

## 📐 Data Structure

The core of the game relies on a strict `Card` interface:

```typescript
interface Card {
  id: string; // suit-value-deckIndex
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  value: number; // 1 to 13
  label: string; // 'A', '2', ..., 'K'
  isWild: boolean; // True if card is a 2
}
```
