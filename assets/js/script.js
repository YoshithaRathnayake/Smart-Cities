// Function to load navbar and footer
$(function () {
    $("#footer").load("assets/content/static/footer.html");
});

// Back to Top button 
var btn = $('#backToTop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 180) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#home-section').offset().top
    }, 'slow');
});

// Home button click animation
var home = $('#home');
home.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#home-section').offset().top
    }, 'slow');
});

// Navbar scroll animation
$(window).scroll(function () {
    if ($(document).scrollTop() > 90) {
        $(".nav-bar").addClass("affix");
    } else {
        $(".nav-bar").removeClass("affix");
    }
});

// Menu Icons showing animation
function NavOpen() {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("nav-label").style.display = "none";
}
function NavClose() {
    document.getElementById("close").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("nav-label").style.display = "block";
}
function NavOverlay() {
    document.getElementById("close").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("nav-label").style.display = "block";
}
function sideAbout() {
    document.getElementById("nav-label").style.display = "block";
}
function sideHome() {
    document.getElementById("nav-label").style.display = "block";
}
function sideContact() {
    document.getElementById("nav-label").style.display = "block";
}

// Opening and closing the side navigation
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".side-bar");
    const img = document.querySelector("#side-label");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("nav--open");
        nav.classList.add("side-bar-links");
        img.classList.add("side-label");
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
    document.querySelector("#side-home").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-about").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
    document.querySelector("#side-contact").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        document.getElementById("close").style.display = "none";
        document.getElementById("hamburger").style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-home");
    const img = document.querySelector("#side-label");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links");
        img.classList.add("side-label");
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
        img.classList.remove("side-label");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
        img.classList.remove("side-label");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-about");
    const img = document.querySelector("#side-label");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links");
        img.classList.add("side-label");
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
        img.classList.remove("side-label");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
        img.classList.remove("side-label");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#side-contact");
    const img = document.querySelector("#side-label");
    document.querySelector("#hamburger").addEventListener("click", () => {
        nav.classList.add("side-bar-links");
        img.classList.add("side-label");
    });
    document.querySelector("#close").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
        img.classList.remove("side-label");
    });
    document.querySelector("#nav-overlay").addEventListener("click", () => {
        nav.classList.remove("side-bar-links");
        img.classList.remove("side-label");
    });
});

// Automatic Counter on Scroll
function count(targetElement, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const targetReached = increment > 0 ? () => current >= end : () => current <= end;
    const timer = setInterval(() => {
        current += increment;
        targetElement.textContent = current;
        if (targetReached()) {
            clearInterval(timer);
            current = end;
        }
    }, stepTime);
}
function startCounting() {
    const counters = document.querySelectorAll('.counter');
    const windowHeight = window.innerHeight;
    const offset = 100;
    function checkPosition() {
        counters.forEach((counter) => {
            const position = counter.getBoundingClientRect().top;
            const target = parseInt(counter.dataset.target);
            const isCounted = counter.classList.contains('counted');

            if (position - windowHeight <= offset && !isCounted) {
                counter.classList.add('counted');
                const start = 0;
                const duration = 2000;
                count(counter, start, target, duration);
            } else if (position - windowHeight > offset && isCounted) {
                counter.classList.remove('counted');
            }
        });
    }
    window.addEventListener('scroll', checkPosition);
    checkPosition();
}
startCounting();

// Parallax Background Animation
const parallax_el = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;
let rotateDegree = 0;
function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}
update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    update(e.clientX);
});

// Home Parallax Text
let parallaxTitle = document.getElementById("heading");
let parallaxSlogan = document.getElementById("slogan");
let parallaxBtn = document.getElementById("learnBtn");
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    parallaxTitle.style.marginTop = value * 0.6 + 'px';
    parallaxSlogan.style.marginTop = value * 0.3 + 'px';
    parallaxBtn.style.marginTop = value * 0.25 + 'px';
});


// Contact Us Section

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});