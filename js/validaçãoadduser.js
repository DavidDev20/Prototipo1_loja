const form = document.getElementById('adduser');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailregex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;


function setError(index) {

    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {

    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function namevalidate() {
    if (campos[0].value.length < 8) {

        setError(0);
    }
    else {

        removeError(0);
    }
}

function emailvalidate(){
    if(!emailregex.test(campos[1].value)){

        setError(1);
    }
    else{

        removeError(1);
    }
}

function passwordvalidate(){
    if(campos[2].value.length < 8){

        setError(2);
    }
    else{

        removeError(2);
        comparepassword();
    }
}

function comparepassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        
        removeError(3);
    }
    else{

        setError(3);
    }
}

form.addEventListener( 'submit', (event) =>{
    event.preventDefault();
    
    namevalidate();
    emailvalidate();
    passwordvalidate();
    comparepassword();
})