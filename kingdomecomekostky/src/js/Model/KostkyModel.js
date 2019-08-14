const initKostky = [];

class KostkaModel {
  constructor(isDisabled, cislo, index) {
    this.isDisabled = isDisabled;
    this.cislo = cislo;
    this.index = index;
  }
}

for (let index = 0; index < 6; index++) {
  initKostky.push(new KostkaModel(true, 0, index));
}

export default initKostky;
