window.addEventListener("DOMContentLoaded", () => {
    // Animate sidebar
    gsap.from(".sidebar", {
        x: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut"
    });

    // Animate account-con
    gsap.from(".account-con", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut"
    });

    // === TEXT SWAPPER ===
    const textElement = document.querySelector("#text-transition");
    const texts = ["I'm a Full Stack", "I'm a Frontend", "I'm a Backend"];
    let index = 0;
    let splitInstance;

    const animateText = () => {
        if (splitInstance) splitInstance.revert();

        textElement.textContent = texts[index];

        splitInstance = new SplitType(textElement, { types: "chars" });

        // Animate ONLY the .char inside #text-transition
        gsap.from("#text-transition .char", {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: "elastic.out(2, 0.3)",
            stagger: 0.05
        });

        index = (index + 1) % texts.length;
        setTimeout(animateText, 2000);
    };

    animateText();

        gsap.from(".content h1", {
        y: 250,
        opacity: 0,
        duration: 2.5,
        ease: "elastic.out(4, 0.3)",
    });


      const menuIcon = document.getElementById("menu-icon");
    const popupMenu = document.getElementById("popupMenu");
    const popupItems = popupMenu.querySelectorAll("li");

    let isMenuVisible = false;

    menuIcon.addEventListener("click", () => {
        if (!isMenuVisible) {
            popupMenu.style.display = "block";

            gsap.fromTo(popupItems,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        } else {
            gsap.to(popupItems, {
                opacity: 0,
                y: -10,
                duration: 0.2,
                stagger: 0.05,
                ease: "power2.in",
                onComplete: () => {
                    popupMenu.style.display = "none";
                }
            });
        }

        isMenuVisible = !isMenuVisible;
    });
});
