let agus = {
    edad:22,
    apellido:'ahumada',
    deporte: true
}
let leo = {
    edad: 22,
    apellido: 'romero',
    deporte: true
}
function valid() {
    if (agus.edad === leo.edad){
        console.log(true);
    }
    else{
        console.log(false);
    }
}