(function() {
    document.querySelector("#Top-bar .hamburger").addEventListener("click", function(e){
        document.getElementById("Overlay").style.display = "block";
        document.getElementById("Top-bar").style.transform = "translateY(-50px)";
        var nav = document.querySelector("#Navigation nav:first-of-type");
        nav.style.transform = "translate(200px)"
    })
    document.querySelector("#Navigation .hamburger").addEventListener("click", mobileNavClick);
    window.addEventListener("resize", function(){
        if (window.outerWidth > 960){
            //reset mobile navbar position
            document.getElementById("Top-bar").style.transform = "none";
            var nav = document.querySelector("#Navigation nav:first-of-type");
            nav.style.transform = "none";
        }
    });

    var aboutLink = document.querySelector('[data-link=AboutMe]');
    aboutLink.addEventListener("click", mobileNavClick);
    aboutLink.addEventListener("click", (e) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#About-Me").offset().top - 60
        }, 500);
    });
    var philosophyLink = document.querySelector('a[data-link="Philosophy"]')
    philosophyLink.addEventListener("click", mobileNavClick);
    philosophyLink.addEventListener("click", (e) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#Philosophy").offset().top - 60
        }, 500);
    });

    function mobileNavClick(){
        document.getElementById("Overlay").style.display = "none";
        document.getElementById("Top-bar").style.transform = "translateY(0px)";
        var nav = document.querySelector("#Navigation nav:first-of-type");
        nav.style.transform = "translate(-200px)"
    }

    rotateTriangles();
} ()
);