window.addEventListener('load',() => {
    
    const name = localStorage.getItem('NAME');

    document.getElementById('result-name').innerHTML = name;

})