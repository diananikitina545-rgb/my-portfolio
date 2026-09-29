/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =====================================================
   PARALLAX
===================================================== */

const parallaxElements =
    document.querySelectorAll(".parallax");


window.addEventListener(
    "scroll",
    () => {

        const scrollY = window.scrollY;

        parallaxElements.forEach((element) => {

            const rect =
                element.getBoundingClientRect();

            const center =
                rect.top + rect.height / 2;

            const distance =
                center - window.innerHeight / 2;

            const movement =
                distance * -0.08;

            element.style.marginTop =
                `${movement}px`;

        });

    },
    {
        passive: true
    }
);


/* =====================================================
   PROJECT CARD SCALE
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


function updateProjectCards() {

    projectCards.forEach((card, index) => {

        const rect =
            card.getBoundingClientRect();

        const distance =
            Math.max(
                0,
                Math.min(
                    1,
                    (rect.top - 90) / 500
                )
            );

        const scale =
            1 - distance * 0.035;

        card.style.transform =
            `scale(${scale})`;

    });

}


window.addEventListener(
    "scroll",
    updateProjectCards,
    {
        passive: true
    }
);

updateProjectCards();


/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


/* =====================================================
   SHOWREEL HOVER
===================================================== */

const showreel =
    document.querySelector(".showreel video");


if (showreel) {

    showreel.addEventListener(
        "mouseenter",
        () => {

            showreel.play();

        }
    );

}


/* =====================================================
   MOUSE MOVEMENT
   HERO VISUAL FOLLOWS CURSOR
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual && window.innerWidth > 700) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 15;

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 15;

            heroVisual.style.transform =
                `translate(
                    calc(-50% + ${x}px),
                    calc(-50% + ${y}px)
                )`;

        }
    );

}


/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
