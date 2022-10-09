"use strict";

let fs = require("fs");//importa una libreria que da la funcionalidad de leer un archivo
let contenidoLibro1 = fs.readFileSync("./gestorLibros-Contenido.txt", "utf8");
let contenidoLibro2 = fs.readFileSync("./gestorLibros-Contenido.txt", "utf8");
let contenidoLibro3 = fs.readFileSync("./gestorLibros-Contenido.txt", "utf8");
let contenidoLibro4 = fs.readFileSync("./gestorLibros-Contenido.txt", "utf8");
let contenidoLibro5 = fs.readFileSync("./gestorLibros-Contenido.txt", "utf8");

export class Libro {
    private nombreLibro: string;
    private cantPagina: number;
    private autor: string;
    private editor: string;
    private edicion: string;
    private contenido: File;

    constructor(pNombreLibro: string, pCantPag: number, pAutor: string, pEditor: string, pEdicion: string, pContenido: File) {
        this.nombreLibro = pNombreLibro;
        this.cantPagina = pCantPag;
        this.autor = pAutor;
        this.editor = pEditor;
        this.edicion = pEdicion;
        this.contenido = pContenido;
    }

    public getContenidoLibro(): File {
        return this.contenido;
    }

    public setNombreLibro(pNombreLibro: string): void {
        this.nombreLibro = pNombreLibro;
    }

    public getNombreLibro(): string {
        return this.nombreLibro;
    }

    public setCantPagina(pCantPag: number): void {
        this.cantPagina = pCantPag;
    }

    public getCantPagina(): number {
        return this.cantPagina;
    }

    public setAutor(pAutor: string): void {
        this.autor = pAutor;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setEditor(pEditor: string): void {
        this.editor = pEditor;
    }

    public getEditor(): string {
        return this.editor;
    }

    public setEdicion(pEdicion: string): void {
        this.edicion = pEdicion;
    }

    public getEdicion(): string {
        return this.edicion;
    }
}

class Gestor {
    private listadoLibro: Libro[];

    constructor(pListado: Libro[]) {
        this.listadoLibro = pListado;
    }

    public ingresarLibro(pNombreLibro: Libro): void {
        this.listadoLibro.push(pNombreLibro);
        console.log("Se agregó el libro: " + pNombreLibro.getNombreLibro());
    }

    public borrarLibro(pLibro: Libro): void {
        let encontrado = false;
        for (let i = 0; (i < this.listadoLibro.length && !encontrado); i++) {
            if (pLibro.getNombreLibro() === this.listadoLibro[i].getNombreLibro()) {
                this.listadoLibro.splice(i, 1);
                console.log("Libro Borrado: " + pLibro.getNombreLibro());
                encontrado = true;
            }
        }
        if (!encontrado) {
            console.log("No se encontró el libro: " + pLibro.getNombreLibro());
        }
    }

    public modificarLibro(pNombreLibro: string, pCantPag: number, pAutor: string, pEditor: string, pEdicion: string): void {
        let encontrado = false;
        for (let i = 0; (i < this.listadoLibro.length && !encontrado); i++) {
            if (pNombreLibro === this.listadoLibro[i].getNombreLibro()) {
                this.listadoLibro[i].setNombreLibro(pNombreLibro);
                this.listadoLibro[i].setCantPagina(pCantPag);
                this.listadoLibro[i].setAutor(pAutor);
                this.listadoLibro[i].setEditor(pEditor);
                this.listadoLibro[i].setEdicion(pEdicion);

                console.log("Se modificó el libro: " + pNombreLibro);
            }
        }
        if (encontrado) {
            console.log("El libro " + pNombreLibro, " a modificar no se encontró");
        }
    }

    public consultarLibro(pLibro: Libro): void {
        let encontrado = false;
        for (let i = 0; (i < this.listadoLibro.length && !encontrado); i++) {
            if (pLibro.getNombreLibro() === this.listadoLibro[i].getNombreLibro()) {
                console.log("Libro Consultado: " + pLibro.getNombreLibro());
                encontrado = true;
            }
        }
        if (!encontrado) {
            console.log("No se encontró el libro consultado: " + pLibro.getNombreLibro());
        }
    }
}


let libro1 = new Libro("Caperucita Roja", 34, "Hermanos Grim", "Antártida", "Quinta", contenidoLibro1);
let libro2 = new Libro("A orilla del río", 64, "Jorge Gonzalez", "Alfaguara", "Segunda", contenidoLibro2);
let libro3 = new Libro("Penumbras", 84, "María Pía", "Libertadores", "Primera", contenidoLibro3);
let libro4 = new Libro("Matemática I", 102, "Cientificos Unidos", "Antártida", "Segunda", contenidoLibro4);
let libro5 = new Libro("Fisica I", 102, "Cientificos Unidos", "Antártida", "Tercera", contenidoLibro5);

let listado1: Libro[] = [libro1, libro2, libro3, libro4];

let editorAustral: Gestor = new Gestor(listado1);

console.log("------------------------------------------")
editorAustral.ingresarLibro(libro5);            //se ingresó el libro "Física I".
console.log("------------------------------------------")
console.log(listado1);                          //verifica si se incorporó el libro
console.log("------------------------------------------")
editorAustral.borrarLibro(libro2);              //se borró el libro "A orillas del río".
console.log("------------------------------------------")
console.log(listado1);                          //verifica si se borró el libro
console.log("------------------------------------------")
editorAustral.consultarLibro(libro3);
console.log("------------------------------------------")
console.log(listado1);
console.log("------------------------------------------")
editorAustral.modificarLibro("Caperucita Roja", 98, "Ana Kant", "Australis", "Segunda");
console.log("------------------------------------------")
console.log(listado1);                          //verifica si se modificó el libro

//console.log(libro1.getAutor());   // cuando la funcion tiene un return hay que mostrar con un console.log