let allimg  = [
    "./img/car.png",'./img/house-banner.png','./img/mobilebanner.png','./img/splenderimg-removebg-preview.png','./img/tablet-removebg-preview.png','./img/home-banner-img.png',
];
let index = 0;
let images = document.getElementById('new');


function next() {
    if(index<allimg.length-1){
        index++;
    }else{
        index = 0;
    }
    images.src = allimg[index]
}
setInterval(
    next,2000
);