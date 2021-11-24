const body = document.querySelector("body");

const IMG_NUMBER=3;
var is_mobile = isMobile();

function isMobile() { 
    var user = navigator.userAgent; 
    var is_mobile = false; 
    if( user.indexOf("iPhone") > -1 
        || user.indexOf("Android") > -1 
        || user.indexOf("iPad") > -1 
        || user.indexOf("iPod") > -1 ){ 
        is_mobile = true; 
    } 
    return is_mobile; 
}

function paintImage(imgNumber){
    const image = new Image();
    if( is_mobile ) {
        image.src = `./mbImages/${imgNumber + 1}.jpg`;
    }else{
        image.src = `./pcImages/${imgNumber + 1}.jpg`;
    }
    image.classList.add("bgImage");
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