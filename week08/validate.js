//JavaScript File
// Morgage Calculator - Created for Week 07 assignment
const submit = (ev)=>{
  ev.preventDefault();
  //Get the input node values:
  let fn, ln, add, pho, card, date;
  fn = first_name.value;
  ln = last_name.value;
  add = address.value;
  pho = phone.value;
  card = credit_card.value;
  date = exp_date.value;



    
  // Doing the Math:
    

  if (fn.trim() == ''){
    document.getElementById('validate').innerHTML = "Missing First Name";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('first_name').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("first_name").focus();
  } else if (ln.trim() == ''){
    document.getElementById('validate').innerHTML = "Missing Last Name";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('last_name').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("last_name").focus();
  } else if (add.trim() == ''){
    document.getElementById('validate').innerHTML = "Shipping Address is Required";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('address').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("address").focus();
  } else if (pho.trim() == ''){
    document.getElementById('validate').innerHTML = "Phone Number is Required";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('phone').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("phone").focus();
  } else if (card.trim() == ''){
    document.getElementById('validate').innerHTML = "Credit Card Payment is Required";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('credit_card').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("credit_card").focus();
  } else if (date.trim() == ''){
    document.getElementById('validate').innerHTML = "Card Experation Date is Missing";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('exp_date').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("exp_date").focus();
  } else {
    //Submit and validation affirmation display:
    document.getElementById('validate').innerHTML = "Thanks for your purchase " + fn + "!";
    //clear text validation shadow:
    document.getElementById('validate').style.textShadow = 'none';
    //clear input box shadows:
    document.getElementById('first_name').style.boxShadow = 'none';
    document.getElementById('last_name').style.boxShadow = 'none';
    document.getElementById('address').style.boxShadow = 'none';
    document.getElementById('phone').style.boxShadow = 'none';
    document.getElementById('credit_card').style.boxShadow = 'none';
    document.getElementById('exp_date').style.boxShadow = 'none';
  }
    
    /*} else if (payment == null || isNaN(payment) || payment == " "){
        document.getElementById('payment').innerHTML = "Calculation output, recheck your numbers, no letters allowed";
        document.getElementById('payment').style.textShadow = '0px 0px 10px red';
    } else {
        //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row:
        payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('payment').innerHTML = `Monthly Payment = $${payment}`
        document.getElementById('payment').style.textShadow = 'none';
    }*/
    
    
}

const clear = (ev)=>{// When mouse clicks on 'clear' button:
  ev.preventDefault();
  //reset all user input using jquery:
  $('#morgage_calculator')[0].reset();
  $(':input').val('');
  $('#item').removeClass('');
  //clear validate notifications
  const valid = document.getElementById("validate");
  while (valid.hasChildNodes()) {
    document.getElementById('validate').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const v_card = document.getElementById("vCard");
  while (v_card.hasChildNodes()) {
    document.getElementById('vCard').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }

    /*
    while (.hasChildNodes()) {
        .removeChild(.firstChild);
        //document.getElementById('first_name').inputField.value = " ";
    }*/
    //input.value = null;
    //document.forms[0].reset();
  document.getElementById("first_name").focus(); // put cursor inside first_name input Field
};




const ValidateInput = (ev)=>{

  var ccNum = document.getElementById('credit_card').value;
  
  //var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  //var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  //var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  //var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  var testing = /^\d{4}-\d{4}-\d{4}-\d{4}$/; // Auto hyphen works, the other cards are to complex...
  
  var isValid = false;

  var v_select = document.getElementById('visa').checked;
  var m_select = document.getElementById('master').checked;
  var d_select = document.getElementById('discover').checked;
  var a_select = document.getElementById('americaExpress').checked;
  // var t_select = document.getElementById('test').checked;

  if (testing.test(ccNum) && v_select) {
    isValid = true;
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    document.getElementById('validate').innerHTML = "Valid Visa Card Number";
  } else if(testing.test(ccNum) && m_select) {
    isValid = true;
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    document.getElementById('validate').innerHTML = "Valid Master Card Number";
  } else if(testing.test(ccNum) && d_select) {
    isValid = true;
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    document.getElementById('validate').innerHTML = "Valid Discover Card Number";
  } else if(testing.test(ccNum) && a_select) {
    isValid = true;
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    document.getElementById('validate').innerHTML = "Valid American Express Card Number";
  } else if(v_select == false || m_select == false || d_select == false || a_select == false){
    isValid = false
    document.getElementById('validate').innerHTML = "Select Your Credit Card Type";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
  } else {
    document.getElementById('validate').innerHTML = "";
    document.getElementById('validate').style.textShadow = 'none';
  }
  
  if(isValid) {
    document.getElementById('vCard').innerHTML = "Card Accepted";
    document.getElementById('vCard').style.textShadow = '0px 0px 10px green';
  } else {
    document.getElementById('vCard').innerHTML = "Card Denied";
    document.getElementById('vCard').style.textShadow = '0px 0px 10px red';
    document.getElementById('credit_card').focus();
  }

}
const validatePhone = (ev)=>{
  var phone_in = document.getElementById('phone').value;
  var pho = /^\d{3}-\d{3}-\d{4}/; //Cannot get auto hyphen to work
  //Validate Phone Input
  if(pho.test(phone_in)){
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('validate').innerHTML = "Enter a Valid Phone Number = ###-###-####";
    document.getElementById('phone').focus();
  } else {
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    document.getElementById('validate').innerHTML = "Phone Number Accepted";
  }
}
  
  /* else if(testing.test(ccNum) && t_select) {
    isValid = true;
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    document.getElementById('validate').innerHTML = "Card Input Testing with a positive number";
  }*/


  

//For Credit Card, Live update on input... to bad I couldn't get this to work for the phone number.
function addHyphen(element) { // Add Hyphen if 'test' is selected
  let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/.{1,4}/g).join('-');
    document.getElementById(element.id).value = finalVal;
}
/*
function phoneHyphen(f){
  f_val = f.value.replace(/\D[^\.]/g, "");
  f.value = f_val.slice(0,3)+"-"+f_val.slice(3,6)+"-"+f_val.slice(6);
}*/
/*
function phoneHyphen(phone){
  //let s = 
  let phone_val = document.getElementById(phone.id).value.replace("(\\d{3})(\\d{3})(\\d+)", "($1) $2-$3");
  //let phone_val = phone.value.replace("(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3");
  document.getElementById(phone.id).value = phone_val;
}*/

document.addEventListener('DOMContentLoaded', ()=>{ //Listen for events after page loads:
  // Form button
  document.getElementById('submit').addEventListener('click', submit);// Listen for mouse click button
  document.getElementById('clear').addEventListener('click', clear);// Listen for mouse click button
  //Credit Card radio:
  document.getElementById('visa').addEventListener('click', ValidateInput);// Radio Button 'click'
  document.getElementById('master').addEventListener('click', ValidateInput);// Radio Button 'click'
  document.getElementById('discover').addEventListener('click', ValidateInput);// Radio Button 'click'
  document.getElementById('americaExpress').addEventListener('click', ValidateInput);// Radio Button 'click'
  // Input onkeyup:
  document.getElementById('credit_card').addEventListener('onblur', ValidateInput);// input update 'onkeyup'

  // Blur:
  document.getElementById('phone').addEventListener('onblur', validatePhone);// input update 'onblur'
  //document.getElementById('add_1').addEventListener('keyup', update);// Listen for key release
});