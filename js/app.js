const checkBoxStatus = document.querySelector('#check');

document.getElementById("check").onclick = function bodyStyle() {

    if (checkBoxStatus.checked) {
        document.body.style.position = "fixed";
    }else{
        document.body.style.position ="relative";
    }
}




