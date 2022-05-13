function decodificar (texto) {
    if(texto != "") {
        texto = texto.replace(/oslt/g,'u');
        texto = texto.replace(/trioe/g,'o');
        texto = texto.replace(/lma/g,'a');
        texto = texto.replace(/esrim/g,'i');
        texto = texto.replace(/mserch/g,'e');
    }else {
        texto = "Ingrese el mensaje nuevamente";
    }
    return texto;
}