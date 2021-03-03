document.addEventListener('DOMContentLoaded', (e) =>{
    document.querySelectorAll(".nav-link").forEach((navlink) => {
        navlink.addEventListener('click', (e) => {
            e.stopPropagation();
            const sibs = document.querySelectorAll(".nav-link");
            sibs.forEach((sib) =>{
                if(sib.href == e.currentTarget.href) {
                    sib.classList.add("active");
                }
                else if(sib.classList.contains("active")) {
                    sib.classList.remove("active");
                }
            });
            document.querySelector(".navbar-toggler").click();
        });
    });
});


