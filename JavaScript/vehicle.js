let allimg  = [
    "../../img/car.png",'../../img/splenderimg-removebg-preview.png','../../img/motorcycle.png','../../img/black-car.png','../../img/black-motorcycle.png',
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