//preload image
var collimg = new Image();
collimg.src = "../images/collapse.gif";
var expimg = new Image();
collimg.src = "../images/expand.gif";


function ShowHideLayer(boxID) {
	/* Obtain reference for the selected boxID layer and its button */
	var box = document.getElementById("box"+boxID);
	var boxbtn = document.getElementById("btn"+boxID);
	
	/* If the selected box is currently invisible, show it */
	if(box.style.display == "none" || box.style.display=="") {
		box.style.display = "block";
 		boxbtn.src = "../images/collapse.gif";
	}
	/* otherwise hide it */
	else {
		box.style.display = "none";
		boxbtn.src = "../images/expand.gif";
	}
}


