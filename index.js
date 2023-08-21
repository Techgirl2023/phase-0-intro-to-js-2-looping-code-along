const gifts = ["teddy bear", "drone", "doll"]; 

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
    return gifts;
}
wrapGifts(gifts);

const cards = ["Toi", "Summer", "Liza"]

function writeCards(cards) {
    const  messagesArray = []
    for (let i = 0; i < cards.length; i++) {
        messagesArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return messagesArray
}
writeCards(cards);

function countDown() {
    let countDown = 10;
    while (countDown > -1 ) {
        console.log(countDown--);
    }
}

