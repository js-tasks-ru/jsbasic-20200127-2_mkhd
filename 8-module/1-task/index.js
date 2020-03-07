class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    //this.products = {};
    
  }

  show() {    
    fetch(this.productsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8' 
      },
      body: JSON.stringify(this.productsStoreKey)
    })
    .then((response) => response.json())
    .then((result) => {
      console.log('Результат: ', result);
      //this.products = result;
      this.products = result;
      this.renderOuter();
      this.renderProduct(result);
  
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

      let productCode = `<div data-product-id="1" class="products-list-product col-md-6 col-lg-4 mb-4">
      <div class="card">
        <div class="card-img-wrap">
              <img class="card-img-top" src="${products[product].imageUrl}" alt="Card image cap">
        </div>
        <div class="card-body">
              <h5 class="card-title">${products[product].title}</h5>
              <div class="rate">
                  <i class="icon-star checked"></i>
                  <i class="icon-star checked"></i>
                  <i class="icon-star checked"></i>
                  <i class="icon-star checked"></i>
                  <i class="icon-star checked"></i>
                  <span class="rate-amount ml-2">24</span>
              </div>
              <p class="card-text price-text discount"><strong>€ 129.92</strong>
              <small class="ml-2">€ 250</small></p>

              <button class="product-add-to-cart" data-button-role="add-to-cart">
                Add to cart
              </button>
        </div>
        </div>
      </div>`;

      container.insertAdjacentHTML('beforeend', productCode);
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
