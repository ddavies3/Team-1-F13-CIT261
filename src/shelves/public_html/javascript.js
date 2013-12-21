var list ={};
list.beans=4;
list.corn = 6;
list.cereal = 20;
lsit.chicken = 2;
console.log(list);
localStorage.setItem('list',JSON.stringify(list));
console.lolg(JSON.parse(LocalStorage.getItem('list')));
//test

/* var outputEl = document.getElementById("output");

/* var addItems = function(items){
  outputEl.innerHTML = "";
  for(var i=0;i<items.length;i++){
//    outputEl.innerHTML += "<div>"+items[i].name+"</div>";
    console.log(outputEl.innerHTML);
    var itemEl = document.createElement('div');
    itemEl.textContent = items[i].name;
    
    outputEl.appendChild(itemEl);
  }
/* }; */ */ */