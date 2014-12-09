
//initializes scalable values
var width = 10;
var nDivs = 3*width/10;
startDash = "";
for (var i = 0; i<width*4; i++){
	startDash += "-";
}
startOs = "O";

//prints top line
toPrint = startDash.concat(startOs).concat(startDash);
document.write(toPrint + '<br>')

//prints the first half
for (var j = 0; j < nDivs; j++){
	for (var i = 0; i < (j+1)*width/nDivs; i++){
		if ((i+1)%2 === 0){
			numAdds = (2*nDivs) - (j*2);
			startDash = startDash.substr(0,startDash.length-numAdds)
			for (k = 0; k<numAdds; k++){
				startOs += "O"
			}
			toPrint = startDash.concat(startOs).concat(startDash);
			document.write(toPrint + '<br>')
		}
	}
}


//prints bottom half - waiting to get top half fixed
for (var j = 0; j < nDivs; j++){
	for (var i = 0; i < (j+1)*width/nDivs; i++){
		if ((i+1)%2 === 0){
			numAdds = (2*nDivs) - (j*2);
			startOs = startOs.substr(0,startOs.length-numAdds)
			for (k = 0; k<numAdds; k++){
				startDash += "-"
			}
			toPrint = startDash.concat(startOs).concat(startDash);
			document.write(toPrint + '<br>')
		}
	}
}
