// @flow

/*

* either T[]
* or Array<T>

 */

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean
}

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };
const smurfette = { name: "Smurfette", age: 150, isAwake: false};

const smurfs: Smurf[] = [ papaSmurf, smurfette];

function sumOfAges(smurfs: Array<Smurf>): number {
    return smurfs.reduce((acc, s) => acc + s.age, 0);
}