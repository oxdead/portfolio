document.addEventListener('DOMContentLoaded', (e) =>{
    var jarallax = new Jarallax();
    jarallax.addAnimation(".ghost1", [{progress:'0%', top:'0%'}, {progress:'100%', top:'30%'}]);
    jarallax.addAnimation(".ghost2", [{progress:'0%', top:'0%'}, {progress:'100%', top:'80%'}]);

    jarallax.addAnimation(".near:nth-of-type(1)", [{progress:'0%', top:'-50%'}, {progress:'100%', top:'110%'}]);
    jarallax.addAnimation(".near:nth-of-type(2)", [{progress:'0%', top:'5%'}, {progress:'100%', top:'110%'}]);
    jarallax.addAnimation(".near:nth-of-type(3)", [{progress:'0%', top:'-35%'}, {progress:'100%', top:'110%'}]);
    jarallax.addAnimation(".near:nth-of-type(4)", [{progress:'0%', top:'40%'}, {progress:'100%', top:'110%'}]);

    jarallax.addAnimation(".mid:nth-of-type(5)", [{progress:'0%', top:'-35%'}, {progress:'100%', top:'200%'}]);
    jarallax.addAnimation(".mid:nth-of-type(6)", [{progress:'0%', top:'-120%'}, {progress:'100%', top:'200%'}]);
    
    jarallax.addAnimation(".far:nth-of-type(7)", [{progress:'0%', top:'-185%'}, {progress:'100%', top:'330%'}]);
    jarallax.addAnimation(".far:nth-of-type(8)", [{progress:'0%', top:'-160%'}, {progress:'100%', top:'330%'}]);
    jarallax.addAnimation(".far:nth-of-type(9)", [{progress:'0%', top:'-135%'}, {progress:'100%', top:'330%'}]);
    
    jarallax.addAnimation(".furthest:nth-of-type(10)", [{progress:'0%', top:'-275%'}, {progress:'100%', top:'477%'}]);
    jarallax.addAnimation(".furthest:nth-of-type(11)", [{progress:'0%', top:'-300%'}, {progress:'100%', top:'477%'}]);
    jarallax.addAnimation(".furthest:nth-of-type(12)", [{progress:'0%', top:'-270%'}, {progress:'100%', top:'477%'}]);
    jarallax.addAnimation(".furthest:nth-of-type(13)", [{progress:'0%', top:'-260%'}, {progress:'100%', top:'477%'}]);
    jarallax.addAnimation(".furthest:nth-of-type(14)", [{progress:'0%', top:'-220%'}, {progress:'100%', top:'477%'}]);
    jarallax.addAnimation(".furthest:nth-of-type(15)", [{progress:'0%', top:'-285%'}, {progress:'100%', top:'477%'}]);

    document.querySelectorAll(".nav-link").forEach((navlink) => {
        navlink.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll(".nav-link").forEach((sib) =>{
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
    
            e.currentTarget.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #231437, #162520)';
        });
    });

});


