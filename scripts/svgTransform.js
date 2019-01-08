"use strict";

(function(){
    var initialTheta = 0;
    var currentTheta = initialTheta;
    var thetaDelta= 10;
    var angularLimit = 180;
    var moveLimit = 60;
    var moveStep = 10;
    var currentMovement = initialTheta
    var flipped = false;

    var animationFrameID;
    var tri1 = document.getElementById("tri1");
    var tri2 = document.getElementById("tri2");
    var tri3 = document.getElementById("tri3");

    var tris = [tri1, tri2, tri3];
    var transformObj=triangles.createSVGTransform();
    tris.forEach(function(t){
        t.transform.baseVal.appendItem(transformObj);
        t.transform.baseVal.appendItem(transformObj);
    })

    
    window.addEventListener("scroll", function(event){
        if(!flipped && $(document).scrollTop() > 1200){
            animationFrameID = requestAnimationFrame(flipTriangle);
            flipped = true;
        }
        
        //animationMoveFrameID = requestAnimationFrame(translateTriangle);
    });

    function flipTriangle(){
        if(currentTheta <= angularLimit){
            if(currentMovement <= moveLimit){
                tri1.transform.baseVal.getItem(1).setTranslate(0, currentMovement);
                tri2.transform.baseVal.getItem(1).setTranslate(0, -currentMovement);
                tri3.transform.baseVal.getItem(1).setTranslate(0, -currentMovement);
            }
            tri1.transform.baseVal.getItem(0).setRotate(currentTheta,400, 250 + currentMovement);
            tri2.transform.baseVal.getItem(0).setRotate(currentTheta,200, 550 - currentMovement);
            tri3.transform.baseVal.getItem(0).setRotate(currentTheta,600, 550 - currentMovement);
            
            currentTheta += thetaDelta;
            currentMovement += moveStep;
            animationFrameID = requestAnimationFrame(flipTriangle);
        }
        else{ 
            //currentMovement = 0;
            cancelAnimationFrame(animationFrameID);
            return;
        }
    }
    /*
    This got out of hand, will finish later

    function inverseFlipTriangle(){
        if(currentTheta <= angularLimit){
            if(currentMovement >= 0){
                tri1.transform.baseVal.getItem(1).setTranslate(0, -currentMovement);
                tri2.transform.baseVal.getItem(1).setTranslate(0, currentMovement);
                tri3.transform.baseVal.getItem(1).setTranslate(0, currentMovement);
            }
            tri1.transform.baseVal.getItem(0).setRotate(currentTheta,400, 250 + currentMovement);
            tri2.transform.baseVal.getItem(0).setRotate(currentTheta,200, 550 - currentMovement);
            tri3.transform.baseVal.getItem(0).setRotate(currentTheta,600, 550 - currentMovement);
            
            currentTheta += thetaDelta;
            currentMovement -= moveStep;
            animationFrameID = requestAnimationFrame(inverseFlipTriangle);
        }
        else{
            SET ANGLE BACK TO 0 FROM 360 
            tri1.transform.baseVal.getItem(0).setRotate(initialTheta,400, 250 - currentMovement);
            tri2.transform.baseVal.getItem(0).setRotate(initialTheta,200, 550 + currentMovement);
            tri3.transform.baseVal.getItem(0).setRotate(initialTheta,600, 550 + currentMovement); 
            currentTheta = initialTheta;
            angularLimit = 180;
            cancelAnimationFrame(animationFrameID);
            return;
        }
    }
    */
}()
    
);