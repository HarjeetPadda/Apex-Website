window.addEventListener('load',() => {
    
    const name = sessionStorage.getItem('NAME');
    let nameLength = name.length;


    document.getElementById('result-name').innerHTML = name[0].toUpperCase()+name[1,nameLength].toLowerCase();

})