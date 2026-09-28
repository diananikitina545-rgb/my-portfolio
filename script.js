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