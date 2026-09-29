const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    const video = project.querySelector("video");

    project.addEventListener("mouseenter", () => {
        video.play();
    });

    project.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});
/* =========================================
   PROJECT HOVER
========================================= */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    const video = project.querySelector("video");

    if (!video) return;


    project.addEventListener("mouseenter", () => {

        video.currentTime = 0;

        video.play().catch(() => {});

    });


    project.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});
