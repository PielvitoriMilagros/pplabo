import { Actor } from './actor';

export class Peliculas {

    id:string;
    nombre:string;
    tipo:string;
    fecha:number;
    cantidadPublico:number;
    foto='https://image.freepik.com/vector-gratis/icono-de-claqueta-plano_1063-38.jpg';
    actores:Actor[];


    constructor(id?:string,nombre?:string,tipo?:string,fecha?:number,cantidadPublico?:number,foto?:string,actores?:Actor[]) {
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fecha=fecha;
        this.cantidadPublico=cantidadPublico;
        this.foto=foto;
        this.actores=actores;
    }



}
