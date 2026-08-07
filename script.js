// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});



// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY > 50){


            header.style.background =
            "rgba(11,19,43,0.98)";


            header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";


        }


        else{


            header.style.background =
            "rgba(11,19,43,0.9)";


            header.style.boxShadow =
            "none";


        }

    }


});




// ===============================
// BUTTON CLICK EFFECT
// ===============================

const buttons = document.querySelectorAll(
".primary-btn, .secondary-btn, .nav-btn"
);


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform="scale(0.95)";


        setTimeout(()=>{


            button.style.transform="scale(1)";


        },150);


    });


});




// ===============================
// PAGE LOAD ANIMATION
// ===============================

window.addEventListener("load",()=>{


    document.body.style.opacity="1";


});