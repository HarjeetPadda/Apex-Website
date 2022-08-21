window.addEventListener('load',() => {
    
    const name = sessionStorage.getItem('NAME');
    let len = name.length;
    let restOfName = name.slice(1,len);
    

    document.getElementById('result-name').innerHTML = name[0].toUpperCase()+restOfName.toLowerCase();

})