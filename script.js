const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("");
}

function check(){

   const value= input.value;

   if(value==0){
    alert("PLEASE ENTER THE TEXT");
    return;
   }
   const reverse= reverseString(value);

   if(value === reverse){
    alert("P A L I N D R O M E");
   }else{
    alert("ITS NOT A PALINDROME");
   }
    input.value="";
}