/* function contadorDeDias() {
    let diaActual = 41;
    const diasLimite = 365;
    let diasRestantes;
    diasRestantes = diasLimite - diaActual;
    console.log('the remaining days are' ,diasRestantes);
}
*/
function daysForTheYear() {
    const diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31]
    let restante = 365;
    let fecha = new Date();
    for (let i = 0; i < fecha.getMonth(); i++) {
        restante = restante -diasMeses[i];
    }
    return restante - fecha.getDate();
}