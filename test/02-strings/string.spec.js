import { expect } from "chai";
import { stringLength, getLastWordInPlaceName } from "./strings-test-helper.js";

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
});
