//if ternario

let  fruta = 'Zandia';

let resultado = fruta == 'Manzana' ? 'Buenísimo,me gustan las manzanas' : 'Ufa,quería manzana';
console.log (resultado);


//switch

let semaforo = 'Ninguna';
switch (semaforo) {
    case 'Verde': 
    console.log ('Puedo cruzar');
    break;
    case 'amarillo':
        console.log ('avanzar despacio');
        break;
        case 'rojo':
        console.log ('No cruces,hay que esperar');
        break;
        default:
            console.log ('No funciona el semaforo')
}


let dia = "viernes"

switch(dia) {
  case "viernes" :
  console.log("buen finde");
  break;
case "lunes" :
  console.log("buena semana,buen día");
}

let edad = 19;
let acceso = '';

if ( edad < 16) {
    acceso = ''
}
