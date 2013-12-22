var list = {};
list.can = 'beans';
list.bag = 'corn';
list.sack = 'flour';
localStorage.setItem( 'list', JSON.stringify(list) );
console.out.println( JSON.parse( localStorage.getItem( 'list' ) ) );