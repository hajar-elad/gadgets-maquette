import {products} from '../scripts/data-products.js'


function pageDisplay(pageNbr){
    let html = '';
    const itemsPerPage = 12;
    const startIndex = (pageNbr -1) * itemsPerPage;
    const endIndex = pageNbr * itemsPerPage;
    const productsToDisplay = products.slice(startIndex,endIndex);
    console.log(productsToDisplay);

    productsToDisplay.forEach((product) => {
        html += `
        <div class="product">
           <img class="product-image" src= "${product.image}"/>
           <div class="Product-infos">
              <div class="product-name" >${product.name}</div>
              <div class="product-price">${(product.price).toFixed(2)} MAD</div>
           </div>
           <a href="https://wa.me/212701131213" target="_blank" 
                title="Nous sommes joignable sur whatsapp" class="order-link">
               Commander 
           </a>
        </div>
        `
    })

    document.querySelector('.products')
      .innerHTML = html;
}

 // Display Page By Default 
pageDisplay(1);

function updatePageDisplay(){
    const numbers = document.querySelectorAll('.page-nbr');
    let pageNbr = 1;
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            pageNbr = number.innerHTML;
            pageDisplay(pageNbr)
        })
    })
}

// Display Updated Page
updatePageDisplay();

