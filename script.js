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
