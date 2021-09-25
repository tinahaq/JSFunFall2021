import { getAnswer } from "../getAnswer.js";

const myNameStr = getAnswer("../exercises/01-variables-numbers/01-my-name.js");
const fixErrorStr = getAnswer(
  "../exercises/01-variables-numbers/02-fix-error.js"
);
const addStr = getAnswer("../exercises/01-variables-numbers/03-add.js");

const incrementedAgeByAYear = getAnswer("../exercises/01-variables-numbers/04-age-me-by-a-year.js");

const decrementAgeByAYearAnswer = getAnswer("../exercises/01-variables-numbers/05-make-me-younger-by-a-year.js");

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

export const ageMeByAYear = eval(`(age)=>{
${incrementedAgeByAYear}
return age;
}`)

export const makeMeYoungerByAYear = eval(`(age)=>{
${decrementAgeByAYearAnswer}
return age;
}`)