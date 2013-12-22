var list ={};
list.beans=4;
list.corn = 6;
list.cereal = 20;
list.chicken = 2;
console.log(list);
LocalStorage.setItem('list',JSON.stringify(list));
console.output(JSON.parse(LocalStorage.getItem('list')));

