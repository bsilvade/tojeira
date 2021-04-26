// Initial FadeIn
window.onload = function(){document.getElementById("entry").style.opacity = 1;}  

// Refresh Page when Chinging Orientation
window.onorientationchange = function(){window.location.reload();}

// Images display [1280 - ]         
function cursorElement(e) {
	var x = e.screenX*100/screen.width;
    var y = e.screenY*100/screen.height;
    if (x >=0 && x <=100 && y >=0 && y <=90){
    	if (x >=0 && x <=30 && y >=0 && y <=30){document.getElementById("imageOne").style.opacity = 1;}
        if (x >=30 && x <=60 && y >=30 && y <=60){document.getElementById("imageTwo").style.opacity = 1;}
        if (x >=60 && x <=100 && y >=60 && y <=90){document.getElementById("imageThree").style.opacity = 1;}  
        if (x >=60 && x <=100 && y >=0 && y <=30){document.getElementById("imageOne").style.opacity = 0; document.getElementById("imageTwo").style.opacity = 0; document.getElementById("imageThree").style.opacity = 0;}  
    } else{document.getElementById("imageOne").style.opacity = 0; document.getElementById("imageTwo").style.opacity = 0; document.getElementById("imageThree").style.opacity = 0;}
    }

// Location button [Place – Coordenates]
function switchToCoord() { var visibleCoord = document.getElementById("place"); visibleCoord.style.margin = "-55px 0 0 0";}
function switchToPlace() { var visibleCoord = document.getElementById("place"); visibleCoord.style.margin = "0 0 0 0";}
          
// More info button  [ - 640]
function openMoreInfo(){
  	x = document.getElementById("sinopsis").style;
  	y = document.getElementById("moreInfoIcon").style;
    if(x.top == '100%' || x.top == ''){
    	x.top = 0; y.transform = 'rotate(45deg)';     
    } else{ x.top = '100%'; y.transform = 'rotate(0deg)';}
    }


        


