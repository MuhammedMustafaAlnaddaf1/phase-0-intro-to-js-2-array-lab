// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat(name) {
  let catsCopy = cats.slice();
  catsCopy.push(name);
  return catsCopy;
}

function prependCat(name) {
  let catsCopy = cats.slice();
  catsCopy.unshift(name);
  return catsCopy;
}

function removeLastCat(name) {
  let catsCopy = cats.slice();
  catsCopy.pop();
  return catsCopy;
}

function removeFirstCat(name) {
  let catsCopy = cats.slice();
  catsCopy.shift();
  return catsCopy;
}
