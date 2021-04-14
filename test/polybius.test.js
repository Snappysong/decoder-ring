const { expect } = require("chai");
const { polybius: polybiusModule } = require("../src/polybius");

describe("polybiusModule.polybius", () => {
    it("should return a string" , () => {
        const actual = polybiusModule("message", true);
        expect(actual).to.be.a('string');
    })
    it("should return a coded string of numbers", () => {
        const actual = polybiusModule("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters in the input", () => {
        const actual = polybiusModule("ThiNKFUL");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    })

})