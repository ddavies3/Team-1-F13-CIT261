<div id = output>
var list = {};
list.can = 'beans';
list.bag = 'corn';
list.sack = 'flour';
localStorage.setItem( 'list', JSON.stringify(list) );
console.log( JSON.parse( localStorage.getItem( 'list' ) ) );

</div>