import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../Entidades/respuesta';
import { DatosFisicos } from '../Entidades/datosFisicos';

@Injectable({
  providedIn: 'root'
})
export class ServDatFisService {
  servicioGuardarDatFis: string = 'http://localhost:8080/HVBasket/app/datos/datosFisicos';

  constructor(private http: HttpClient) { }

  guardar(idJugador: number, peso: String, altura: String, comentario: String): Promise<Respuesta> {
    const info = {
      "idJugador":idJugador,
      "peso":peso,
      "altura":altura,
      "comentario":comentario
    }
    return this.http.post<Respuesta>(`${this.servicioGuardarDatFis}`, info).toPromise();
  }
}
