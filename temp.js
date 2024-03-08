

//Event for when the button btnCalc is clicked..


document.getElementById("btnCalc").onclick = function(){
    //get the input form the textbox named txtFah
    var strFah = document.getElementById("txtFah").value;
    var fah = parseFloat(strFah);
    var cel = (fah -32)* 5.0 / 9;
    var message= "";
    if(fah > 78){
        message = "suns out guns out !!";
    }
    else if (fah > 32){
        message = "sweater weather !!"
    }
    else {
        message = "Stay INSIDE!!!"
    }
    document.getElementById("divCel").innerHTML = "The Celsius is " + parseFloat(cel).toFixed(2) + "<br>" + message;
}



// c = (f-32)* 5/9


//suns out guns 
//sweater weather
//stay inside
//
