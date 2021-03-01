// Create an object:


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
    }
}

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


  

  //document.getElementById("demo").innerHTML = person.fullName();
  //document.getElementById("Calculator").innerHTML =;
let num_inputs = [];

const addNumber = (ev)=>{
    ev.preventDefault();
    let number = {
        textarea_1 : document.getElementById('textarea_1').value
    }
    num_inputs.push(number);
    document.forms[0].reset();
    
    console.warn('added', {number} );
    let pre = document.querySelector('#output_1 pre');
    let output = pre.textContent = '\n' + JSON.stringify(num_inputs.number, '\t', 2);
    let c = new Multiple_Num(output, 10);

    const click_display =  {
        int : document.getElementById("output_2").innerHTML = c.display_2()
      };
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addNumber);
});
