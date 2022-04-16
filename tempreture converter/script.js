function cel_to_fahr(){
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");

    var conversion_result = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(conversion_result);
}

function fahr_to_cel(){
    var celsius = document.getElementById("celsius");
    var fahrenheit = document.getElementById("fahrenheit");

    var conversion_result = (parseFloat(fahrenheit.value) -32) * 5 / 9;
    celsius.value = parseFloat(conversion_result);
}