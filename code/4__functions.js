// @flow

/*

 Function types are (arg1: T1, arg2: T2, ...) => T

 */

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean
}

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };
const smurfette = { name: "Smurfette", age: 150, isAwake: false };

type SmurfMetric = (s: Smurf) => number;

function measure(smurf: Smurf, metrics: SmurfMetric[]): number[] {
    const result = [];
    for (const metric of metrics) {
        result.push(metric(smurf));
    }
    return result;
}

//measureMetrics();