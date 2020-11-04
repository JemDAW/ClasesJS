//1

class colegio{
    constructor(nombre, numero_aulas, numero_alumnos){
        this.nombre= nombre;
        this.numero_aulas= numero_aulas;
        this.numero_alumnos= numero_alumnos;
        this.alumnos= [];
    }

    obtenerMedia(){
        let media=0;
        for(let i=0; i<this.numero_alumnos;i++){
          media+=  this.alumnos[i].nota_media
        }
        return media/this.numero_alumnos;
    }
}

class alumno{
    constructor(DNI, nombre, nota_media){
        this.DNI= DNI;
        this.nombre= nombre;
        this.nota_media;
    }

    modificarMedia(nota_media_nueva){
        this.nota_media= nota_media_nueva;
    }
}

//2

class aeropuerto{
    constructor(nombre, ciudad, num_vuelos_diarios){
        this.nombre= nombre;
        this.ciudad= ciudad;
        this.num_vuelos_diarios= num_vuelos_diarios;
        this.vuelos= [];
    }

}

class vuelo{
    constructor(codigo, hora_llegada, hora_salida){
        this.codigo= codigo;
        this.hora_llegada= hora_llegada;
        this.hora_salida= hora_salida;
    }

    modificarLlegada(hora_llegada_nueva){
        if(this.comprobarLlegadaCorrecta(hora_llegada_nueva)){
            this.hora_llegada= hora_llegada_nueva;
        }
    }

    modificarSalida(hora_salida_nueva){
        if(this.comprobarSalidaCorrecta(hora_salida_nueva)){
            this.hora_salida= hora_salida_nueva;
        }
    }

    comprobarSalidaCorrecta(hora_salida_nueva){
        return hora_salida_nueva < this.hora_llegada;
    }

    comprobarLlegadaCorrecta(hora_llegada_nueva){
        return hora_llegada_nueva > this.hora_salida;
    }
}

//3

