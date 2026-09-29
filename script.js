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

/* =========================================
   PROJECT VIDEOS — AUTOPLAY + LOOP
========================================= */

const projectVideos = document.querySelectorAll(".project video");

projectVideos.forEach((video) => {

    // Настройки видео
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Запускаем видео
    const playVideo = () => {
        video.play().catch(() => {
            // Браузер может временно запретить autoplay,
            // но после взаимодействия с сайтом видео запустится.
        });
    };

    // Пытаемся запустить сразу
    playVideo();

    // Если браузер ещё не разрешил autoplay,
    // пробуем после первого взаимодействия пользователя
    document.addEventListener(
        "click",
        playVideo,
        { once: true }
    );

    document.addEventListener(
        "scroll",
        playVideo,
        { once: true, passive: true }
    );

});

/* =========================================
   MOBILE PROJECT TEXT FADE
========================================= */

function updateMobileProjectText() {

    if (window.innerWidth > 700) {
        return;
    }

    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {

        const info = project.querySelector(".project-info");

        if (!info) return;

        const rect = project.getBoundingClientRect();

        /*
        Чем ближе следующая карточка подходит к
        верхней части экрана, тем сильнее исчезает
        текст предыдущей.
        */

        const fadeStart = 250;
        const fadeEnd = 100;

        let opacity = 1;

        if (rect.top < fadeStart) {

            opacity =
                (rect.top - fadeEnd) /
                (fadeStart - fadeEnd);

        }

        opacity = Math.max(0, Math.min(1, opacity));

        info.style.opacity = opacity;
    });
}


window.addEventListener(
    "scroll",
    updateMobileProjectText,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateMobileProjectText
);

updateMobileProjectText();
