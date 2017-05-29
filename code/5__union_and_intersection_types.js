// @flow

/*
 * any literal can be a type
 * union: type T = T1 | T2 | ...
 * intersection: type T = T1 & T2 & ...
 */

type Smurf = {
    name: string,
    age: number,
    status: 'awake' | 'asleep' | 'zombie',
}

// const papaSmurf: Smurf = { name: "Papa Smurf", age: 300, status: 'awake' };
const smurfette: Smurf = { name: "Smurfette", age: 150, status: 'zombie' };

type Spell = string

type Wizard = {
    spells: Spell[]
}

type SmurfWizard = Smurf & Wizard;

const papaSmurf : SmurfWizard = {
    name: "Papa Smurf",
    age: 300,
    status: 'awake',
    spells: ['fireball', 'sleep'],
};