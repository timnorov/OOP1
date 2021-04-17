'use strict';

let elem,
    element,
    text = document.createTextNode('Hello, world!');

function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector; 
  this.height = height; 
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(){
    if (this.selector.charAt(0) == '.') {
      elem = document.createElement('div');
      document.querySelector('body').appendChild(elem);
      elem.className = this.selector.substr(1);
    } else if (this.selector.charAt(0) == '#'){
      elem = document.createElement('p');
      document.querySelector('body').appendChild(elem);
      elem.id = this.selector.substr(1);
    } else {
      alert('Neither class nor id!');
    }
    elem.style.cssText = 'height:' + this.height + '; \
    width:' + this.width + '; \
    background-color:' + this.bg + '; \
    font-size:' + this.fontSize;
    elem.appendChild(text);
};

element = new DomElement();

element.createElement();