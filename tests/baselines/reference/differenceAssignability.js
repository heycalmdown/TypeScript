//// [differenceAssignability.ts]
interface Gen {
    x: number;
}
interface Gen2 {
    parent: Gen;
    millenial: string;
}
function cloneAgain<T extends Gen & Gen2>(t: T): T - Gen {
    let rest: T - Gen;
    let rest1: T - Gen - Gen2;
    var { x, ...rest2 } = t;
    // assignability
    t = rest; // error, might be missing 'x'
    t = rest1; // error, might be missing 'x', 'parent' or 'millenial'
    t = rest2; // error, might be missing 'x'
    rest = t; // ok
    rest1 = t; // ok
    rest2 = t; // ok

    rest = rest2; // ok
    rest2 = rest; // ok
    rest1 = rest2; // ok ... ?
    rest2 = rest1; // error, might be missing 'parent' or 'millenial'
    rest1 = rest; // ok
    rest = rest1; // error, might be missing 'parent' or 'millenial'
    return rest2;
}


//// [differenceAssignability.js]
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && !e.indexOf(p))
        t[p] = s[p];
    return t;
};
function cloneAgain(t) {
    var rest;
    var rest1;
    var x = t.x, rest2 = __rest(t, ["x"]);
    // assignability
    t = rest; // error, might be missing 'x'
    t = rest1; // error, might be missing 'x', 'parent' or 'millenial'
    t = rest2; // error, might be missing 'x'
    rest = t; // ok
    rest1 = t; // ok
    rest2 = t; // ok
    rest = rest2; // ok
    rest2 = rest; // ok
    rest1 = rest2; // ok ... ?
    rest2 = rest1; // error, might be missing 'parent' or 'millenial'
    rest1 = rest; // ok
    rest = rest1; // error, might be missing 'parent' or 'millenial'
    return rest2;
}
