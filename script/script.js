'use strict';

let elem,
    element,
    text = document.createTextNode('Hello, world!');

function DomElement(selector, height, width, bg, fontSize, position){
  this.selector = selector; 
  this.height = height; 
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
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
    font-size:' + this.fontSize + '; \
    position:' + this.position;
    elem.appendChild(text);
    elem.style.left='0px';
	  elem.style.top='0px';
};

element = new DomElement('#best', '100px', '100px', 'tomato', '16px', 'absolute');

document.addEventListener("DOMContentLoaded", element.createElement());

function moveLeft() {
  let leftNumbers = elem.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    elem.style.left = `${left - 10}px`;
  }
}
function moveRight() {
  let leftNumbers = elem.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left >= 0) {
    elem.style.left = `${left + 10}px`;
  }
}
function moveUp() {
  let topNumbers = elem.style.top.replace('px', '');
  let top = parseInt(topNumbers, 10);

  if (top > 0) {
    elem.style.top = `${top - 10}px`;
  }
}
function moveDown() {
  let topNumbers = elem.style.top.replace('px', '');
  let top = parseInt(topNumbers, 10);

  if (top >= 0) {
    elem.style.top = `${top + 10}px`;
  }
}

document.addEventListener('keydown', function(event) {
if(event.which == 37) {
    moveLeft();
}
else if(event.which == 38) {
    moveUp();
}
else if(event.which == 39) {
    moveRight();
}
else if(event.which == 40) {
    moveDown();
}
});