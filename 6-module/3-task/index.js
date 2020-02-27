'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.renderMenu();
    let parentMenuElements = this.el.querySelectorAll("ul .dropdown");
    let menuElements = this.el.querySelectorAll("ul li .dropdown-menu");
    
    for (let i=0; i < parentMenuElements.length; i++){
      parentMenuElements[i].addEventListener('pointerenter', event => this.renderDropdown(event, i, menuElements));  
      parentMenuElements[i].addEventListener('pointerleave', event => this.unrenderDropdown(event, i, menuElements));  
    }    
    this.el.addEventListener('pointerenter', (event) => this.showhideBackdrop(event, 0));
    this.el.addEventListener('pointerleave', (event) => this.showhideBackdrop(event, 1));
  
  }

  renderMenu() {
    this.el.insertAdjacentHTML('beforeend', this.template);
  }

  renderDropdown(event, i, menuElems) {
    menuElems[i].classList.add('show'); 
  } 

  unrenderDropdown(event, i, menuElems) {
    menuElems[i].classList.remove('show'); 
  } 

  showhideBackdrop(event, showBackdrop) {
    //alert(showBackdrop);
    if ( showBackdrop ) {
      document.getElementsByClassName('backdrop')[0].classList.remove('show');
      //alert('show');
    } else {
      document.getElementsByClassName('backdrop')[0].classList.add('show');

    }
    
  }
  

}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;