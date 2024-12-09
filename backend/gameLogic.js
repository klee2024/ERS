"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cards_1 = require("./cards");
// shuffle cards
// TODO: Look into how this function works more 
var shuffle = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
};
console.log(shuffle(cards_1.cardsDeck));
var player1Cards = cards_1.cardsDeck.slice(0, cards_1.cardsDeck.length / 2);
var player2Cards = cards_1.cardsDeck.slice(cards_1.cardsDeck.length / 2);
console.log(player1Cards);
console.log("player 1 length: ", player1Cards.length);
console.log(player2Cards);
console.log("player 2 length: ", player2Cards.length);
console.log("cards length: ", cards_1.cardsDeck.length);
var player1 = {
    name: "player1",
    cards: player1Cards
};
var player2 = {
    name: "player2",
    cards: player2Cards
};
var game = {
    currentPlayer: player1,
    player1: player1,
    player2: player2,
    currentDeck: [],
};
// add one card to the top of the deck based on the player's pile 
// takes cards from the back of the player's pile
function addToDeck(currentPlayer) {
    var topCard = currentPlayer.cards.pop();
    if (topCard) {
        game.currentDeck.push(topCard);
    }
}
console.log("deck: ", game.currentDeck);
addToDeck(game.currentPlayer);
console.log("deck: ", game.currentDeck);
console.log("player 1 cards: ", player1.cards.length);
