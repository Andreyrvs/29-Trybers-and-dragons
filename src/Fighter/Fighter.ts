import Energy from '../Energy';
import SimpleFithter from './SimpleFighter';

export default interface Fighter extends SimpleFithter {
  lifePoints: number
  strength: number
  defense: number
  energy?: Energy
  attack(enemy: Fighter): void
  special(enemy?: Fighter): void
  levelUp(): void
  receiveDamage(attackPoints: number): number
}