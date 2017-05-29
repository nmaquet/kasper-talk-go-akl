// @flow

/*

- any is a subtype and a supertype of all values
- mixed is a supertype of all values, but a subtype of none

 */

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean
}

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };
const smurfette = { name: "Smurfette", age: 150, isAwake: false };

function mkSmurf(value: mixed): Smurf {
    if (typeof value === 'string') {
        return { name: value, age: 100, isAwake: true};
    } else if (typeof value === 'number') {
        return { name: 'Smurf', age: 100, isAwake: true};
    }
    throw new Error('Dude ???');
}
