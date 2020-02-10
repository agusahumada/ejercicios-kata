/*ejercicio 1 un array devuelve los numeros de otro array multiplicado por 2*/
let lista= [];
function numerosDobles(lista) {
    let multiplicador= [];
    for (let i = 0; i < lista.length; i++) {
       multiplicador.push(lista[i]*2);
    }
return multiplicador;
}