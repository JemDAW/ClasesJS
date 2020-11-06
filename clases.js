//1

class colegio{
    constructor(nombre, numero_aulas, numero_alumnos){
        this.nombre= nombre;
        this.numero_aulas= numero_aulas;
        this.alumnos= [];
        if(numero_alumnos > 0){
            this.addAlumnosIniciales(numero_alumnos);
        }
    }

    addAlumnosIniciales(numero_alumnos){
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

    addAlumnoNuevo(DNI, nombre, nota_media){
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

colegio1.addAlumnoNuevo("20917649T", 'Jemima', 9,2);
colegio1.addAlumnoNuevo("65485312D", 'Jose Miguel', 7,5);

console.log(colegio1.obtenerMedia());

//Ej2
var colegio2= new colegio("IES Torrellano", 5, 3);

colegio2.addAlumnoNuevo('1254865', 'Ana', 9);
colegio2.addAlumnoNuevo('33333333', 'Manuel', 8);
colegio2.addAlumnoNuevo('3334533', 'Maria', 7);
colegio2.addAlumnoNuevo('3345843', 'Miriam', 8);
colegio2.addAlumnoNuevo('5', 'Francisco', 23);

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
            this.addVuelosAleatorios(num_vuelos_diarios);
        }
    }

    addVueloNuevoObjeto(vuelo){
        if(compararHoras(vuelo.hora_salida, vuelo.hora_llegada)){
        this.vuelos.push(vuelo);
        }else{
            console.log('Vuelo: ' + vuelo.codigo + ' no añadido.');
        }
    }

    addVueloNuevo(codigo, hora_llegada, hora_salida){
        if(compararHoras(hora_salida, hora_llegada)){
        let vueloNuevo= new vuelo(codigo, hora_llegada, hora_salida);
        this.vuelos.push(vueloNuevo);
        }else{
            console.log('Vuelo: ' + codigo + ' no añadido.');
        }
    }

    addVuelosAleatorios(num_vuelos_diarios){
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

//Ejemplos
//Ej1
var aeropuerto1= new aeropuerto('Santo', 'Alicante', 3);

aeropuerto1.addVueloNuevo(56485, '15:45', '10:30');
aeropuerto1.addVueloNuevo(54685,'21:00', '23:56');

var vuelo1= new vuelo(84569, '11:45', '12:00');

aeropuerto1.addVueloNuevoObjeto(vuelo1);

vuelo1.modificarLlegada('13:00');
aeropuerto1.addVueloNuevoObjeto(vuelo1);



//3

class hospital{
    constructor(nombre, ciudad, num_pacientes){
        this.nombre= nombre;
        this.ciudad= ciudad;
        this.pacientes= [];
        if(num_pacientes>0){
            this.addPacientesAleatorios(num_pacientes);
        }
    }

    addPacientesAleatorios(num_pacientes){
        for(let i=0;i<num_pacientes;i++){
            let pacienteAleatorio = new paciente(this.dniAleatorio(), 'Nombre'+i, this.enfermedadAleatoria());
            this.pacientes.push(pacienteAleatorio);
        }
    }

    addPacienteNuevo(DNI, nombre, enfermedad){
        let newPaciente= new paciente(DNI, nombre, enfermedad);
        this.pacientes.push(newPaciente);
    }

    addPacienteObjeto(paciente){
        this.pacientes.push(paciente);
    }

    enfermedadAleatoria(){
        const enfermedades = ['Gripe', 'Covid', 'Lumbago', 'Neumonía', 'Clamidia', 'Sífilis', 'Epilepsia', 'Cáncer', 'VIH', 'Bulimia'];
        let numAleatorio= Math.trunc(Math.random() * 10);
        return enfermedades[numAleatorio];
    }

    dniAleatorio() {
        let num = Math.floor( ( Math.random() * 100000000 ) );
         return num;
       }

    darAlta(codigoPaciente){
        for(let i=0;i<this.pacientes.length;i++){
            if(codigoPaciente == this.pacientes[i].DNI){
                this.pacientes.splice(i,1);
            }
        }
    }
}

class paciente{
    constructor(DNI, nombre, enfermedad){
        this.DNI= DNI;
        this.nombre= nombre;
        this.enfermedad= enfermedad;
    }
}
//Ejemplos
//Ej
var hospital1 = new hospital('Vinalopó', 'Elche', 3);
console.log('Hay: '+hospital1.pacientes.length+' pacientes en el hospital.');

var paciente1 = new paciente(20917649, 'Jem', 'Anginas');
hospital1.addPacienteObjeto(paciente1);
console.log('Hay: '+hospital1.pacientes.length+' pacientes en el hospital.');

hospital1.addPacienteNuevo(45851254,'Jose', 'Apendicitis');
console.log('Hay: '+hospital1.pacientes.length+' pacientes en el hospital.');

hospital1.darAlta(20917649);
console.log('Hay: '+hospital1.pacientes.length+' pacientes en el hospital.');

hospital1.darAlta(45851254);
console.log('Hay: '+hospital1.pacientes.length+' pacientes en el hospital.');