var liar = {};
list.bags = sugar;
list.bags = flour;
list.can = 'corn';
list.can = 'beans';
console.log( list );
localStorage.setItem( 'car', JSON.stringify(list) );
console.log( JSON.parse( localStorage.getItem( 'list' ) ) );