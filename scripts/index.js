import {products} from '../scripts/data-products.js'

function displayProducts(){

    let html = '';
    products.forEach((product) => {
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
      console.log(html);
}


displayProducts();

