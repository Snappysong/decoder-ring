const { expect } = require("chai");
const { caesar: caesarModule } = require("../src/caesar");

describe("caesarModule.caesar", () => {
    it("should return a string", () => {
        const actual = caesarModule("This is a string!", 1, true);
        expect(actual).to.be.a('string');
    })
    it("should return false if shift is equal to 0", () => {
        const actual = caesarModule("This is a string!", 0, true);
        expect(actual).to.be.false;
    })
    it("should return false if shift is less than -25", () => {
        const actual = caesarModule("This is a string!", -26, true);
        expect(actual).to.be.false;
    })
    it("should return false if shift is more than 25", () => {
        const actual = caesarModule("This is a string!", 26, true);
        expect(actual).to.be.false;
    })
    it("should return false if shift isn't entered", () => {
        const actual = caesarModule();
        expect(actual).to.be.false;
    })
    it("should return a shifted word", () => {
        const actual = caesarModule("thinkful", 3, true);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    })
    it("should return a shifted word with a negative shift", () => {
        const actual = caesarModule("thinkful", -3, true);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    })
})
