// @flow

/*

 { foo? : T } is optionally T, meaning T | void
 { foo : ?T } is maybe T, meaning T | null | void

  No sugar for `T | null`, but easy enough to type anyway

 */

type Smurf = { name: string, age: ?number }; // TODO: immortal smurfs ?

const papa: Smurf = { name: "Papa Smurf", age: 300 };
const smurfette: Smurf = { name: "Smurfette", age: 200 };

function toString(smurf: Smurf, suffix: string = "") {
    if (smurf.age == null){
        return `${smurf.name} is immortal ${suffix}`;
    }
    return `${smurf.name} is ${smurf.age} years old ${suffix}`;
}