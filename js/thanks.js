window.addEventListener('load',() => {
    
    const name = sessionStorage.getItem('NAME');

    document.getElementById('result-name').innerHTML = name[0].toUpperCase()+name[1,].toLowerCase();

})