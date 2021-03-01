// Create an object:


//function update() {
//    document.getElementById('live_update').innerHTML = this.value;
//}
//var multi_num = document.getElementById("textarea_1").firstChild;

// Create objects here:



var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

class Multiple_Num {
    constructor(multi_num, loop_num) {
        this.multiple = multi_num;
        this.loop_num = loop_num;

        this.display_1 = function(){
            return "You Entered: " + this.multiple;
        }
        this.display_2 = function() {
            let text = "";
            for( i=1; i<=this.loop_num; i++) {
                text +=  i + " * " + this.multiple + " = " + i*this.multiple + "<br>";
            }
            return text
        }
    }
}
// Display objects for Multiples Calculator here:
  

  //document.getElementById("demo").innerHTML = person.fullName();
  //document.getElementById("Calculator").innerHTML =;
//let num_inputs = [];

var addNumber = (ev)=>{
    ev.preventDefault();

    var number = {
        textarea_1 : document.getElementById('textarea_1').value
    }
    var c = new Multiple_Num(number, 10);
    document.getElementById("output_1").innerHTML = c.display_1();
    
    //num_inputs.push(number);
    //document.forms[0].reset();
      //const click_display =  {
        //int : document.getElementById("output_2").innerHTML = c.display_2()
      //};
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addNumber);
    document.getElementById('btn_2').addEventListener('click', addNumber);
});


              

function deleteItems() {
    var x = document.getElementById("output_2");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }
  }
  document.getElementById("textarea_1").maxLength = "4";