/* ----- CLASE ESTUDIANTE ----- */
class Alumno {

    /* ATRIBUTOS */
    private nombre : string;
    private apellido : string;
    private nota : number;
    
    /* CONSTRUCTOR */
    public constructor (parNombre : string, parApellido : string, parNota : number) {
        this.nombre = parNombre;
        this.apellido = parApellido;
        this.nota = parNota;
    }

    /* SET */
    public setNombre (parNombre : string) {
            this.nombre = parNombre;
    }

    public setApellido (parApellido : string) {
        this.apellido = parApellido;
    }

    public setNota (parNota : number) {
        this.nota = parNota;
    }

    /* GET */
    public getNombre () : string {
        return this.nombre;
    }

    public getApellido () : string {
        return this.apellido;
    }

    public getNota () : number {
        return this.nota;
    }

    public estaAprobado () : boolean {
        if (this.nota > 7) {
            return true;
        } else {
            return false;
        }
    }
}

/* ----- CLASE ESCUELA ----- */
class Escuela {
    
    /* ATRIBUTOS */
    private nombre : string;
    private listadoAlumnos : Alumno[];
    private listadoProfesores : Profesor[];
        
    /* CONSTRUCTOR */
    public constructor (parNombre : string, parListadoAlumnos : Alumno[], parListadoProfesores : Profesor[]) {
        this.nombre = parNombre;
        this.listadoAlumnos = parListadoAlumnos;
        this.listadoProfesores = parListadoProfesores;
    }

    /* SET */
    public setNombre (parNombre : string) {
            this.nombre = parNombre;
    }

    /* GET */
    public getNombre () : string {
        return this.nombre;
    }

    /* OTROS */
    public contratarProfesor (parProfesor : Profesor) {
        this.listadoProfesores.push(parProfesor);
        console.log("El Profesor ha sido contratado")
    }

    public despedirProfesor (parProfesor : Profesor) {
        for ( let i : number = 0; i < this.listadoProfesores.length; i++) {
            if (parProfesor.getApellido() === this.listadoProfesores[i].getApellido()) {
                this.listadoProfesores.splice(i,1);
                console.log("El Profesor ha sido despedido" + parProfesor.getApellido());
            } else {
                console.log("No se encontró el Profesor que se desea despedir");
            }
        }
    }

    public matricularAlumno (parAlumno : Alumno) {
        this.listadoAlumnos.push(parAlumno);
    }

    public removerAlumno (parAlumno : Alumno) {
        for (let i : number = 0; i < this.listadoAlumnos.length; i++) {
            if (parAlumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i,1);
            }
        }
    }
}

/* ----- CLASE PROFESOR ----- */
class Profesor {
    
    /* ATRIBUTOS */
    private nombre : string;
    private apellido : string;
    private listadoAlumnos : Alumno[];

    /* CONSTRUCTOR */
    public constructor (parNombre : string, parApellido : string, parListadoAlumnos : Alumno[]) {
        this.nombre = parNombre;
        this.apellido = parApellido;
        this.listadoAlumnos = parListadoAlumnos;
    }

    /* SET */
    public setNombre (parNombre : string) {
        this.nombre = parNombre;
    }

    public setApellido (parApellido : string) {
        this.apellido = parApellido;
    }

    /* GET */
    public getNombre () : string {
        return this.nombre;
    }

    public getApellido () : string {
        return this.apellido;
    }

    /* OTROS */
    public getListadoAlumnos () : Alumno[] {
        return this.listadoAlumnos;
    }

}

let alumno1 = new Alumno("Sergio", "Sanchez", 7);
let alumno2 = new Alumno("Juan", "Morales", 6);
let alumno3 = new Alumno("Pedro", "Perez", 8);
let alumno4 = new Alumno("Santiago", "Marini", 5);

let listadoDeAlumnos : Alumno[] = [alumno1, alumno2, alumno3];

let docente1 = new Profesor("Jose", "Parisi", listadoDeAlumnos);
let docente2 = new Profesor("Pepe", "Otero", listadoDeAlumnos);
let docente3 = new Profesor("Carlos", "Mamani", listadoDeAlumnos);

let listadoDeProfesores : Profesor[] = [docente1, docente2, docente3];

let establecimientoEducativo : Escuela = new Escuela("Escuela 13", listadoDeAlumnos, listadoDeProfesores);

establecimientoEducativo.despedirProfesor(docente2);

let alumno5 = new Alumno("Jacinto", "Morinigo", 9);

establecimientoEducativo.matricularAlumno(alumno5);