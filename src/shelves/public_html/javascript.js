var list = {};
list.can = 'beans';
list.bag = 'corn';
list.sack = 'flour';
localStorage.setItem( 'list', JSON.stringify(list) );
console.log( JSON.parse( localStorage.getItem( 'list' ) ) );

if(localStorage && localStorage.getItem('list')){
  render(JSON.parse(localStorage.getItem('list')));
} else {
  $('#list').html(''+loading+'');
  var query = 'select centroid,woeid,name,boundingBox'+
              ' from geo.places.children(0)'+
              ' where parent_woeid=1 and placetype="country"'+
              ' | sort(field="name")';
  var YQL = 'http://query.yahooapis.com/v1/public/yql?q='+
             encodeURIComponent(query)+'&diagnostics=false&format=json';
  $.getJSON(YQL,function(data){
    if(localStorage){
      localStorage.setItem('thewholefrigginworld',JSON.stringify(data));
    }
    render(data);
  });
}