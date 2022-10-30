function ConvFahr() {
    let userentry = document.getElementById("user-in").value;
    let ToFahreBtn = document.getElementById("ToFahre");
    let ToKelvinBtn = document.getElementById("ToKelvin");
    let FahrTokBtn = document.getElementById("FarTok");

    document.getElementById("result-out").innerHTML = Number(userentry) * 1.8 + 32 + '' + " Fahrenheit";
    
    ToFahreBtn.classList.toggle("active");
    ToKelvinBtn.classList.remove("active");
    FahrTokBtn.classList.remove("active");
}
function CelsKelv() {
    let userentry = document.getElementById("user-in").value;
    let ToFahreBtn = document.getElementById("ToFahre");
    let ToKelvinBtn = document.getElementById("ToKelvin");
    let FahrTokBtn = document.getElementById("FarTok");


    document.getElementById("result-out").innerHTML = Number(userentry) + 273.15 + '' + " Kelvin";
    
    ToKelvinBtn.classList.toggle("active");
    ToFahreBtn.classList.remove("active");
    FahrTokBtn.classList.remove("active");
}
function FahrKelv() {
    let userentry = document.getElementById("user-in").value;
    let ToFahreBtn = document.getElementById("ToFahre");
    let ToKelvinBtn = document.getElementById("ToKelvin");
    let FahrTokBtn = document.getElementById("FarTok");

    document.getElementById("result-out").innerHTML = Number(userentry) - 32 * 0.555 + 273.15 + '' + " Kelvin";
    
    FahrTokBtn.classList.toggle("active");
    ToKelvinBtn.classList.toggle("active");
    ToFahreBtn.classList.remove("active");
}