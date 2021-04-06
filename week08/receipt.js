// add selection to Total:
function addTotal(item){
  let i_1 = 1200.50;
  let i_2 = 2243.75;
  let i_3 = 324200.00;
  let i_4 = 1000000000.00;


  let addItems = 0;

  switch(item){
    case 1 : document.getElementById('total').innerHTML = '$'+ addItems + i_1; break;//addItems + i_1;
    case 2 : document.getElementById('total').innerHTML = '$'+ addItems + i_2; break;
    case 3 : document.getElementById('total').innerHTML = '$'+ addItems + i_3; break;
    case 4 : document.getElementById('total').innerHTML = '$'+ addItems + i_4; break;
    default : document.getElementById('total').innerHTML = '$0.00';
  }

  //document.getElementById('total').innerHTML = '$' + addItems;

  //let total = document.getElementById('total').innerHTML = '$' + currentTotal;
  //document.getElementById('item_2').value;
  //document.getElementById('item_3').value;
  //document.getElementById('item_4').value;


}