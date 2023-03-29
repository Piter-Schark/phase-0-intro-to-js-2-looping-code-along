// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`Im ${age} years old. Happy birthday to me.`);
//}


//const gifts = ["teddy bear", "drone", "doll"];
//
//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//  }
//
//  return gifts;
//}

// wrapGifts(gifts);

const people = ["Ellen", "Cecilia", "Rose"];
const event = "birthday"

function writeCards(people, event) {
    const cards = []
  for (let i = 0; i < people.length; i++) {
    cards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
  }

  return cards;
}

writeCards(people, "birthday");

let number = 10

function countDown (number){
    while (number > -1) {
      console.log(number--);
    }
}

countDown(number);
    