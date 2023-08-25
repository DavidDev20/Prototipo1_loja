const form = document.getElementById('adduser');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');


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

function passwordvalidate(){
    if(campos[2].value.length < 8){

        setError(2);
    }
    else{

        removeError(2);
        comparepassword();
    }
}

