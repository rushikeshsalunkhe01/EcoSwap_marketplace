

const proTitle = document.getElementById('title').value;
const proLocation = document.getElementById('location').value;
const proDiscription = document.getElementById('description').value;
const proPrice = document.getElementById('price').value;
const proimg = document.getElementById('image').files[0];

const productContainer = document.getElementById('product-main-container');


function postAd(){


    if(proTitle && proLocation && proDiscription && proPrice && proimg){

        const imageURL = URL.createObjectURL(proimg);

      const productCard = `
        <div class="product-card">
         <div class="product-image">
          <img src="${imageURL}" alt="Product Image">
        </div>
        <div class="product-details">
          <h2 class="product-title">${proTitle}</h2>
          <p class="product-location">
            <i class="fa fa-map-marker"></i> ${proLocation}
          </p>
          <p class="product-description">
            ${proDiscription}
          </p>
          <div class="product-information">
            <span class="product-price">₹ ${proPrice}</span>
            <a href="./pages/home-page-products/homeproducts.html">
            <button class="btn secondary-btn">View Details</button>
            </a>
          </div>
        </div>
      </div> `;



    }
}




function formClear(){
    
    
}

