import { getAnswer } from "../getAnswer.js";

const stringLengthStr = getAnswer(
  "../exercises/02-strings/03-string-length.js"
);
const getLastWordInPlaceNameStr = getAnswer(
  "../exercises/02-strings/05-get-last-word-in-place-name.js"
);

export const stringLength = eval(`(str) => {
  ${stringLengthStr}
  return strLength;
}`);

export const getLastWordInPlaceName = eval(`(place) => {
  ${getLastWordInPlaceNameStr}
  return newPlace;
}`);
