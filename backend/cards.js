"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsDeck = void 0;
// creating deck of 52 cards
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var numbers = [];
for (var i = 2; i < 11; i++) {
    numbers.push("".concat(i));
}
var names = ["Ace"].concat(numbers, ["Jack", "Queen", "King"]);
exports.cardsDeck = [];
for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
    var suit = suits_1[_i];
    var color = void 0;
    if (suit === "Clubs" || suit === "Spades") {
        color = "Black";
    }
    else {
        color = "Red";
    }
    for (var i = 0; i < names.length; i++) {
        var name_1 = names[i];
        var value = (name_1 === "Ace") ? 13 : i + 1;
        var newCard = {
            name: name_1,
            color: color,
            suit: suit,
            value: value,
        };
        exports.cardsDeck.push(newCard);
    }
}
