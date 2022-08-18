import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _characterFighter: Fighter;
  private _monster: Monster[];
  constructor(characterFighter: Fighter, monster: Monster[]) {
    super(characterFighter);
    this._characterFighter = characterFighter;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((element) => {
      for (let index = 0; element.lifePoints > 0 
        && this._characterFighter.lifePoints > 0; index += 1) {
        this._characterFighter.attack(element);
        element.attack(this._characterFighter);     
      }
    });
    if (this.player.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}

export default PVE;