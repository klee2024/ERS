import { cardsDeck, Card } from "./cards";

// defining types
interface Game {
  currentPlayer: Player; // maybe this can be a string w/ a reference to the player name?
  player1: Player;
  player2: Player;
  currentDeck: Card[]; // this is a stack
  // addToDeck(currentPlayer: Player): void;
}

interface Player {
  name: string;
  cards: Card[];
}

// shuffle cards
// TODO: Look into how this function works more
function shuffle(array: Card[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

console.log(shuffle(cardsDeck));

const player1Cards: Card[] = cardsDeck.slice(0, cardsDeck.length / 2);
const player2Cards: Card[] = cardsDeck.slice(cardsDeck.length / 2);

console.log(player1Cards);
console.log("player 1 length: ", player1Cards.length);
console.log(player2Cards);
console.log("player 2 length: ", player2Cards.length);
console.log("cards length: ", cardsDeck.length);

const player1: Player = {
  name: "player1",
  cards: player1Cards,
};
const player2: Player = {
  name: "player2",
  cards: player2Cards,
};

const game: Game = {
  currentPlayer: player1,
  player1: player1,
  player2: player2,
  currentDeck: [],
};

// add one card to the top of the deck based on the player's pile
// takes cards from the back of the player's pile
function addToDeck(currentPlayer: Player): void {
  const topCard: Card | undefined = currentPlayer.cards.pop();
  if (topCard) {
    game.currentDeck.push(topCard);
  }
}

console.log("deck: ", game.currentDeck);
addToDeck(game.currentPlayer);
console.log("deck: ", game.currentDeck);
console.log("player 1 cards: ", player1.cards.length);

// while both players have cards left, keep playing and switching
function checkValidSlaps(game: Game): string {
  // checks all possible slaps
  // returns the type of slap if the slap was valid, "invalid" if not

  const deck: Card[] = game.currentDeck;
  // double
  if (
    deck.length >= 2 && // making sure the length of deck is at least 2
    deck[deck.length - 1].value === deck[deck.length - 2].value
  ) {
    return "double";
  }

  // sandwich
  if (
    deck.length >= 3 &&
    deck[deck.length - 1].value === deck[deck.length - 3].value
  ) {
    return "sandwich";
  }

  // top bottom
  if (deck.length >= 2 && deck[0].value === deck[deck.length - 1].value) {
    return "top bottom";
  }

  // tens
  //  When two cards played consecutively (or with a letter card in between) add up to 10.
  // For this rule, an ace counts as one. Ex: 3, 7 or A, K, 9
  if (
    deck.length >= 2 &&
    deck[deck.length - 1].value + deck[deck.length - 2].value === 10
  ) {
    return "tens";
  }

  if (
    deck.length >= 3 &&
    deck[deck.length - 1].value + deck[deck.length - 3].value === 10
  ) {
    return "tens";
  }

  // jokers - implement later
  //  When jokers are used in the game, which should be determined before game play begins.
  // Anytime someone lays down a joker, the pile can be slapped.

  // four in a row
  // When four cards with values in consistent ascending or descending order is placed.
  // Ex: 5, 6, 7, 8 or Q, K, A, 2

  // marriage
  if (
    deck.length >= 2 && // making sure the length of deck is at least 2
    deck[deck.length - 2].name === "Queen" &&
    deck[deck.length - 1].name === "King"
  ) {
    return "marriage";
  }

  if (
    deck.length >= 2 && // making sure the length of deck is at least 2
    deck[deck.length - 2].name === "King" &&
    deck[deck.length - 1].name === "Queen"
  ) {
    return "marriage";
  }

  return "invalid";
}
