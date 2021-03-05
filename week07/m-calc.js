// Morgage Calculator - Created for Week 07 assignment
const calculate = (ev)=>{
    ev.preventDefault();

    let a = apr.value;
    let t = term.value;
    let amnt = amount.value;

    t *= 12;
    a /= 1200;
    amnt *= (a * ((1 + a) ** t)) / (((1 + a) ** t) - 1);
    let payment = amnt.toFixed(2);

    //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row:
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = `Monthly Payment = $${payment}`
    
}

const clear = (ev)=>{// When mouse clicks on button_2
    ev.preventDefault();
    //clear apr 
    document.getElementById("apr").value = " ";
    const apr_er = document.getElementById("apr_error");
    while (apr_er.hasChildNodes()) {
        apr_er.removeChild(apr_er.firstChild);
    }
    //clear term
    document.getElementById("term").value = " ";
    const term_er = document.getElementById("term_error");
    while (term_er.hasChildNodes()) {
        term_er.removeChild(term_er.firstChild);
        //document.getElementById('apr').inputField.value = " ";
    }
    //clear amount
    document.getElementById("amount").value = " ";
    const amount_er = document.getElementById("amount_error");
    while (amount_er.hasChildNodes()) {
        amount_er.removeChild(amount_er.firstChild);
    }
    // clear payment
    const pay_cl = document.getElementById("payment");
    while (pay_cl.hasChildNodes()) {
        pay_cl.removeChild(pay_cl.firstChild);
    }
    //inputField.value = " ";
    //document.forms[0].reset();
    document.getElementById("apr").focus(); // put cursor inside apr inputField
};




const update = (ev)=>{ // When Key-Release event happens, execute this code:
    ev.preventDefault();
    let a = apr.value;
    let t = term.value;
    let amnt = amount.value;

    if (a < 0 || a > 25){
        document.getElementById('apr').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById('apr_error').innerHTML = "You entered: " + a + "%, APR must be 0% - 25%";
        document.getElementById("apr").value = " ";
        document.getElementById("apr").focus();
    } else {
        document.getElementById('apr_error').innerHTML = a + "%";
        document.getElementById('apr').style.boxShadow = 'none';
    }
    
    if (t < 0 || t > 40){
        document.getElementById('term').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById('term_error').innerHTML = "You Entered: " + t + ", enter an input that is 0 - 40";
        document.getElementById("term").value = " ";
        document.getElementById("term").focus();
    } else {
        document.getElementById('term_error').innerHTML = t + " years";
        document.getElementById('term').style.boxShadow = 'none';
    }
    

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