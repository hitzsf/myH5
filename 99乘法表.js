document.write("<table border='2'>");
for (var i = 1; i <= 9; i++) {
	document.write("<tr>");
	for (var j = 1; j <= 9; j++) {
		if (j <= i) {
			document.write("<td class='tdname'>&nbsp" + j + " × " + i + " = " +(i*j) + "&nbsp</td>");
		} else {
			document.write("<td>&nbsp</td>");
		}	}
	document.write("</tr>");
}
document.write("</table>");

window.onload = function(){
	var tdElements = document.getElementsByClassName("tdname");
	for(var i=0; i<tdElements.length;i++){
		tdElements[i].addEventListener("mouseenter",changeColor.bind(null,tdElements[i],"red"),false);
		tdElements[i].addEventListener("mouseleave",changeColor.bind(null,tdElements[i],"white"),false);
	}
}


function changeColor(obj1,color){
	obj1.bgColor = color;
}
