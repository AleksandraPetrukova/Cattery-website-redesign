// initialize AOS
AOS.init();

//initialize slick slider
$('.meet-slider').slick({  
    infinite: true,  
    slidesToShow: 3,  
    slidesToScroll: 1,
    dots: true,
    // prevArrow: $('.slick-prev'),
    // nextArrow: $('.slick-next'),
    responsive : [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


//funny cat face animation
const sendButton = document.querySelector("input[type='submit']");
const hiddenImage = document.querySelector(".cat-face-anim");

sendButton.addEventListener("click", () => {
    // Trigger the reveal and disappearance animations when the "Send" button is clicked
    hiddenImage.style.animation = "enlarge 1s, disappear 1s";
    hiddenImage.addEventListener("animationend", function () {
    // Remove the hidden image from the DOM after the animation is complete
    hiddenImage.remove();
    });
});

const goUpButton = document.getElementById("goUpButton");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goUpButton.style.display = "block";
    } else {
        goUpButton.style.display = "none";
    }
});

goUpButton.addEventListener("click", () => {
    // Scroll to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

$(".dropdown-toggle").click(function () {
    $(".drop-nav").slideToggle('slow');
});