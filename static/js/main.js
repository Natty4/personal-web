window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
}

    /*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('active')
            console.log('popoop')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/

const navLink = document.querySelectorAll('.menu-btn');   
function linkAction(){
  
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
   if(navMenu){
        navMenu.addEventListener('click', ()=>{
            navMenu.classList.remove('active')
        })
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction));



// Make the DIV element draggable:
dragElement(document.getElementById("prof"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "pic")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "pic").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Get the modal
var wrkmodal = document.getElementById("workModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function reply_click(clicked_id)
  {
  var wrkimg = document.getElementById(clicked_id);
  var wrkmodalImg = document.getElementById("workImg");
  var wrkcaptionText = document.getElementById("caption");

  wrkmodal.style.display = "block";
  wrkmodalImg.src = wrkimg.src;
  wrkcaptionText.innerHTML = wrkimg.alt;



}

// Get the modal
var crtmodal = document.getElementById("crtModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function reply_click_for_crt(clicked_id)
  {
  var img = document.getElementById(clicked_id);
  var modalImg = document.getElementById("crtImg");
  var captionText = document.getElementById("crtCaption");

  crtmodal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;



}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  crtmodal.style.display = "none";
  wrkmodal.style.display = "none";
    
} 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  wrkmodal.style.display = "none";
    
} 
 


var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  setTimeout(function(){
   loader.classList.add("disppear"); 
}, 4000);
 
}






var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };



var scrollY = 0;
var distance = 40;
var speed = 1000;
function autoScrollTo(el) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animator = setTimeout('autoScrollTo(\''+el+'\')',24);
  if(yPos > bodyHeight){
    clearTimeout(animator);
  } else {
    if(currentY < targetY-distance){
        scrollY = currentY+distance;
        window.scroll(0, scrollY);
      } else {
        clearTimeout(animator);
      }
  }
}
function resetScroller(el){
  var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
  var animator = setTimeout('resetScroller(\''+el+'\')',speed);
  if(currentY > targetY){
    scrollY = currentY-distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}


window.addEventListener("load", autoScrollTo('footer'));

const input = document.querySelector(".theme-switcher input");

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});