
export type Card = {
    name : string,
    suit: string, 
    value: number, 
    color: string
}

// creating deck of 52 cards
const suits : string[] = ["Clubs", "Diamonds", "Hearts", "Spades"]
const numbers : string[] = [];
for (let i = 2; i < 11; i ++){
    numbers.push(`${i}`)
}
const names : string[] = ["Ace"].concat(numbers, ["Jack", "Queen", "King"])

export const cardsDeck: Card[] = []
for (const suit of suits){

    let color: string;
    if (suit === "Clubs" || suit === "Spades"){
        color = "Black"
    } else{
        color = "Red"
    }

    for (let i = 0; i < names.length; i++){
        const name : string = names[i]
        let value : number = (name === "Ace") ? 13 : i + 1;
        const newCard : Card = {
            name: name,
            color: color,
            suit: suit, 
            value: value, 
        }
        cardsDeck.push(newCard)
    }
}