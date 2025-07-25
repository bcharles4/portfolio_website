window.addEventListener("DOMContentLoaded", () => {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        var tl = gsap.timeline();
        tl.from(".sidebar", {
            x: -50,
            opacity: 0,
            stagger: 0.5,
            duration: 0.7,
            ease: "power3.inOut"
        });
    }

    var accountLogo = document.querySelector('.account-con');
    if (accountLogo) {
        var tlLogo = gsap.timeline();
        tlLogo.from(".account-con", {
            y: -50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.inOut"
        });
    }
});
