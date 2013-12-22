localStorage.setItem('favorite','vanilla');
localStorage.setItem('favoriteflavor','chocolate');
var taste = localStorage.getItem('favorite','favoriteflavor');
console.log(taste);