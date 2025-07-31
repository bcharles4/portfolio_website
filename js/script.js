window.addEventListener("DOMContentLoaded", () => {
    // Animate sidebar
    gsap.from(".sidebar", {
        x: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut"
    });

    // Animate account-con if it exists
    const accountCon = document.querySelector(".account-con");
    if (accountCon) {
        gsap.from(accountCon, {
            y: -50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.inOut"
        });
    }

    // === TEXT SWAPPER ===
    const textElement = document.querySelector("#text-transition");
    if (textElement) {
        const texts = ["I'm a WEB", "I'm a MOBILE", "I'm a UI/UX"];
        let index = 0;
        let splitInstance;

        const animateText = () => {
            if (splitInstance) splitInstance.revert();

            textElement.textContent = texts[index];

            splitInstance = new SplitType(textElement, { types: "chars" });

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
    }

    // Animate title if it exists
    const animatedTitle = document.querySelector(".content h1");
    if (animatedTitle) {
        gsap.from(animatedTitle, {
            y: 250,
            opacity: 0,
            duration: 2.5,
            ease: "elastic.out(4, 0.3)",
        });
    }

    // === POPUP MENU LOGIC ===
    const menuIcon = document.getElementById("menu-icon");
    const popupMenu = document.getElementById("popupMenu");

    if (menuIcon && popupMenu) {
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
                    });
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
    }

    // === MODAL IMAGE ===
    const images = document.querySelectorAll('.card-img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    if (images.length && modal && modalImg && closeModal) {
        images.forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.src;
                modal.style.display = 'flex';

                gsap.fromTo(".image-modal-content",
                    { scale: 0.6, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
                );
            });
        });

        function closeImageModal() {
            gsap.to(".image-modal-content", {
                scale: 0.6,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    modal.style.display = 'none';
                }
            });
        }

        closeModal.addEventListener('click', closeImageModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
});
