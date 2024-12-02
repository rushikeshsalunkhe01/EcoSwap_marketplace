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

function up(){
    const sidebar = document.getElementById('sidebar-container');
    const up = document.getElementById('up-arrow');
    const down = document.getElementById('down-arrow');

    down.style.visibility = 'visible'
    sidebar.style.visibility = 'hidden';
    up.style.visibility = 'hidden';
}

function down(){
    const sidebar = document.getElementById('sidebar-container');
    const up = document.getElementById('up-arrow');
    const down = document.getElementById('down-arrow');

    down.style.visibility = 'hidden'
    sidebar.style.visibility = 'visible';
    up.style.visibility = 'visible';
}

function uparrow(){
    const sidebar = document.getElementById('sidebar-container2');
    const up = document.getElementById('up-arrow2');
    const down = document.getElementById('down-arrow2')

    down.style.visibility = 'visible'
    sidebar.style.visibility = 'hidden';
    up.style.visibility = 'hidden';
}

function downarrow(){
    const sidebar = document.getElementById('sidebar-container2');
    const up = document.getElementById('up-arrow2');
    const down = document.getElementById('down-arrow2')

    down.style.visibility = 'hidden'
    sidebar.style.visibility = 'visible';
    up.style.visibility = 'visible';
}