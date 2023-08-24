var caracter = document.getElementById('entrada').Value = '';
//logica
switch(caracter){
    case "-3":
    case "-2":
    case "-1": 
    case "0" :
    case "1" :
    case "2" :
    case "3" :
    case "4" :
    case "5" :
    case "6" :
    case "7" :
    case "8" :
    case "9" :
document.getElementById('ApenasNumeros').Value = caracter;
break;
default:
    document.getElementById('ApenasLetras'). Value = caracter;
}