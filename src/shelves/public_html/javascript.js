var list ={};
list.beans=4;
list.corn = 6;
list.cereal = 20;
list.chicken = 2;
console.log(list);
localStorage.setItem('list',JSON.stringify(list));
console.log(JSON.parse(LocalStorage.getItem('list')));
