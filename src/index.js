import './style.css'
import cardsDatafrom from '../data/ancients'
import GeneralDeck from '../data/mythicCards/index'

const deckCard = document.querySelector('.deck-img');
const deckOpen = document.querySelector('.deck-open');
const formGameDeck = document.querySelector('.form');
const generalDeck = new GeneralDeck(getIndexesOfPlayingCards(...getTotalNumberOfCardsEachColor()))

let gameDeck = [];

function getTotalNumberOfCardsEachColor () {
  let totalBlue = 0;
  let totalGreen = 0;
  let totalBrown = 0;

  totalBlue += cardsDatafrom[0].firstStage.blueCards;
  totalBlue += cardsDatafrom[0].secondStage.blueCards;
  totalBlue += cardsDatafrom[0].thirdStage.blueCards;

  totalGreen += cardsDatafrom[0].firstStage.greenCards;
  totalGreen += cardsDatafrom[0].secondStage.greenCards;
  totalGreen += cardsDatafrom[0].thirdStage.greenCards;

  totalBrown += cardsDatafrom[0].firstStage.brownCards;
  totalBrown += cardsDatafrom[0].secondStage.brownCards;
  totalBrown += cardsDatafrom[0].thirdStage.brownCards;

  return [totalBlue, totalGreen, totalBrown]
}

function getTotalNumberOfCardsEachPhaseEachColor  () {
  let firstStageBlueCards = 0;
  let secondStageBlueCards = 0;
  let thirdStageBlueCards = 0;
  let firstStageGreenCards = 0;
  let secondStageGreenCards = 0;
  let thirdStageGreenCards = 0;
  let firstStageBrownCards = 0;
  let secondStageBrownCards = 0;
  let thirdStageBrownCards = 0;

  firstStageBlueCards += cardsDatafrom[0].firstStage.blueCards;
  secondStageBlueCards += cardsDatafrom[0].secondStage.blueCards;
  thirdStageBlueCards += cardsDatafrom[0].thirdStage.blueCards;

  firstStageGreenCards += cardsDatafrom[0].firstStage.greenCards;
  secondStageGreenCards += cardsDatafrom[0].secondStage.greenCards;
  thirdStageGreenCards += cardsDatafrom[0].thirdStage.greenCards;

  firstStageBrownCards += cardsDatafrom[0].firstStage.brownCards;
  secondStageBrownCards += cardsDatafrom[0].secondStage.brownCards;
  thirdStageBrownCards += cardsDatafrom[0].thirdStage.brownCards;

  const firstStage = generalDeck.getCards([firstStageBlueCards,firstStageGreenCards,firstStageBrownCards])
  const secondStage = generalDeck.getCards([secondStageBlueCards,secondStageGreenCards,secondStageBrownCards])
  const thirdStage = generalDeck.getCards([thirdStageBlueCards,thirdStageGreenCards,thirdStageBrownCards])

  const mixStage = (stage) => {
    return stage.flat().sort(() => Math.random() - 0.5);
  }

  const mixedFirstStage = mixStage(firstStage)
  const mixedSecondStage = mixStage(secondStage)
  const mixedThirdStage = mixStage(thirdStage)
  let finalDeck = [...mixedFirstStage, ...mixedSecondStage, ...mixedThirdStage];

  return finalDeck
}

function getIndexesOfPlayingCards (numberOfBlue, numberOfGreen, numberOfBrown) {
  let blueRandPlayingCard = [];
  let greenRandPlayingCard = [];
  let brownRandPlayingCard = [];

  while (numberOfBlue > 0) {
    let randInt = getRandomInt(0, 11);

    if (blueRandPlayingCard.includes(randInt)) {
      continue
    } else {
      blueRandPlayingCard.push(randInt);
      numberOfBlue--
    }
  }

  while (numberOfGreen > 0) {
    let randInt = getRandomInt(0, 17);
    if (greenRandPlayingCard.includes(randInt)) {
      continue
    } else {
      greenRandPlayingCard.push(randInt);
      numberOfGreen--
    }
  }

  while (numberOfBrown > 0) {
    let randInt = getRandomInt(0, 20);
    if (brownRandPlayingCard.includes(randInt)) {
      continue
    } else {
      brownRandPlayingCard.push(randInt);
      numberOfBrown--
    }
  }

  const tempArr = [];
  tempArr.push(blueRandPlayingCard, greenRandPlayingCard, brownRandPlayingCard)

  return tempArr
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomlyKneadEachStage = (firstStageLength, secondStageLength, thirdStageLength) => {
  firstRandomOrder = [];
  secondRandomOrder = [];
  thirdRandomOrder = [];

  while (firstStageLength > 0) {
    let randFirstStageOrder = getRandomInt(0, firstStageLength);
    if (firstRandomOrder.includes(randFirstStageOrder)) {
      continue
    } else {
      firstRandomOrder.push(randFirstStageOrder);
      firstStageLength--
    }
  }

  while (secondStageLength > 0) {
    let randSecondStageOrder = getRandomInt(0, secondStageLength);
    if (secondRandomOrder.includes(randSecondStageOrder)) {
      continue
    } else {
      secondRandomOrder.push(randSecondStageOrder);
      secondStageLength--
    }
  }

  while (thirdStageLength > 0) {
    let randThirdStageOrder = getRandomInt(0, thirdStageLength);
    if (thirdRandomOrder.includes(randThirdStageOrder)) {
      continue
    } else {
      thirdRandomOrder.push(randThirdStageOrder);
      thirdStageLength--
    }
  }

  return [firstRandomOrder, secondRandomOrder, thirdRandomOrder]

}

function pickACardFromDeck () {
  return gameDeck.splice(0,1);
}

function showCard () {

  // let img = new Image();
  let [card] = pickACardFromDeck()
  if(!card){alert('Game Over')}
  deckOpen.style.backgroundImage = `url(${card.cardFace})`
  // img.src = card.cardFace;
  // if(img.src){console.log(img.src)}
  // deckOpen.appendChild(img)
}


deckCard.addEventListener('click', showCard)
formGameDeck.addEventListener('click', function () {gameDeck = getTotalNumberOfCardsEachPhaseEachColor()})
