// @flow

/*

* Structural typing for objects
* Type aliases

 */

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean,
}

const papaSmurf: Smurf = { name: "Papa Smurf", age: 300, isAwake: true };

function toString(smurf: Smurf) {
    return `${smurf.name} is ${smurf.age} years old`;
}

toString(papaSmurf);