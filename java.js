let text = "Computer Science Student";

let index = 0;

let typing = document.getElementById("typing");


function type(){

if(index < text.length){

typing.innerHTML += text.charAt(index);

index++;

setTimeout(type,100);

}

else{

setTimeout(remove,1500);

}

}



function remove(){

if(index > 0){

typing.innerHTML=text.substring(0,index-1);

index--;

setTimeout(remove,70);

}

else{

setTimeout(type,500);

}

}



type();