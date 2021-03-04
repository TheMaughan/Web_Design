// Morgage Calculator - Created for Week 07 assignment
const calculate = (ev)=>{
    ev.preventDefault();

    let a = apr.value;
    let t = term.value;
    let amnt = amount.value;

    const interest = (amnt * (a * 0.01)) / t;
    let payment = ((amnt * t) + interest).toFixed(2);

    //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row:
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = `Monthly Payment = $${payment}`
    
}

const clear = (ev)=>{// When mouse clicks on button_2
    ev.preventDefault();
    var x = document.getElementById("apr_error");
    var t = document.getElementById("term_error");
    var a = document.getElementById("amount_error");
    var y = document.getElementById("payment");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }
    while (y.hasChildNodes()) {
        y.removeChild(y.firstChild);
    }
    while (t.hasChildNodes()) {
        t.removeChild(x.firstChild);
    }
    while (a.hasChildNodes()) {
        a.removeChild(x.firstChild);
    }
    document.forms[0].reset();
    document.getElementById("apr").focus();
};
var update = (ev)=>{ // When Key-Release event happens, execute this code:
    ev.preventDefault();
    let a = apr.value;
    let t = term.value;
    let amnt = amount.value;

    document.getElementById('apr_error').innerHTML = a + "%";
    document.getElementById('term_error').innerHTML = t + " years";

    
    amnt = amnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('amount_error').innerHTML = `$${amnt}`
    //document.getElementById('amount_error').innerHTML = "Amount Entered: $" + amnt;
}

document.addEventListener('DOMContentLoaded', ()=>{ //Listen for events after page loads:
    
    document.getElementById('calculate').addEventListener('click', calculate);// Listen for mouse click
    document.getElementById('clear').addEventListener('click', clear);// Listen for mouse click
    document.getElementById('apr').addEventListener('keyup', update);// Listen for key release
    document.getElementById('term').addEventListener('keyup', update);// Listen for key release
    document.getElementById('amount').addEventListener('keyup', update);// Listen for key release
});