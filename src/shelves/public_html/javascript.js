localStorage.setItem('favorite','vanilla');
localStorage.setItem('favoriteflavor','chocolate');
var taste = localStorage.getItem('favorite');
var tast = localStorage.getItem('favoriteflavor');
console.log(taste, tast);

if(localStorage && localStorage.getItem('taste)){
render(JSON.parse(localStorage.getItem('taste)));