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

    document.querySelectorAll(".panel-grad").forEach((panelgrad) => {
        panelgrad.addEventListener('mousemove', (e) => {
            const docWidth = document.body.clientWidth;
            const docHeight = document.body.clientHeight;
    
            const mouseXpercentage = Math.round(e.pageX / docWidth * 100);
            const mouseYpercentage = Math.round(e.pageY / docHeight * 100);
    
            //const panelGrad = document.querySelector(".panel-grad");
            e.currentTarget.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #231437, #162520)';
        });
    });
    
});

