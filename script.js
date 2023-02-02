const ps = require("prompt-sync")
const prompt = ps();

//their is a dealer, whoever gets 21 wins. If you go over 21 you lose. 
//Hit means that you want another go. Fold means you want to stop. Over means you went over.
//dealer, and a player.
//everyone gets one card first.
//you can click to see your card.
//if dealer goes player waits.
//if player goes dealer has 
// closer to psuedo code.
// we need a for loop to keep going. If over 21 break- sorry over 21.
// it will be max-bid = user input.
// player puts in a bid.-user input
// let win = 21;
// let gamePoints = 0;

// if(win > 21){
//     console.log('you lose')
// }
let array2d = [['A'],['K'],['Q'],['J'],[10],[9],[8],[7],[6],[6],[4],[3],[2]]
// //now we want to randomize these
let randomCard = Math.floor(Math.random(5) * 13 + 1)

// // we want to tie randomCard to each card. we need a switch statement.
// // if random card equals the value of a card return true.
// // we can also have a percentage of winning. 


// tutorial
// console.log("Tutorial")
// setTimeout(()=>{
// console.log('[A] = 1 or 13 (will go up by 11, if 13 is chosen), [K] = 10, [Q] = 10, [J] = 10, 9 = [10], 8 = [9], 7 = [8], 6 = [7], 5 = [6], 4 = [5], 3 = [4], 2 = [3], 1 = [2]', 'face cards are the same value', 'numbered card values are one less than actual card value')

// },1000)






// let maxBid = 10000;

let start = 0;
// let bids = 100;

// for(let i = 0; i < 3; i++){
// let playerBid = Number(prompt('Enter your bid: '))

// if(playerBid > maxBid){
//     console.log('sorry too high...')
// }
// else if(playerBid < maxBid){
//     console.log('your bid is' , playerBid)
//     console.log('please wait a couple of seconds while game starts')
//     break;
// }

// }
// setTimeout(()=>{
//     console.log("Game: Black Jack")
// },2000)
// setTimeout(()=>{
//     console.log("rules: you'll get a random card, and your goal is to get 21. If you go over 21 you lose", '\n')
// },5000)


//if statement that runs the loop over again, if we want to hit again-if true add hit++
//if not it will keep running the loop
//if returned card or we got the card. Wait 10 seconds, then user input. It will say fold,or hit me, then they type in what they want to do. fold means no more looping and that's the card you want, then timer stops and then it will say what the dealer got. quit means they want to stop playing., 
//dealer is just going to get a random number between 1 and 27, if he gets above you he wins, if you get above him you win. else if you get more than 21 you lose, or he gets more than 21 he loses. His runs random twice. After you finish it will show how many points he has.
//Hit me means you want another card. 
//If you hit over 21 points you lose.
//random face cards.
// to make this more abstract we could use modules and just have the code that we need inside of the script module.
let hit = 1;
let cardShown = false;
let newCardShown = false;

setTimeout(()=>{
    


    for(let i = 0; i < hit; i++){
let arr1 = array2d[0][0] = 13;   
let arr2 = array2d[0][1] = 12 //equals 10 
let arr3 = array2d[0][2] = 11 // equals 10
let arr4 = array2d[0][3] = 10 // equals 10

// fold or hit will show up

const faceCards = (randomCard)=>{
   let num;
    if(randomCard === arr1){
    num = Number(prompt('You got an ace, enter 1 or 13: '))};
    if(num === 13){
        cardShown = true;
       return '[A]', 13;
    }else if(num === 1){
        cardShown = true;
        return '[A]', 1;
    }
   //we need to use inputs and switch statements together.
switch(randomCard ){
    case randomCard = arr2:
        cardShown = true;
        return `[K], ${arr2} points `;
    case randomCard = arr3:
        cardShown = true;
        return `[Q], ${arr3} points `;
    case randomCard = arr4:
        cardShown = true;
        return `[J], ${arr4} points `;        
    }
    

}

const faceValues = faceCards(randomCard)
console.log(faceValues)


//random number cards

let arr5 = array2d[0][4] = 9 //equals 10
let arr6 = array2d[0][5] = 8 //equals 9
let arr7 = array2d[0][6] = 7  //equals 8
let arr8 = array2d[0][7] = 6 //equals 7
let arr9 = array2d[0][8] = 5 //equals 6
let arr10 = array2d[0][9] = 4  //equals 5
let arr11 = array2d[0][10] = 3  //equals 4
let arr12 = array2d[0][10] = 2  //equals 3
let arr13 = array2d[0][11] = 1  //equals 2

const numberedCards = (randomCard)=>{

    switch(randomCard){
        case randomCard = arr5:
            cardShown = true;
            return `[10], ${arr5} points` ;
        case randomCard = arr6:
            cardShown = true;
            return `[9], ${arr6} points `;
        case randomCard = arr7:
            cardShown = true;
            return `[8], ${arr7} points `;
        case randomCard = arr8:
               cardShown = true;
            return `[7], ${arr8} points`;
        case randomCard = arr9:
               cardShown = true;
            return `[6], ${arr9} points `;
       case randomCard = arr10:
           cardShown = true;
            return `[5], ${arr10} points `;
        case randomCard = arr11:
               cardShown = true;
            return `[4], ${arr11} points `;
        case randomCard = arr12:
               cardShown = true;
            return `[3], ${arr12} points `;
        case randomCard = arr13:
               cardShown = true;
            return `[2], ${arr13} points `;
    }
}
const numberValues = numberedCards(randomCard)
console.log(numberValues);

let foldOrHitInput;
if(cardShown === true){
    //one problem if i do a new hit it gets the same card again. 
     foldOrHitInput = prompt("Fold or Hit: ");
    if(foldOrHitInput === "fold" || foldOrHitInput === "Fold"){
        console.log('folded')
    }
    else if(foldOrHitInput === "Hit" || foldOrHitInput === "hit"){ 
        hit = 2;
    }
    if(hit === 2){
        newCardShown = true;
    }
    if(newCardShown){

    }

}
    }
});

// },5000)

// console.log('your card is', randomCard)



// after we get a bid, then we want to get a random card. you'll probably need a timer.
//next now we have to run the for loop. If we get over 21 we break and says you lose. Else if we get 21 we win, else keep playing.


// for(let i = 0; i < array2d.length; i++){
// console.log(array2d[i])
// }