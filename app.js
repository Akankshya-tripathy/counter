var a1=document.getElementById("btn1");
var a2=document.getElementById("btn2");
var a3=document.getElementById("btn3");
var x=document.getElementById("count");

a1.addEventListener("click", function () {
    increase();
});
a3.addEventListener("click", function () {
    decrease();
});
a2.addEventListener("click", function () {
    reset();
});
function increase()
{
    x.innerHTML=parseInt(x.innerHTML)+1;
    
}
function decrease()
{
    if (x.innerHTML==0){
        alert("CAN'T BE LESS THAN 0");
    }
    else{
    x.innerHTML=parseInt(x.innerHTML)-1;}
    
}
function reset()
{
    x.innerHTML=0;
    
}