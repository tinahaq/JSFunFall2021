let fullName = "John smith"; // e.g.

/**
 * You will change the value of "fullName" below. Capitalize the first letter of the the last name within "fullName". "fullName" below should be equal to your answer.
 *
 * @example
 * let fullName = "John smith"; // e.g.
 * The new value for "fullName" should result in "John Smith".
 *
 * Your answer should still work when "fullName" is equal to a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE


fullName = fullName.split(" ");
fullName = fullName[0].at(0).toUpperCase() + fullName[0].substring(1) + " " + fullName[1].at(0).toUpperCase() + fullName[1].substring(1);


//Can't use .join() for some reason.