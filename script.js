
const fahrenheit=document.querySelector("#fahrenheit"),
celcius=document.querySelector("#celcius"),
kelvin=document.querySelector("#kelvin");


window.addEventListener("load",()=>celcius.focus() );

// convert celcius to fahrenheit..and kelvin..
celcius.addEventListener("input",()=>{
    fahrenheit.value = ((celcius.value*9)/5+32).toFixed(2);
    if(!celcius.value) fahrenheit.value=""; 
    kelvin.value = ((celcius.value*1)+273.15).toFixed(2);
    if(!celcius.value) kelvin.value=""; 
})


// convert fahreinheit to celcius and kelvin
fahrenheit.addEventListener("input",()=>{
    celcius.value = (((fahrenheit.value - 32)*5)/9).toFixed(2);
    if(!fahrenheit.value) celcius.value=""; 
    kelvin.value = ((celcius.value*1)+273.15).toFixed(2);
    if(!fahrenheit.value) kelvin.value=""; 
})

// convert kelvin into celcius anfd fahreinheit

kelvin.addEventListener("input",()=>{
    celcius.value=((kelvin.value*1)-273.15).toFixed(2);
    if(!kelvin.value) celcius.value="";
    fahrenheit.value=((celcius.value *9)/5+32).toFixed(2);
    if(!kelvin.value) fahrenheit.value="";
})

