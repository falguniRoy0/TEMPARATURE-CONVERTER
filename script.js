const celcius = document.querySelector('#cel');
const farenhite = document.querySelector('#faren');
const kelvin = document.querySelector('#kel');

// MAD
const setKelvin = () =>{
    celcius.value = kelvin.value - 273.15;
    farenhite.value = (kelvin.value - 273.15) * 9/5 + 32;
}
kelvin.addEventListener("input", setKelvin);

// USD
const setFarenhite = () =>{
    celcius.value = (farenhite.value - 32) * 5/9;
    kelvin.value = (farenhite.value - 32) * 5/9 + 273.15;
}
farenhite.addEventListener("input", setFarenhite);
// EURO
const setCelcius = () =>{
    farenhite.value = celcius.value * 9/5 + 32;
    kelvin.value = celcius.value + 273.15;
}
celcius.addEventListener("input", setCelcius);
