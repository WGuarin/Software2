import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosFisicos } from '../Entidades/datosFisicos';
import { Respuesta } from '../Entidades/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ConsDatFisService {
  servicioConsultarDatFis: string = 'http://localhost:8080/HVBasket/app/datos/consultUs';
  respuesta: Respuesta;

  datos: DatosFisicos;
  
  constructor(private http: HttpClient) { }

  consultar(idJugador: number): Promise<Respuesta> {
    const info = {
      "idJugador":idJugador,
      "peso":"",
      "altura":"",
      "comentario":""
    }
    return this.http.post<Respuesta>(`${this.servicioConsultarDatFis}`, info).toPromise();
  }
}
