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

     const buttons = document.querySelectorAll(".filter-buttons button");
    const cards = document.querySelectorAll(".display-cards .card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            cards.forEach(card => {
                const type = card.getAttribute("data-type");
                if (filter === "all" || filter === type) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });



     document.getElementById('showAccessCodeBtn').onclick = function() {
                    document.getElementById('accessCodeModal').style.display = 'flex';
                    // GSAP animation for modal appearance
                    gsap.fromTo(
                        "#accessCodeModal > div",
                        { scale: 0.8, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
                    );
                };
                document.getElementById('closeAccessCodeModal').onclick = function() {
                    // GSAP animation for modal disappearance
                    gsap.to("#accessCodeModal > div", {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: function() {
                            document.getElementById('accessCodeModal').style.display = 'none';
                            document.getElementById('accessCodeError').style.display = 'none';
                            document.getElementById('accessCodeInput').value = '';
                        }
                    });
                };
                document.getElementById('submitAccessCodeBtn').onclick = function() {
                    var code = document.getElementById('accessCodeInput').value;
                    if(code === 'yourcode') {
                        window.location.href = 'shop.html';
                    } else {
                        document.getElementById('accessCodeError').style.display = 'block';
                        // Shake animation for error
                        gsap.fromTo("#accessCodeModal > div", 
                            { x: -10 }, 
                            { x: 10, duration: 0.1, yoyo: true, repeat: 3, ease: "power1.inOut", onComplete: function() {
                                gsap.to("#accessCodeModal > div", { x: 0, duration: 0.1 });
                            }}
                        );
                    }
                };
                // Allow closing modal by clicking outside the modal content
                document.getElementById('accessCodeModal').addEventListener('click', function(e) {
                    if (e.target === this) {
                        gsap.to("#accessCodeModal > div", {
                            scale: 0.8,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.in",
                            onComplete: function() {
                                document.getElementById('accessCodeModal').style.display = 'none';
                                document.getElementById('accessCodeError').style.display = 'none';
                                document.getElementById('accessCodeInput').value = '';
                            }
                        });
                    }
                });
    
});


