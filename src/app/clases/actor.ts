export class Actor {

    id:number;
    nombre:string;
    apellido:string;
    sexo:string;
    fechaNacimiento:string;
    foto:string='https://image.freepik.com/vector-gratis/actor-sosteniendo-icono-dibujos-animados-estrella-trofeo_24908-10408.jpg';
    paisDeOrigen:string;


    constructor(id?:number,nombre?:string,apellido?:string,sexo?:string,fechaNacimiento?:string,foto?:string,paisDeOrigen?:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.fechaNacimiento=fechaNacimiento;
        this.foto=foto;
        this.paisDeOrigen=paisDeOrigen;

    }



}
