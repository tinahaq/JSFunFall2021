import { expect } from "chai";
import { myName, fixError, add } from "./variables-number-test-helper.js";

describe("exercises/01-intro-variables-numbers/", () => {
  describe("01-my-name", () => {
    it('should contain a variable "myName" equal to your name', () => {
      const name = myName();
      expect(name).to.be.a("string").to.have.length.greaterThan(1);
    });
  });

  describe("02-fix-error", () => {
    it('"numberOfLikes" should not throw an error and be equal to 58', () => {
      const numberOfLikes = fixError();
      expect(numberOfLikes).to.equal(58);
    });
  });

  describe("03-add", () => {
    it('should contain a variable "sum" equal to the numbers "a" plus "b"', () => {
      const sum = add(5, 5);
      expect(sum).to.equal(10);
    });
  });
});
