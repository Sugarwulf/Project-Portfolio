function stats() {

var input=document.getElementById('PortTxtBox');
var inputSpace=input.value; inputSpace = inputSpace.replace(/(^\s*)|(\s*$)/gi,"");  inputSpace=inputSpace.replace(/[ ]{2,}/gi," ");
countS=0;
countW=0;
avgWdperSen=0;
totalSpc=0;


  for (var i = 0; i < inputSpace.length; i++) {
  if (inputSpace.substr(i,1) === "." || inputSpace.substr(i,1) === "!" || inputSpace.substr(i,1) === "?") {countS++;

    }
  if (inputSpace.substr(i,1) === ' ' || inputSpace.substr(i,1) === '.') {countW++;

    }
    if (inputSpace.substr(i,1) === ' ') {totalSpc++;

    }
  }
  document.getElementById("countSen").value = countS;
  document.getElementById("countWd").value = countW;
  document.getElementById("avgWdperSen").value= countW/countS;
  document.getElementById("totalSpc").value= totalSpc;
}
