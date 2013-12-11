var xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');

var items;
xhr.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    items = JSON.parse(this.responseText);
    addItems(items);
  }
};
xhr.send();
//test

var outputEl = document.getElementById("output");

var addItems = function(items){
  outputEl.innerHTML = "";
  for(var i=0;i<items.length;i++){
//    outputEl.innerHTML += "<div>"+items[i].name+"</div>";
    console.log(outputEl.innerHTML);
    var itemEl = document.createElement('div');
    itemEl.textContent = items[i].name;
    
    outputEl.appendChild(itemEl);
  }
};