function hearts(){
    let e = document.createElement('div');
    e.setAttribute('class', 'heart');
    document.body.appendChild(e);

    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 18;

    e.style.fontSize = 12 + size+'px';

    setTimeout(function(){
        document.body.removeChild(e);
    }, 5000)
}

setInterval(function() {
    hearts()
}, 300)