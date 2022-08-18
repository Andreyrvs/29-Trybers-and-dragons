import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _player2: Fighter;
  constructor(protected _player1: Fighter, player2: Fighter) {
    super(_player1);

    this._player2 = player2;
  }

  fight(): number {
    if (super.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      let index = super.player.lifePoints;
      for (index; index !== this._player2.lifePoints; index += 1) {
        super.player.attack(this._player2);
        this._player2.attack(super.player);
      }
    }
    if (super.player.lifePoints === -1) return -1;
    
    return 1;
  }
}
// super.player.attack(this._player2), 
// this._player2.attack(super.player)
export default PVP;

// super.player.receiveDamage(this._player2.strength);
// this._player2.receiveDamage(super.player.strength);
// if (super.fight() === 1) {
//   return console.log('Player 1 wins');
// }
// if (super.fight() === -1) {
//   return console.log('Player 2 wins');
// }