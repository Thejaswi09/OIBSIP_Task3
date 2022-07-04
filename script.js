function Celsius(){
    var s=document.getElementById("w").value;
    var far=(s*1.8)+32;
    faren = far.toFixed(1);
    var res=document.getElementById("result").innerHTML="RESULT(FAREN): "+faren;
}
function Farenheit(){
    var v=document.getElementById("w").value;
    var Cel=(v-32)/1.8;
    Cels = Cel.toFixed(1);
    var res=document.getElementById("result").innerHTML="RESULT(CELSIUS): "+Cels;
}
function reset(){
    document.getElementById("w").value=" ";
    document.getElementById("result").innerHTML=" ";
}