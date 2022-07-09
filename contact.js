function getValue (){
    const name = document.getElementById('name').value;

    localStorage.setItem('NAME', name);
}

