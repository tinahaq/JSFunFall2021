import { getAnswer } from "../getAnswer.js";

const myNameStr = getAnswer("../exercises/01-variables-numbers/01-my-name.js");
const fixErrorStr = getAnswer(
  "../exercises/01-variables-numbers/02-fix-error.js"
);
const addStr = getAnswer("../exercises/01-variables-numbers/03-add.js");

export const myName = eval(`() => {
  ${myNameStr}
  return myName;
}`);

export const fixError = eval(`() => {
  ${fixErrorStr}
  return numberOfLikes;
}`);

export const add = eval(`(a, b) => {
  ${addStr}
  return sum;
}`);
