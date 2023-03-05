// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];
//
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++){
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }
//
//    return gifts;
//}

//wrapGifts(gifts);

// new code break


const names = ["Ellen", "Joe", "Billy"];

function writeCards(names, event) {
    const cards = [];
    for (let i=0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

writeCards(cards, "anniversary");

function countDown() {
    let number = 10;
    while (number > -1) {
        console.log(number--);
    }
}

