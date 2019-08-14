import initKostky from "../Model/KostkyModel";
import initGameState from "../Model/Score";
import rules from "../Model/Rules";

const initState = {
  Kostky: initKostky,
  GameState: initGameState,
  Rules: rules,
  kliknuteKostky: []
};

export default (state = initState, action) => {
  console.log(action.type);

  let newState = { ...state };

  console.log(newState.kliknuteKostky);

  switch (action.type) {
    case kostkaKlik:
      newState.Kostky[action.index].isDisabled = true;
      newState.kliknuteKostky.push(newState.Kostky[action.index].cislo);
      return newState;

    case handleThrow:
      if (newState.GameState.score === 0) {
        for (let i = 0; i < newState.Kostky.length; i++) {
          newState.Kostky[i].isDisabled = false;
        }
      }
      for (let i = 0; i < newState.Kostky.length; i++) {
        newState.Kostky[i].cislo = Math.floor(Math.random() * 6) + 1;
      }
      return newState;

    case handleNext:
      for (let i = 0; i < newState.Kostky.length; i++) {
        newState.Kostky[i].cislo = Math.floor(Math.random() * 6) + 1;
      }
      let status = false;
      newState.Rules.map(pravidlo => {
        if (
          JSON.stringify(pravidlo.soucet) ===
          JSON.stringify(newState.kliknuteKostky)
        ) {
          newState.GameState.score += pravidlo.body;
          status = true;
        }
      });
      if (status === false) {
        alert("Prohrál jste!");
        for (let i = 0; i < newState.Kostky.length; i++) {
          newState.Kostky[i].isDisabled = false;
        }
        newState.GameState.score = 0;
      }
      newState.kliknuteKostky = [];
      return newState;

    case handleEnd:
      if (newState.GameState.score >= 2000) {
        alert("Vyhrál jste!");
        for (let i = 0; i < newState.Kostky.length; i++) {
          newState.Kostky[i].isDisabled = false;
        }
        newState.GameState.score = 0;
      } else {
        for (let i = 0; i < newState.Kostky.length; i++) {
          newState.Kostky[i].isDisabled = false;
          newState.Kostky[i].cislo = Math.floor(Math.random() * 6) + 1;
        }
      }
      newState.kliknuteKostky = [];
      return newState;

    default:
      return newState;
  }
};

const kostkaKlik = "kostkaKlik-action;";
const handleThrow = "handleThrow-action;";
const handleNext = "handleNext-action;";
const handleEnd = "handleEnd-action;";

export const actionCreators = {
  kostkaKlik: index => ({ type: kostkaKlik, index: index }),
  handleThrow: () => ({ type: handleThrow }),
  handleNext: () => ({ type: handleNext }),
  handleEnd: () => ({ type: handleEnd })
};
