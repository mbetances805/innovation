const poker = (h1, h2) => {
  // [{value:num, suit:num},{}]
  
  let h1Hand = convertHand(h1);
  let h2Hand = convertHand(h2);
  
  let h1Play = pokerPlay(h1Hand)
  let h2Play = pokerPlay(h2Hand)

  let gameOutcome = determineWinner(h1Play, h2Play);

  return gameOutcome;
};

const determineWinner = (h1Play, h2Play) => {
  let game = {'Royal Flush': 1, }
  if (game[h1Play] === game[h2Play]) {
    return ('Tie!')
  } else if (game[h1Play] < game[h2Play]) {
    return ('H1 Winner!');
  } else {
    return ('H2 Winner');
  }
}

const convertHand = (h) => {
  let numHash = {};
  let suitHash = {};
  for (let i = 0; i < h.length; i++) {
    if (!numHash[h[i].value]) {
      numHash[h[i].value] = 1;
    } else {
      let count = numHash[h[i].value];
      count++;
      numHash[h[i].value] = count;
    }
    
    if (!suitHash[h[i].suit]) {
      suitHash[h[i].suit] = 1;
    } else {
      let count = suitHash[h[i].suit];
      count++;
      suitHash[h[i].suit] = count;
    }
  }
  
  return {numHash, suitHash};

};

const pokerPlay = (gamePlay) => {
  let {numHash, suitHash} = gamePlay;
  if (royalFlushPlay(num, suit)) {
   return ('Royal Flush')
  } else if (straightFlushPlay(num, suit)) {
    
  } else if (fourOfAKindPlay(num)) {
    
  } else if ()
};

const royalFlushPlay = (num, suit) => {
  let suitSize = Object.keys(suit).length;
  let handNums = Object.keys(suit);
  handNums.sort(function(a,b){ return b - a })
  if (suitSize === 1) {
    let consecutive = consecutiveNums(handNums);
    if (consecutive && handNums[handNums.length - 1] === 10) {
      return true;
  } else {
    return false;
  }
  return false;
};

const straightFlushPlay = (num, suit) => {
  let suitSize = Object.keys(suit).length;
  let handNums = Object.keys(suit);
  handNums.sort(function(a,b){ return b - a })
  if (suitSize === 1) {
    let consecutive = consecutiveNums(handNums);
    if (consecutive) {
      return true;
    }
  } else {
    return false;
  }
};

const fourOfAKindPlay = (num) => {
  for (let key in num) {
    if (num[key] === 4) {
      return true;
    }
  }
  return false;
};

const fullHousePlay = (num) => {
  let numSize = Object.keys(num).length;
  if (numSize === 2) {
    for (let key in num) {
      if (num[key] !== 3 || num[key] !== 2) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const flushPlay = (suit) => {
  let suitSize = Object.keys(suit).length;
  if (suitSize === 1) {
    return true;
  }
  return false;
};

const straightPlay = (num) => {
  let numHand = Object.keys(num);
  return consecutiveNums(numHand);
};

const threeOfAKindPlay = (num) => {
  let numSize = Object.keys(num).length;
  
  if (numSize === 3) {
    for (let key in num) {
      if (num[key] === 3) {
        return true;
      }
    }
  } else {
    return false;
  }
  return false;
};

const twoPairPlay = (num) => {
  let counter = 0;
  
  for (let key in num) {
    if (num[key] === 2) {
      counter++;
    }
  }
  
  if (counter === 2) {
    return true;
  }
  
  return false;
};


const onePairPlay = (num) => {
  let counter = 0;
  
  for (let key in num) {
    if (num[key] === 2) {
      counter++;
    }
  }
  
  if (counter === 1) {
    return true;
  }
  
  return false;
};


const consecutiveNums = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    if (arr[j - 1] - arr[j] !== 1) {
      return false;
    }
  }
  return true;
};



