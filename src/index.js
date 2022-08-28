import './style.css'
import cardsDatafrom from '../data/ancients'
import GeneralDeck from '../data/mythicCards/index'

const deckCard = document.querySelector('.deck-img');
const deckOpen = document.querySelector('.deck-open');
const formGameDeck = document.querySelector('.form');
const azathoth = document.querySelector('.azathoth');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');
const cthulthu = document.querySelector('.cthulthu');
const title = document.querySelector('.title');
const stagecounter = document.querySelector('.stagecounter');
const elements = document.querySelector('.elements');

const firstGreenCount = document.querySelector('.first-green');
const secondGreenCount = document.querySelector('.second-green');
const thirdGreenCount = document.querySelector('.third-green');
const firstBrownCount = document.querySelector('.first-brown');
const secondBrownCount = document.querySelector('.second-brown');
const thirdBrownCount = document.querySelector('.third-brown');
const firstBlueCount = document.querySelector('.first-blue');
const secondBlueCount = document.querySelector('.second-blue');
const thirdBlueCount = document.querySelector('.third-blue  ');


let ancientNum;
const generalDeck = new GeneralDeck(getIndexesOfPlayingCards(...getTotalNumberOfCardsEachColor(ancientNum)))
let gameDeck = [];

function getTotalNumberOfCardsEachColor (ancient) {
  //ancient = ancientNum;
  let totalBlue = 0;
  let totalGreen = 0;
  let totalBrown = 0;
  let i;

  switch(ancient) {
    case 1:
      i = 1
      break
    case 2:
      i = 2
      break
    case 3:
      i = 3
      break
    default:
    i = 0
  }

  totalBlue += cardsDatafrom[i].firstStage.blueCards;
  totalBlue += cardsDatafrom[i].secondStage.blueCards;
  totalBlue += cardsDatafrom[i].thirdStage.blueCards;

  totalGreen += cardsDatafrom[i].firstStage.greenCards;
  totalGreen += cardsDatafrom[i].secondStage.greenCards;
  totalGreen += cardsDatafrom[i].thirdStage.greenCards;

  totalBrown += cardsDatafrom[i].firstStage.brownCards;
  totalBrown += cardsDatafrom[i].secondStage.brownCards;
  totalBrown += cardsDatafrom[i].thirdStage.brownCards;

  return [totalBlue, totalGreen, totalBrown]
}

function getTotalNumberOfCardsEachPhaseEachColor (ancient) {
  let firstStageBlueCards = 0;
  let secondStageBlueCards = 0;
  let thirdStageBlueCards = 0;
  let firstStageGreenCards = 0;
  let secondStageGreenCards = 0;
  let thirdStageGreenCards = 0;
  let firstStageBrownCards = 0;
  let secondStageBrownCards = 0;
  let thirdStageBrownCards = 0;

  let i;

  switch(ancient) {
    case 1:
      i = 1
      break
    case 2:
      i = 2
      break
    case 3:
      i = 3
      break
    default:
    i = 0
  }

  firstStageBlueCards += cardsDatafrom[i].firstStage.blueCards;
  secondStageBlueCards += cardsDatafrom[i].secondStage.blueCards;
  thirdStageBlueCards += cardsDatafrom[i].thirdStage.blueCards;

  firstStageGreenCards += cardsDatafrom[i].firstStage.greenCards;
  secondStageGreenCards += cardsDatafrom[i].secondStage.greenCards;
  thirdStageGreenCards += cardsDatafrom[i].thirdStage.greenCards;

  firstStageBrownCards += cardsDatafrom[i].firstStage.brownCards;
  secondStageBrownCards += cardsDatafrom[i].secondStage.brownCards;
  thirdStageBrownCards += cardsDatafrom[i].thirdStage.brownCards;

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

  renderCardStageNumber(firstStageGreenCards, secondStageGreenCards, thirdStageGreenCards, firstStageBrownCards, secondStageBrownCards, thirdStageBrownCards, firstStageBlueCards, secondStageBlueCards, thirdStageBlueCards)

  return finalDeck
}

function renderCardStageNumber (firstGreen,secondGreen,thirdGreen,firstBrown,secondBrown,thirdBrown,firstBlue,secondBlue,thirdBlue) {
  firstGreenCount.textContent = firstGreen;
  secondGreenCount.textContent = secondGreen;
  thirdGreenCount.textContent = thirdGreen;
  firstBrownCount.textContent = firstBrown;
  secondBrownCount.textContent = secondBrown;
  thirdBrownCount.textContent = thirdBrown;
  firstBlueCount.textContent = firstBlue;
  secondBlueCount.textContent = secondBlue;
  thirdBlueCount.textContent = thirdBlue;
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
  let [card] = pickACardFromDeck()
  if(!card){alert('Form a new deck and click again')}
  deckOpen.style.backgroundImage = `url(${card.cardFace})`
}

function startAzathoth () {
  ancientNum = 0;
  iogSothoth.classList.add('dinone')
  shubNiggurath.classList.add('dinone')
  cthulthu.classList.add('dinone')
  stagecounter.classList.remove('dinone')
  elements.classList.remove('dinone')
  title.textContent = 'Difficulty is normal, click button to create a deck'
}

function startIogSothoth () {
  ancientNum = 2;
  azathoth.classList.add('dinone')
  shubNiggurath.classList.add('dinone')
  cthulthu.classList.add('dinone')
  stagecounter.classList.remove('dinone')
  elements.classList.remove('dinone')
  title.textContent = 'Difficulty is normal, click button to create a deck'
}

function startShubNiggurath () {
  ancientNum = 3;
  azathoth.classList.add('dinone')
  iogSothoth.classList.add('dinone')
  cthulthu.classList.add('dinone')
  stagecounter.classList.remove('dinone')
  elements.classList.remove('dinone')
  title.textContent = 'Difficulty is normal, click button to create a deck'
}

function startCthulthu () {
  ancientNum = 1;
  azathoth.classList.add('dinone')
  iogSothoth.classList.add('dinone')
  shubNiggurath.classList.add('dinone')
  stagecounter.classList.remove('dinone')
  elements.classList.remove('dinone')
  title.textContent = 'Difficulty is normal, click button to create a deck'
}

azathoth.addEventListener('click', startAzathoth)
iogSothoth.addEventListener('click', startIogSothoth)
shubNiggurath.addEventListener('click', startShubNiggurath)
cthulthu.addEventListener('click', startCthulthu)

deckCard.addEventListener('click', showCard)
formGameDeck.addEventListener('click', function () {gameDeck = getTotalNumberOfCardsEachPhaseEachColor(ancientNum)})
