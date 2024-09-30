function spawnKitty(){
    let e = document.createElement('img');
    e.setAttribute('class', 'kitty');

    if(Math.random() > 0.5){
        e.src = "media/IkaKitty.gif"
    }
    else{
        e.src = "media/MiyoKitty.gif"
    }

    document.body.appendChild(e);

    setTimeout(function(){
        document.body.removeChild(e);
    }, 5000)
}