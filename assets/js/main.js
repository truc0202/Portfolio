/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 500,
    delay: 200,
    reset: true,
});

sr.reveal(".home__data, .home__img, .home__social", {});
sr.reveal(".about__img, .about__subtitle, .about__text", {});
sr.reveal(".skills__container", {});
sr.reveal(".background__container-2col", {});
sr.reveal(".project-card-full", { interval: 200 });

// Highlight keywords when page loads
document.addEventListener("DOMContentLoaded", highlightKeywords);

// Highlight important keywords
function highlightKeywords() {
    const keywords = [
        "Data Analytics",
        "Machine Learning",
        "NLP",
        "Computer Vision",
        "Python",
        "SQL",
        "Power BI",
        "Excel",
        "Statistics",
        "EDA",
        "Clustering",
        "Regression",
        "A/B Testing",
    ];

    const projectDescriptions = document.querySelectorAll(".project-desc-big");
    projectDescriptions.forEach((desc) => {
        let text = desc.innerHTML;
        keywords.forEach((keyword) => {
            const regex = new RegExp(keyword, "gi");
            text = text.replace(
                regex,
                (match) =>
                    `<strong style="color: var(--first-color);">${match}</strong>`
            );
        });
        desc.innerHTML = text;
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
