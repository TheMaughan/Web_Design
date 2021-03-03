
//import React from 'react';
// Create objects here:



var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};


// Display objects for Multiples Calculator here:
  

  //document.getElementById("demo").innerHTML = person.fullName();
//let num_inputs = [];
/*

    var number = document.getElementById('textarea_1').value;
    var c = new Multiple_Num(number, 10);
    document.getElementById("output_1").innerHTML = c.display_1();
    };
    //num_inputs.push(number);
    //document.forms[0].reset();


*/

const addNumber = (ev)=>{
    ev.preventDefault();
    document.getElementById("output_2").innerHTML = c.display_2();

};
const deleteItems = (ev)=>{
    ev.preventDefault();
    var x = document.getElementById("output_2");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }
};

const live_update = (ev)=>{
    function update(textarea_1) { // This should update class parameters...
        num = parseFloat(textarea_1, 10);
        //document.getElementById("test").innerHTML = num;
        document.getElementById("test_2").innerHTML = num;
        //This is a class:
        class Multiple_Num {
          constructor(multi_num, loop_num) {
              this.multiple = multi_num;
              this.loop_num = loop_num;
      
              this.display_1 = function(){
                  return "You Entered: " + this.multiple;
              }
              this.display_2 = function() {
                  var text = "";
                  for(var i=1; i<=this.loop_num; i++) {
                      text +=  i + " * " + this.multiple + " = " + i*this.multiple + "<br>";
                  }
                  return text
              }
          }// End of class
        }
      };
}
var c = new Multiple_Num(9, 10);
  

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addNumber);
    document.getElementById('btn_2').addEventListener('click', deleteItems);
    document.getElementById('textarea_1').addEventListener('keyup', live_update);
});

///////// This is for live updating user input:
var form = document.forms.calculator;
form.textarea_1.oninput = live;


//Object.setPrototypeOf(Multiple_Num.prototype, number);

function live() { //- This updates text... for now
  test.innerHTML = textarea_1.value;
  num = textarea_1.value;
};





document.getElementById("output_1").innerHTML = c.display_1();

live();
update();