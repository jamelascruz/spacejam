//hammenu

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });

});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//typewriter
var typed = new Typed("#typewriter", {
    strings: ["I'm Jamela Cruz"],
    typeSpeed: 50,
    loop: true
})

// contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbyUggNqPo1y4odqme3pVgpqdGkprsJV0A2EqoYwlq9aGooEtoSjlSMsR2mgQL9Bp0Xn/exec'
const form = document.forms['submit-to-google-sheet']
const resmessages = document.getElementById("resmessages")


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            resmessages.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                resmessages.innerHTML = ""
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
//end contact

// animation
AOS.init();


// Select the centeredDiv element
const centeredDiv = document.getElementById("loader-wrapper");

// Function to update the position of the centeredDiv
function updateCenteredDivPosition() {
    const windowHeight = window.innerHeight;
    const divHeight = centeredDiv.offsetHeight;
    const scrollY = window.scrollY;

    // Calculate the new top position to center the div
    const newTopPosition = Math.max((windowHeight - divHeight) / 2 + scrollY, scrollY);

    centeredDiv.style.top = newTopPosition + "px";
}

// Initial centering
updateCenteredDivPosition();

// Update the position whenever the window is scrolled
window.addEventListener("scroll", updateCenteredDivPosition);
//end centered div

//fade-out loader
var element = document.querySelector('.loader-wrapper');
function fadeOut(el) {
    var opacity = 1; // Initial opacity
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 1;
            el.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 0
            el.style.display = 'none'; // Hide the element
        }
    }, 2000);
}
fadeOut(element);
//end fade-out loader

//back to top page
window.onbeforeunload = function () {
    // Scroll to the top before the page is unloaded
    window.scrollTo(0, 0);
};
//end back to top page
