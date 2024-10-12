function spawnKitty(){

    const meowAudio = new Audio('media/meow.mp3'); // Path to your meow sound
    const zipAudio = new Audio('media/zip.mp3'); // Path to your meow sound

    let e = document.createElement('img');
    e.setAttribute('class', 'kitty');

    if(Math.random() > 0.99){
        e.src = "media/AlienKitty.gif"
        zipAudio.play();
    }
    else if(Math.random() > 0.5) {
        e.src = "media/IkaKittyNew.gif"
        meowAudio.play();
    }
    else {
        e.src = "media/MiyoKittyNew.gif"
        meowAudio.play();
    }

    document.body.appendChild(e);

    setTimeout(function(){
        document.body.removeChild(e);
    }, 5000)
}