abstract class Race {
  // readonly _name: string; 
  // readonly _dexterity: number;
  // static _createdRacesInstances: number;
  
  constructor(private _name: string, private _dexterity: number) { }
  
  public get name() : string {
    return this._name;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number; 
}

export default Race;