import brownCards from './brown';
import blueCards from './blue';
import greenCards from './green';

export default class GeneralDeck {
  constructor(indexesOfPlayingCards){
    this.brownCards = brownCards;
    this.blueCards = blueCards;
    this.greenCards = greenCards;
    this.indexesOfPlayingCards = indexesOfPlayingCards;
    //console.log(indexesOfPlayingCards)
  }
  getCards(countStageCardsEachColor){
    return countStageCardsEachColor.map((el, idx) => {
      let tempCards = this.indexesOfPlayingCards[idx].splice(0, el)
      switch(idx) {
        case 0:
        return tempCards.map(el => this.blueCards[el])
        case 1:
        return tempCards.map(el => this.greenCards[el])
        default:
          return tempCards.map(el => this.brownCards[el])
      }
    })
  }
}

// brownCards,
// blueCards,
// greenCards