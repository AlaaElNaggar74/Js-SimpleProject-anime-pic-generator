let butt=document.getElementById("butt");
let seccontai=document.getElementById("seccontai");


let imgreplac=document.getElementById("imgreplac");
let secbutt=document.getElementById("secbutt");

async function rplacee(){
try {
    butt.disabled=true;
    seccontai.style.display="block";
    imgreplac.style.display="none";

    secbutt.innerHTML=`looding...`; 
    let connection= await fetch("https://api.catboys.com/img");
    let arrconee=await connection.json();
  
    imgreplac.src=arrconee.url; 
   
    secbutt.innerHTML=arrconee.artist; 
    butt.disabled=false;
    imgreplac.style.display="block";

} catch (error) {
    butt.disabled=true;
    secbutt.innerHTML=`Errror PLEASE TRY AGAIN`; 
    imgreplac.innerHTML=`<p>Errror</p>`; 
    
}
    

}

butt.addEventListener("click",rplacee);