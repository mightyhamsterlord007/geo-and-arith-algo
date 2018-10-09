const patternDetect = require("./index");

test("patternDetect is a function", () => {
    expect(typeof patternDetect).toBe("function");
});

test("patternDetect", () => {
    expect(patternDetect([1, 1, 2, 1])).toBe(-1);
    expect(patternDetect([2, 5, 4, 5])).toBe(-1);
});

test("patternDetect works for positive arithmetic patterns", () => {
    expect(patternDetect([1, 2, 3, 4])).toBe("Arithmetic");
    expect(patternDetect([2, 4, 6, 8])).toBe("Arithmetic");
});

test("patternDetect works for negative arithmetic patterns", () => {
    expect(patternDetect([-8, -6, -4, -2])).toBe("Arithmetic");
    expect(patternDetect([-10, 0, 10, 20])).toBe("Arithmetic");
});

test("patternDetect works for geometric patterns", () => {
    expect(patternDetect([2, 6, 18, 54])).toBe("Geometric");
    expect(patternDetect([100, 50, 25, 12.5])).toBe("Geometric");
});
