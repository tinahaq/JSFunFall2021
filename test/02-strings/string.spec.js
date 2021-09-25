import { expect } from "chai";
import { stringLength, getLastWordInPlaceName, convertStringToInt, getTheCharacterPosition, getLastCharacter, replaceLastName, capitalizeLastName } from "./strings-test-helper.js";

describe("2. Strings", () => {
  describe("03-string-length", () => {
    it('should count the number of characters within a string "str"', () => {
      expect(stringLength("Javascript")).equal(10);
    });
  });

  describe("05-get-last-word-in-place-name", () => {
    it('should contain a variable "newPlace" equal to the second word within a place name', () => {
      expect(getLastWordInPlaceName("Los Angeles")).equal("Angeles");
    });
  });

  describe("convertStringToInt()", () => {
    it("should cast the string to an integer", () => {
      expect(convertStringToInt("5")).equal(5);
    });
  });

  describe("getTheCharacterPosition()", () => {
    it("should return the index position of the word", () => {
      expect(getTheCharacterPosition("James", "a")).equal(1);
    });
  });

  describe("getLastCharacter()", () => {
    it("should return the last letter of the string", () => {
      expect(getLastCharacter("Marvel")).equal("l");
    });
  });

  describe("replaceLastName()", () => {
    it("should replace the last name of the full name with the new last name", () => {
      expect(replaceLastName("Gordon Ramsey", "Smith")).equal("Gordon Smith");
    });
  });
  describe("capitalizeLastName()", () => {
    it("should capitalize the last name", () => {
      expect(capitalizeLastName("Jane doe")).equal("Jane Doe");
    });
  });
});
