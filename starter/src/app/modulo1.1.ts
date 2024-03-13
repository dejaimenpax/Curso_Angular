/**
 * Strings
 * Boolean
 * Number
 * Array
 * Tuplas
 * Enums
 * Any
 * Void
 */

let nombre_variable: string = 'Nombre';

let edad: number = 25;

let lista: number[] = [1,2,3];
let lista2: Array<number> = [1,2,3]

let tupla: [string, number];
tupla = ['Jaime', 25];

enum Animales {Perro, Gato, Ballena};
let animal: Animales = Animales.Gato;

let cualquier: any = true; //acepta cualquier tipo de dato, util para librerias JS

let nada: void = undefined; //solo permite undefined

/*Clases*/
class NombreClase {
    private _propiedad: string; //lo de la barrabaja es para distinguir estos casos
    //a pesar de que existe el this. para diferenciar

    constructor(propiedad: string){ //constructor
        this._propiedad = propiedad;
    }

    get propiedad(): string {
        return this._propiedad;
    }

    set propiedad(propiedad: string){
        this._propiedad = propiedad;
    }

    printMsg(){
        return "Esta clase tiene:" + this._propiedad;
    }

}

/*Interfaces*/

interface LogInterface {
    msg: string; //siempre va a haber un mensaje
    date?: number; //decimos que no tienes porque implementar esta variable
}

function Logger(log: LogInterface) {
    console.log(log.msg);
}

/*Modulos y Namespace*/
//Hasta ahora JS no tenia un metodo de por si para importar paquetes
//Con TS ya puedes importar en el codigo

/*
import {Validator} from './path';

export class Validator {
    validate(n: number) : boolean {
        return n > 5;
    }
}
*/

namespace Validacion {
    export interface ValidadorNumero { //obliga a que la clase que implementa, implemente el metodo
        isValid(n: number): boolean;
    }

    //funciona como paquetes de java

    export class validacionLongitud implements ValidadorNumero { 
        isValid(n: number): boolean {
            return true;
        }
    }
}

let validador: Validacion.ValidadorNumero = new Validacion.validacionLongitud();



/*Genéricos*/
function compare<T>(arg1: T, arg2: T): T {
    return arg1 > arg2 ? arg1 : arg2;
}

//la diferencia de este con el anterior es que este
//solo va a trabajar con anys y dificulta obtener
//informacion sobre los datos
function compareAny(arg1: any, arg2: any): any {
    return arg1 > arg2 ? arg1 : arg2;
}


