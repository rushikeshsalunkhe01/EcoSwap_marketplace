// Drop-Up Drop-Down function

let isDropdownVisible = false;

    function toggleDropDown() {
        if (isDropdownVisible) {
            dropUp();
        } else {
            dropDown();
        }
        isDropdownVisible = !isDropdownVisible;
    }


function dropDown(){
    const dropDownElement = document.getElementById('re-drop-down');
    dropDownElement.src = './../img/real-estate-images/up-arrow.png';

    const categoriesElement = document.getElementById('re-categories-subtext');
    categoriesElement.style.visibility = 'hidden';

    const categoriesInfoElement = document.getElementById('re-categories-info');
    categoriesInfoElement.style.visibility = 'visible';
}

function dropUp(){
    const dropDownElement = document.getElementById('re-drop-down');
    dropDownElement.src = './../img/real-estate-images/down-arrow.png';

    const categoriesElement = document.getElementById('re-categories-subtext');
    categoriesElement.style.visibility = 'visible';

    const categoriesInfoElement = document.getElementById('re-categories-info');
    categoriesInfoElement.style.visibility = 'hidden';
}