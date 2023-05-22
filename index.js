// Navbar Animate

window.onscroll = ()=>navScroll();

function navScroll(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        $(".navbar").addClass("navbar-on-scroll");
        $(".comvey-logo").addClass("comvey-logo-on-scroll");
    } else {
        $(".navbar").removeClass("navbar-on-scroll");
        $(".comvey-logo").removeClass("comvey-logo-on-scroll");
    }
}

// Animate Intersection Observer

const options = {
    rootMargin: "0px 0px -150px",
    threshold: 0,
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry.isIntersecting);
        if(entry.isIntersecting && entry.target.classList.contains("slide-in")){
            entry.target.classList.add("slide-in-show");
        } else if (entry.isIntersecting && entry.target.classList.contains("slide-up")) {
            entry.target.classList.add("slide-up-show");
        } else if(entry.isIntersecting && !entry.target.classList.contains("slide-in") && !entry.target.classList.contains("slide-up")){
            entry.target.classList.add("show");
        }
    });
}, options);


const hiddenElements = $(".hidden");

const hiddenArray = Array.from(hiddenElements);

hiddenArray.forEach((el) => observer.observe(el));

// Footer Intersection Observer

const footerOptions = {
    rootMargin: "0 0 -50px",
    threshold: 0,
}

const footerObserver = new IntersectionObserver((ev)=>{
    ev.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("footer-show");
        }
    });
});

footerObserver.observe(document.querySelector(".hidden-footer"));