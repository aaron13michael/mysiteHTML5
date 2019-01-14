(function() {
    document.getElementById("Hamburger").addEventListener("click", function(e){
       document.getElementById("overlay").style.display = "none";
       var nav = document.querySelector("#Navigation nav:first-of-type");
       nav.style.transform = "translate(-200px)"
    } );

    rotateTriangles();
} ()
);