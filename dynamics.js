const m = 0.01;
const k = 0.3;
const romu = 0.06;


let x = 0;
let v = 0;
let a = 0;


export function setStart(pos) {
    x = pos;
    v = 0;
    a = 0;
}


export function step(delta) {
    const Fk = -k * x;
    const Fv = -romu * v;
    const F = Fk + Fv;

    a = F / m;
    v += a * delta;
    x += v * delta;
    return x;
}


export function done() {
    const delta = [x, v, a].reduce((acc, val) => acc + Math.abs(val), 0);
    return delta < 1e-3;
}

