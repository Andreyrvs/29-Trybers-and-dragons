import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Base extends Archetype {
  constructor(name: string) {
    super(name);
  }

  public get energyType(): EnergyType {
    throw new Error('Method not implemented.');
  }
}

export default Base;