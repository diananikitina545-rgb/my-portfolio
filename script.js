document.addEventListener("DOMContentLoaded", () => {

    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {

        const video = project.querySelector("video");

        if (!video) return;

        video.muted = true;
        video.loop = true;
        video.playsInline = true;


        /* =========================
           ПК — запуск при наведении
        ========================= */

        project.addEventListener("mouseenter", () => {

            video.play().catch(() => {});

        });

        project.addEventListener("mouseleave", () => {

            video.pause();

            video.currentTime = 0;

        });


        /* =========================
           ТЕЛЕФОН — запуск при появлении
           карточки на экране
        ========================= */

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        video.play().catch(() => {});

                    } else {

                        video.pause();

                    }

                });

            },
            {
                threshold: 0.35
            }
        );

        observer.observe(project);

    });

});
