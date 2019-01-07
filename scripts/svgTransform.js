"use strict";

(function(){
    var initialTheta = 0;
    var currentTheta = initialTheta;
    var thetaDelta= 0.5;
    var angularLimit = 180;

    var animationFrameID;
    var tri1 = document.getElementById("tri1");
    var tri2 = document.getElementById("tri2");
    var tri3 = document.getElementById("tri3");

    var tris = [tri1, tri2, tri3];
    var transformObj=triangles.createSVGTransform();
    tris.forEach(function(t){
        t.transform.baseVal.appendItem(transformObj);
    })

    document.getElementById("triangleGraphic").addEventListener("mouseover", function(event){
        animationFrameID = requestAnimationFrame(flipTriangle);
    });

    function flipTriangle(){
        if(currentTheta <= angularLimit){
            tris.forEach(function(t){
                t.transform.baseVal.getItem(0).setRotate(currentTheta, t.getAttribute("x"), t.getAttribute("y"));
                currentTheta += thetaDelta;
                animationFrameID = requestAnimationFrame(flipTriangle);
            });
        }
        else{
            cancelAnimationFrame(animationFrameID);
            return;
        }
    }
}()
    
);