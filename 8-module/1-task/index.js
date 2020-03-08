class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;    
    //this.productsInCart = [];
  }

  show() {    
    return fetch(this.productsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8' 
      }
      //body: JSON.stringify()
    })
    .then((response) => response.json())
    .then((result) => {
      console.log('Результат: ', result);
      //this.products = result;
      this.renderOuter();
      this.renderProduct(result);  
      this.renderReviews(result);
      this.el.addEventListener('click', event => this.addToCart(event, result));
    });
  }

  renderOuter() {
    let outerTemplate = `<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
            
        </div>
       </div>
    </div>`;
    this.el.insertAdjacentHTML('beforeend', outerTemplate);
  }

  renderProduct(products) {
    let container = this.el.querySelector("div .homepage-cards");
    
    for (let product in products) {
      let productCode = `
        <div data-product-id="${products[product].id}" class="products-list-product col-md-6 col-lg-4 mb-4">
        <div class="card">
          <div class="card-img-wrap">
            <img class="card-img-top" src="${products[product].imageUrl}" alt="Card image cap"></div>
            <div class="card-body">
              <h5 class="card-title">${products[product].title}</h5>
              <div class="rate">                  
              </div>
              <p class="card-text price-text ${ products[product].oldPrice ? 'discount' : ''}">
                  <strong>${products[product].price}</strong>
                  ${ products[product].oldPrice ? '<small class="ml-2">' : ''} 
                  ${ products[product].oldPrice ? products[product].oldPrice : ''} 
                  ${ products[product].oldPrice ? '</small>' : ''}
              </p>
              <button class="product-add-to-cart" data-button-role="add-to-cart" item-id="${products[product].id}">
                  Add to cart
              </button>
          </div>
        </div>
        </div>`;

      container.insertAdjacentHTML('beforeend', productCode);
    }
  }

  renderReviews(products){
    let container = this.el.querySelectorAll("div .rate");
    for (let product in products) {
      if (products[product].rating) {
        for (let i=0; i<5; i++) {
          container[product].insertAdjacentHTML('beforeend', `<i class="icon-star
            ${products[product].rating.stars > i ? ' checked' : ' active' }
          ">`);
        }               
        container[product].insertAdjacentHTML('beforeend', `<span class="rate-amount ml-2">
          ${products[product].rating.reviewsAmount}
          </span>`
        );
      } 
    }
  }

  addToCart(event, products) {
    if (event.target.tagName == 'BUTTON') {
      
      if (confirm('Вы уверены, что хотите добавить этот товар в корзину?')) {
        let itemId = +event.target.getAttribute('item-id');
        let cartContents = localStorage.getItem(this.productsStoreKey);

        if (cartContents == null){
          cartContents = JSON.stringify(products[itemId-1]);
        } else {
          if (!cartContents.includes(JSON.stringify(products[itemId-1]))){
            cartContents = cartContents + ',' + JSON.stringify(products[itemId-1]);
          }          
        }
        
        localStorage.setItem(this.productsStoreKey, cartContents);

      } else {
        return false;
      }      
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;

