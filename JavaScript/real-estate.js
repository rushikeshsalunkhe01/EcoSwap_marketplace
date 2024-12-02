// side-bar-code

const sidebar = document.getElementById('side-bar');
const menuIcon = document.getElementById('menu-icon');

function openSideBar() {
  sidebar.classList.add('active'); 
  menuIcon.style.display = 'none'; 
}

function closeIcon() {
  sidebar.classList.remove('active'); 
  menuIcon.style.display = 'block';
}


// slider-code

let allimg  = [
    "./../img/car.png",'./../img/house-banner.png','./../img/iphone-pro-14.png','./../img/splenderimg-removebg-preview.png','./../img/tablet-removebg-preview.png','./../img/home-banner-img.png',
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




//filter by location

document.addEventListener('DOMContentLoaded', function () {

    const selectBox = document.getElementById('select-option');

    const cards = document.querySelectorAll('.product-card');

    selectBox.addEventListener('change', function () {
       
        const selectedLocation = selectBox.value;

        cards.forEach(card => {
          
            const cardLocation = card.querySelector('.product-location').textContent;

            if (selectedLocation === "Select Location" || cardLocation.includes(selectedLocation)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
    });
});



//search product by name


function searchProduct() {

    const searchQuery = document.getElementById('product-search-input').value.toLowerCase();
    

    const productCards = document.querySelectorAll('.product-card');
    

    productCards.forEach(card => {

        const productTitle = card.querySelector('.product-title').textContent.toLowerCase();
        
        if (productTitle.includes(searchQuery) && searchQuery !== "") {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}



// Drop-Up Drop-Down function

let isDropdownVisible = false;

    function cToggleDropDown() {
        if (isDropdownVisible) {
            cDropUp();
        } else {
            cDropDown();
        }
        isDropdownVisible = !isDropdownVisible;
    }


function cDropDown(){
    const dropDownElement = document.getElementById('c-drop-down');
    dropDownElement.src = './../img/real-estate-images/up-arrow.png';

    const categoriesElement = document.getElementById('c-categories-subtext');
    categoriesElement.style.visibility = 'hidden';

    const categoriesInfoElement = document.getElementById('c-categories-info');
    categoriesInfoElement.style.visibility = 'visible';
}

function cDropUp(){
    const dropDownElement = document.getElementById('c-drop-down');
    dropDownElement.src = './../img/real-estate-images/down-arrow.png';

    const categoriesElement = document.getElementById('c-categories-subtext');
    categoriesElement.style.visibility = 'visible';

    const categoriesInfoElement = document.getElementById('c-categories-info');
    categoriesInfoElement.style.visibility = 'hidden';
}

function lToggleDropDown() {
    if (isDropdownVisible) {
        lDropUp();
    } else {
        lDropDown();
    }
    isDropdownVisible = !isDropdownVisible;
}

function lDropDown(){
    const dropDownElement = document.getElementById('l-drop-down');
    dropDownElement.src = './../img/real-estate-images/up-arrow.png';

    const categoriesElement = document.getElementById('l-categories-subtext');
    categoriesElement.style.visibility = 'hidden';

    const categoriesInfoElement = document.getElementById('l-categories-info');
    categoriesInfoElement.style.visibility = 'visible';
}

function lDropUp(){
    const dropDownElement = document.getElementById('l-drop-down');
    dropDownElement.src = './../img/real-estate-images/down-arrow.png';

    const categoriesElement = document.getElementById('l-categories-subtext');
    categoriesElement.style.visibility = 'visible';

    const categoriesInfoElement = document.getElementById('l-categories-info');
    categoriesInfoElement.style.visibility = 'hidden';
}