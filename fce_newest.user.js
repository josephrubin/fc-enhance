// ==UserScript==
// @name        FC Enhance New
// @namespace   fc.gap.year.apps
// @description Enhancement suite for Fantastic Contraption homepage.
// @include     *://fantasticcontraption.com/original*
// @include     *://fantasticcontraption.com/?designId=*
// @include     *://fantasticcontraption.com/?levelId=*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
    "use strict";
  modifyDocument();
})();

function setWidthFromHeight(element) {
  "use strict";
    let style = window.getComputedStyle(element);
  let computedHeight = style.getPropertyValue('height').substring(0, style.getPropertyValue('height').length - 2);
  element.style.width = computedHeight * 700 / 500 + 'px';
}

function modifyDocument() {
  "use strict";
  try {
    
    // Bind variables to DOM.
    let body = document.body;
    let game = document.getElementById('contraption');
    let border = document.getElementsByClassName('border')[0];
    let images = document.getElementsByTagName('img');
    let h1s = document.getElementsByTagName('h1');
    let h2s = document.getElementsByTagName('h2');
    let flotm = document.getElementsByClassName('right')[0];
    let left = document.getElementsByClassName('left')[0];
    let centered = document.getElementsByClassName('centered')[0];
    let gameWrapper = document.getElementById('maincontent');
    let menu = document.getElementsByClassName('menu')[0];
    
    // Style the body.
    document.documentElement.style.overflow = 'hidden';
    body.style.backgroundImage = "url('')";
    body.style.backgroundColor = '#C7DFF8';
    
    // Remove all the images from the page.
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none'; 
    }
    
    // Remove all the headers from the page.
    for (var i = 0; i < h1s.length; i++) {
      h1s[i].style.display = 'none'; 
    }
    for (var i = 0; i < h2s.length; i++) {
      h2s[i].style.display = 'none'; 
    }
    
    // Hide the flotm.
    flotm.style.display = 'none';
    
    // Hide the menu.
    menu.style.display = 'none';

    // Style the game.
    game.removeAttribute('width');
    game.removeAttribute('height');
    game.style.width = 'inherit';
    game.style.height = 'inherit';
    
    // Style around the game.
    border.style.backgroundImage = "url('')";
    border.style.width = 'inherit';
    border.style.height = 'inherit';
    border.style.padding = '0px';
    border.style.display = 'inline-block';
    left.style.display = 'inline-block';
    left.style.float = 'none';
    left.style.height = 'calc(100vh - 21px)';
    setWidthFromHeight(left)
    body.onresize = function() {setWidthFromHeight(left)};
    centered.style.width = 'initial';
    centered.style.margin = '0px';
    centered.style.padding = '0px';
    gameWrapper.style.display = 'inline-block';
    gameWrapper.style.width = 'inherit';
    gameWrapper.style.height = 'inherit';
    
    // Disable backspace navigation.
    document.addEventListener("keydown", function(e) {
        if (e.keyCode == 8) {
        e.preventDefault();
        return false;
      }
    });
    return;
    
    // Add information box.
    var queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('levelId')) {
        let levelId = queryParams.get('levelId');
      let infoBox = document.createElement('div');
      infoBox.style.width = '400px';
      infoBox.style.position = 'absolute';
      infoBox.style.left = '20px';
      infoBox.style.top = '10px';
      infoBox.innerHTML = "Hello"
      infoBox.style.textAlign = 'left';
      body.appendChild(infoBox);
    }
    else if (queryParams.has('designId')) {
      
    }
    
  }
  catch (e) {
    alert(e); 
  }
}
