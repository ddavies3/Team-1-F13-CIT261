var list ={};
list.beans=4;
list.corn = 6;
list.cereal = 20;
lsit.chicken = 2;
console.log(list);
localStorage.setItem('list',JSON.stringify(list));
console.lolg(JSON.parse(LocalStorage.getItem('list')));
