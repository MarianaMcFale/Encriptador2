function codificar (texto) {
    detectar_mayúsculas(texto);
    detectar_acentos(texto);
    if (solo_minusculas && sin_acentos){
        texto = texto.replace(/e/g,'mserch');
        texto = texto.replace(/i/g,'esrim');
        texto = texto.replace(/a/g,'lma');
        texto = texto.replace(/o/g,'trioe');
        texto = texto.replace(/u/g,'oslt');
    }else {
        texto = "Ingrese el mensaje nuevamente";
    }
    
    return texto;
}