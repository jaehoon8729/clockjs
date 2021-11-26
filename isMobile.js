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
isMobile();

// function resize(){
//     toDolists.style.fontSize="50px";
//     toDospans.style.fontSize="50px";
//     toDoButton.style.padding="15px 15px";
//     h1.style.fontSize="100px";
//     h3.style.fontSize="80px";
//     toDoInput.style.height="60px";
//     toDoInput.style.fontSize="50px";
//     toDoInput.style.backgroundPosition="60px 50px";
// }

// function init(){
//     if( is_mobile ) {
//         resize();
//     }
// }
// init();