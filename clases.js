//1

class colegio{
    constructor(nombre, numero_aulas, numero_alumnos){
        this.nombre= nombre;
        this.numero_aulas= numero_aulas;
        this.alumnos= [];
        if(numero_alumnos > 0){
            this.añadirAlumnosIniciales(numero_alumnos);
        }
    }

    añadirAlumnosIniciales(numero_alumnos){
        for(let i=0;i<numero_alumnos;i++){
          let alumnoNuevo=  new alumno(this.dniAleatorio(), 'nombre' + i, this.notaAleatoria());
          this.alumnos.push(alumnoNuevo);
        }
    }

    dniAleatorio() {
       let num = Math.floor( ( Math.random() * 100000000 ) );
        return num;
      }

    notaAleatoria(){
      return  Math.floor(Math.random() * (10 - 0 + 1) + 0);
    }

    obtenerMedia(){
        let media=0;
        for(let i=0; i<this.alumnos.length;i++){
          media+=  this.alumnos[i].nota_media;
        }
        let mediaReal= media/this.alumnos.length;
        return mediaReal.toFixed(2);
    }

    añadirAlumnoNuevo(DNI, nombre, nota_media){
        if(nota_media<=10 && nota_media>=0){
        let alumNuevo= new alumno(DNI, nombre, nota_media);
        this.alumnos.push(alumNuevo);
        }else{
        console.log('Alumno: ' + nombre+ ' no añadido.')}
    }

    modificarMediaAlumno(nombre, nota_media_nueva){
        for(let i=0;i<this.alumnos.length;i++){
            if(this.alumnos[i].nombre == nombre){
                this.alumnos[i].modificarMedia(nota_media_nueva);
            }
        }
    }
}

class alumno{
    constructor(DNI, nombre, nota_media){
        this.DNI= DNI;
        this.nombre= nombre;
        this.nota_media= nota_media;
    }

    modificarMedia(nota_media_nueva){
        if(nota_media_nueva<=10 && nota_media_nueva>=0){
        this.nota_media= nota_media_nueva;
        console.log('Nota media modificada');
        }
    }
}

//Ejemplos
//Ej1
var colegio1= new colegio("IES Paco Molla", 12, 5);

colegio1.añadirAlumnoNuevo("20917649T", 'Jemima', 9,2);
colegio1.añadirAlumnoNuevo("65485312D", 'Jose Miguel', 7,5);

console.log(colegio1.obtenerMedia());

//Ej2
var colegio2= new colegio("IES Torrellano", 5, 3);

colegio2.añadirAlumnoNuevo('1254865', 'Ana', 9);
colegio2.añadirAlumnoNuevo('33333333', 'Manuel', 8);
colegio2.añadirAlumnoNuevo('3334533', 'Maria', 7);
colegio2.añadirAlumnoNuevo('3345843', 'Miriam', 8);
colegio2.añadirAlumnoNuevo('5', 'Francisco', 23);

console.log(colegio2.obtenerMedia());

colegio2.modificarMediaAlumno('Maria', 9);

console.log(colegio2.obtenerMedia());


//2

class aeropuerto{
    constructor(nombre, ciudad, num_vuelos_diarios){
        this.nombre= nombre;
        this.ciudad= ciudad;
        this.vuelos= [];
        if(num_vuelos_diarios>0){
            this.añadirVuelosAleatorios(num_vuelos_diarios);
        }
    }

    añadirVueloNuevo(codigo, hora_llegada, hora_salida){
        if(compararHoras(hora_salida, hora_llegada)){
        let vueloNuevo= new vuelo(codigo, hora_llegada, hora_salida);
        this.vuelos.push(vueloNuevo);
        }else{
            console.log('Vuelo: ' + codigo + ' no añadido.');
        }
    }

    añadirVuelosAleatorios(num_vuelos_diarios){
        for(let i=0; i< num_vuelos_diarios; i++){
            let vNuevo= new vuelo(i, '00:00', '01:00');
            this.vuelos.push(vNuevo);
        }
    }
}

class vuelo{
    constructor(codigo, hora_llegada, hora_salida){
        this.codigo= codigo;
        this.hora_llegada= hora_llegada;
        this.hora_salida= hora_salida;
    }

    modificarLlegada(hora_llegada_nueva){
        if(compararHoras(this.hora_salida, hora_llegada_nueva)){
            this.hora_llegada= hora_llegada_nueva;
        }else{
            console.log('La hora de llegada no ha sido modificada.'); 
        }
    }

    modificarSalida(hora_salida_nueva){
        if(compararHoras(hora_salida_nueva, this.hora_llegada)){
            this.hora_salida= hora_salida_nueva;
        }else{
            console.log('La hora de salida no ha sido modificada.'); 
        }
    }

}

function compararHoras(salida, llegada){
    let minutosSalida= conseguirMinutosTotales(salida);
    let minutosLlegada= conseguirMinutosTotales(llegada);
    return minutosSalida<minutosLlegada;
}

function conseguirMinutosTotales(horaEntrada){
    let hora= parseInt(separarHoras(horaEntrada), 10);
    let minutos= parseInt(separarMinutos(horaEntrada), 10);
    let minutosTotales= (hora*60) + minutos;
    return minutosTotales;
}

function separarHoras(stringHora){
    let hora;
    if(stringHora.length == 4){
        hora= stringHora.substring(0,1);
    }else{
        hora= stringHora.substring(0,2); 
    }
    return hora;
}

function separarMinutos(stringHora){
    let min;
    if(stringHora.length == 4){
        min= stringHora.substring(2,4);
    }else{
        min= stringHora.substring(3,5); 
    }
    return min;
}

var aeropuerto1= new aeropuerto('Santo', 'Alicante', 3);

aeropuerto1.añadirVueloNuevo(56485, '15:45', '10:30');


//3

class hospital{
    constructor(nombre, ciudad, num_pacientes){
        this.nombre= nombre;
        this.ciudad= ciudad;
        this.num_pacientes= num_pacientes;
        this.pacientes= [];
    }

    darAlta(códigoPaciente){

    }
}

class paciente{
    constructor(DNI, nombre, enfermedad){
        this.DNI= DNI;
        this.nombre= nombre;
        this.enfermedad= enfermedad;
    }
}