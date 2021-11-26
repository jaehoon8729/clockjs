const body = document.querySelector("body");

const IMG_NUMBER=3;

function paintImage(imgNumber){
    const image = new Image();
    if( is_mobile ) {
        image.src = `./mbImages/${imgNumber + 1}.jpg`;
    }else{
        image.src = `./pcImages/${imgNumber + 1}.jpg`;
    }
    image.classList.add("bgImage");
    image.style.width="100%";
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();