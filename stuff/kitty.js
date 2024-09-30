function spawnKitty(){

    const audio = new Audio('media/meow.mp3'); // Path to your meow sound
    audio.play();

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