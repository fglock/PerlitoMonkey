const constructors = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
];

for (var constructor of constructors) {
    assertEq(constructor.prototype.join.length, 1);

    assertEq(new constructor([1, 2, 3]).join(), "1,2,3");
    assertEq(new constructor([1, 2, 3]).join(undefined), "1,2,3");
    assertEq(new constructor([1, 2, 3]).join(null), "1null2null3");
    assertEq(new constructor([1, 2, 3]).join(""), "123");
    assertEq(new constructor([1, 2, 3]).join("+"), "1+2+3");
    assertEq(new constructor([1, 2, 3]).join(.1), "10.120.13");
    assertEq(new constructor([1, 2, 3]).join({toString(){return "foo"}}), "1foo2foo3");
    assertEq(new constructor([1]).join("-"), "1");
    assertEq(new constructor().join(), "");
    assertEq(new constructor().join("*"), "");
    assertEq(new constructor(1).join(), "0");
    assertEq(new constructor(3).join(), "0,0,0");

    assertThrowsInstanceOf(() => new constructor().join({toString(){throw new TypeError}}), TypeError);
    assertThrowsInstanceOf(() => new constructor().join(Symbol()), TypeError);

    // Called from other globals.
    if (typeof newGlobal === "function") {
        var join = newGlobal()[constructor.name].prototype.join;
        assertEq(join.call(new constructor([1, 2, 3]), "\t"), "1\t2\t3");
    }

    // Throws if `this` isn't a TypedArray.
    var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
    invalidReceivers.forEach(invalidReceiver => {
        assertThrowsInstanceOf(() => {
            constructor.prototype.join.call(invalidReceiver);
        }, TypeError, "Assert that join fails if this value is not a TypedArray");
    });
    // FIXME: Should throw exception if `this` is a proxy, see bug 1115361.
    constructor.prototype.join.call(new Proxy(new constructor(), {}));

    // Test that the length getter is never called.
    assertEq(Object.defineProperty(new constructor([1, 2, 3]), "length", {
        get() {
            throw new Error("length accessor called");
        }
    }).join("\0"), "1\0002\0003");
}

assertDeepEq(new Float32Array([null, , NaN]).join(), "0,NaN,NaN");
assertDeepEq(new Float64Array([null, , NaN]).join(), "0,NaN,NaN");

if (typeof reportCompare === "function")
    reportCompare(true, true);
