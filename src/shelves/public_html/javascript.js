var list = {};
list.can = 'beans';
list.bag = 'corn';
list.sack = 'flour';
console.log ( list );
localStorage.setItem( 'list', JSON.stringify(list) );
console.log( JSON.parse( localStorage.getItem( 'list' ) ) );