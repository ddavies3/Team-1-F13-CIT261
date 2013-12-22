var list = {};
list.canbean = 4;
list.bagcorn = 6;
list.sacksflour = 3;
localStorage.setItem( 'list', JSON.stringify(list) );
console.log( JSON.parse( localStorage.getItem( 'list' ) ) );

