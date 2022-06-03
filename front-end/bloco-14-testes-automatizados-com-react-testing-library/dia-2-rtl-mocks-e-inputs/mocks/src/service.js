const randomNumber = () => Math.floor(Math.random() *100);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.substr(0, 1);

const concatenate = (string1, string2) => string1.concat(string2);

module.exports = {randomNumber, upperCase, firstLetter, concatenate};