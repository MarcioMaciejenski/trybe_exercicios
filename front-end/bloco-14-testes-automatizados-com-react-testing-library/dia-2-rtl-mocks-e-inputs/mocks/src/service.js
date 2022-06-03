const randomNumber = () => Math.floor(Math.random() * 100);

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.substr(0, 1);

const concatenate = (string1, string2) => string1.concat(string2);

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json().then((json) =>
    response.ok ? Promise.resolve(json) : Promise.reject(json)));
}
module.exports = { randomNumber, upperCase, firstLetter, concatenate, fetchDog };