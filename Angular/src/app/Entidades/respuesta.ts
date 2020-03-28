import { DatosFisicos } from './datosFisicos';

export interface Respuesta {
    codigo: number;
    mensajeE: string;

    datos: DatosFisicos;
}
