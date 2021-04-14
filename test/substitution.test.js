const { expect } = require("chai");
const { substitution: substitutionModule } = require("../src/substitution");

describe("substitutionModule.substitution", () => {
    it("should return false if there is no alphabet parameter", () => {
        const actual = substitutionModule("thinkful");
        expect(actual).to.be.false;
    })
    it("should return false if alphabet is not 26 chars", () => {
        const actual = substitutionModule("thinkful", "short");
        expect(actual).to.be.false;
    })
    it("should return false if alphabet chars are not unique", () => {
        const actual = substitutionModule("thinkful", "ababababababababababababab");
        expect(actual).to.be.false;
    })
    it("should ignore capital letters", () => {
        const actual = substitutionModule("CaPiTaLs", "abcdefghijklmnopqrstuvwxyz");
        const expected = "capitals";
        expect(actual).to.equal(expected);
    })
})