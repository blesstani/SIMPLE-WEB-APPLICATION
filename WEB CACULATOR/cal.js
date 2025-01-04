function equal() {
    let c = document.getElementById("result").value;
    let r = eval(c);
    document.getElementById("result").value = r;

}
function display(value) {
    document.getElementById("result").value += value;

}
function Clear() {
    document.getElementById("result").value = "";
}

function fac() {
    let f = document.getElementById("result").value;
    var x = 1;
    if(f==0 || f==1){

    }
    else{
        for (i = 1; i <= f; i++) {
            x *= i;
         }
    }
   
    document.getElementById("result").value = x;

}



function ClearEntry() {
document.getElementById("result").value = document.getElementById("result").value.slice(0,-1) ;

}




