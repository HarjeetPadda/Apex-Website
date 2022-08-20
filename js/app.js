let checkBoxStatus = document.querySelector('#check');

function bodyStyle(){
    while(checkBoxStatus.checked){
        document.body.setAttribute.style.color = "black";
    }
}

console.log(checkBoxStatus.checked);