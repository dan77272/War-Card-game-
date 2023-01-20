const card_dict = {
  1: "2C.svg",
  2: "2D.svg",
  3: "2H.svg",
  4: "2S.svg",
  5: "3C.svg",
  6: "3D.svg",
  7: "3H.svg",
  8: "3S.svg",
  9: "4C.svg",
  10: "4D.svg",
  11: "4H.svg",
  12: "4S.svg",
  13: "5C.svg",
  14: "5D.svg",
  15: "5H.svg",
  16: "5S.svg",
  17: "6C.svg",
  18: "6D.svg",
  19: "6H.svg",
  20: "6S.svg",
  21: "7C.svg",
  22: "7D.svg",
  23: "7H.svg",
  24: "7S.svg",
  25: "8C.svg",
  26: "8D.svg",
  27: "8H.svg",
  28: "8S.svg",
  29: "9C.svg",
  30: "9D.svg",
  31: "9H.svg",
  32: "9S.svg",
  33: "10C.svg",
  34: "10D.svg",
  35: "10H.svg",
  36: "10S.svg",
  37: "JC.svg",
  38: "JD.svg",
  39: "JH.svg",
  40: "JS.svg",
  41: "QC.svg",
  42: "QD.svg",
  43: "QH.svg",
  44: "QS.svg",
  45: "KC.svg",
  46: "KD.svg",
  47: "KH.svg",
  48: "KS.svg",
  49: "AC.svg",
  50: "AD.svg",
  51: "AH.svg",
  52: "AS.svg"
};
let audio = new Audio('sounds/cardsound.mp3');
let playerOneList = [];
let playerTwoList = [];
for (let i = 0; i < 26; i++) {
  let randomNumber = Math.floor(Math.random() * 52) + 1;
  if (typeof card_dict[randomNumber] !== 'undefined') {
    playerOneList.push(card_dict[randomNumber]);
    delete card_dict[randomNumber];
  } else {
    i--;
  }

}
for (let i = 0; i < 26; i++) {
  let randomNumber = Math.floor(Math.random() * 52) + 1;
  if (typeof card_dict[randomNumber] !== 'undefined') {
    playerTwoList.push(card_dict[randomNumber]);
  } else {
    i--;
  }

}
let x = 0;
let y = 0;

function again() {

  document.querySelector("h1").innerHTML = 'War!';
  var delayInMilliseconds = 3000;
  document.getElementById("btn").disabled = true;
  setTimeout(function() {
    audio.play();
    document.getElementById("btn").disabled = false;
    document.querySelectorAll("img")[0].setAttribute('src', 'cards/' + playerOneList[++x]);
    document.querySelectorAll("img")[1].setAttribute('src', 'cards/' + playerTwoList[++y]);

  }, delayInMilliseconds);
  setTimeout(function() {
    cardNum = playerOneList[x].slice(0, 1);
    cardNum2 = playerTwoList[y].slice(0, 1);
    console.log(cardNum);
    console.log(cardNum2);
    if (cardNum === 'K') {
      cardNum = Number(cardNum.charCodeAt(0) - 65 + 3);
    } else if (cardNum === 'Q') {
      cardNum = Number(cardNum.charCodeAt(0) - 65 - 4);
    } else if (cardNum === 'J') {
      cardNum = Number(cardNum.charCodeAt(0) - 65 + 2);
    } else if (cardNum === 'A') {
      cardNum = Number(cardNum.charCodeAt(0) - 65 + 14);
    } else if (cardNum === '1') {
      cardNum = Number(cardNum.charCodeAt(0) - 65 + 26);
    } else {
      cardNum = Number(cardNum);
    }

    if (cardNum2 === 'K') {
      cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 3);
    } else if (cardNum2 === 'Q') {
      cardNum2 = Number(cardNum2.charCodeAt(0) - 65 - 4);
    } else if (cardNum2 === 'J') {
      cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 2);
    } else if (cardNum2 === 'A') {
      cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 14);
    } else if (cardNum2 === '1') {
      cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 26);
    } else {
      cardNum2 = Number(cardNum2);
    }

    if (cardNum > cardNum2) {
      document.querySelector("h1").innerHTML = 'Player 1 Wins';
      for (let i = 0; i <= x; i++) {
        playerOneList.push(playerTwoList[0]);
        playerOneList.push(playerOneList.shift());
        playerTwoList.shift();

      }
      x = y = 0;
      document.querySelector('.playerOneCards').innerHTML = playerOneList.length + ' cards';
      document.querySelector('.playerTwoCards').innerHTML = playerTwoList.length + ' cards';
    } else if (cardNum < cardNum2) {
      document.querySelector("h1").innerHTML = 'Player 2 Wins';
      for (let i = 0; i <= y; i++) {
        playerTwoList.push(playerOneList[0]);
        playerTwoList.push(playerTwoList.shift());
        playerOneList.shift();

      }
      x = y = 0;
      document.querySelector('.playerOneCards').innerHTML = playerOneList.length + ' cards';
      document.querySelector('.playerTwoCards').innerHTML = playerTwoList.length + ' cards';
    } else {
      again();
    }
  }, delayInMilliseconds);
}

function play() {
  let x = 0;
  let y = 0;
  console.log(playerOneList);
  console.log(playerTwoList);
  console.log("...");
  document.querySelectorAll("img")[0].setAttribute('src', 'cards/' + playerOneList[x]);
  document.querySelectorAll("img")[1].setAttribute('src', 'cards/' + playerTwoList[y]);
  let cardNum = playerOneList[0].slice(0, 1)
  let cardNum2 = playerTwoList[0].slice(0, 1)
  if (cardNum === 'K') {
    cardNum = Number(cardNum.charCodeAt(0) - 65 + 3);
  } else if (cardNum === 'Q') {
    cardNum = Number(cardNum.charCodeAt(0) - 65 - 4);
  } else if (cardNum === 'J') {
    cardNum = Number(cardNum.charCodeAt(0) - 65 + 2);
  } else if (cardNum === 'A') {
    cardNum = Number(cardNum.charCodeAt(0) - 65 + 14);
  } else if (cardNum === '1') {
    cardNum = Number(cardNum.charCodeAt(0) - 65 + 26);
  } else {
    cardNum = Number(cardNum);
  }

  if (cardNum2 === 'K') {
    cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 3);
  } else if (cardNum2 === 'Q') {
    cardNum2 = Number(cardNum2.charCodeAt(0) - 65 - 4);
  } else if (cardNum2 === 'J') {
    cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 2);
  } else if (cardNum2 === 'A') {
    cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 14);
  } else if (cardNum2 === '1') {
    cardNum2 = Number(cardNum2.charCodeAt(0) - 65 + 26);
  } else {
    cardNum2 = Number(cardNum2);
  }

  if (cardNum > cardNum2) {
    document.querySelector("h1").innerHTML = 'Player 1 Wins';
    playerOneList.push(playerTwoList[0]);
    playerOneList.push(playerOneList.shift());
    playerTwoList.shift();
    document.querySelector('.playerOneCards').innerHTML = playerOneList.length + ' cards';
    document.querySelector('.playerTwoCards').innerHTML = playerTwoList.length + ' cards';
  } else if (cardNum < cardNum2) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins';
    playerTwoList.push(playerOneList[0]);
    playerTwoList.push(playerTwoList.shift());
    playerOneList.shift();
    document.querySelector('.playerOneCards').innerHTML = playerOneList.length + ' cards';
    document.querySelector('.playerTwoCards').innerHTML = playerTwoList.length + ' cards';
  } else {

    again();
  }
  console.log(playerOneList);
  console.log(playerTwoList);
  if (playerOneList.length == 0) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins the Game!';
    document.getElementById("btn").innerHTML = 'Play Again';
    document.querySelector('button').addEventListener('click', function() {
      window.location.reload();
      return false;
    });
  }
  if (playerTwoList.length == 0) {
    document.querySelector("h1").innerHTML = 'Player 1 Wins the Game!';
    document.getElementById("btn").innerHTML = 'Play Again';
    document.querySelector('button').addEventListener('click', function() {
      window.location.reload();
      return false;
    });
  }
}
document.querySelector("button").addEventListener('click', function(){
  audio.play();
  play();
});
