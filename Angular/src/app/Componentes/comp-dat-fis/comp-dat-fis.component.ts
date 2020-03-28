import { Component, OnInit } from '@angular/core';
import { Respuesta } from "../../Entidades/respuesta";
import { DatosFisicos } from "../../Entidades/datosFisicos";
import { ServDatFisService } from 'src/app/Servicios/serv-dat-fis.service';
import { Router } from '@angular/router';
import { ConsDatFisService } from 'src/app/Servicios/cons-dat-fis.service';


const ELEMENT_DATA: DatosFisicos[] = [
  {idJugador: 1, peso: 'Hydrogen', altura: 'Hydrogen', comentario: 'H'},
  {idJugador: 1, peso: 'Hydrogen', altura: 'Hydrogen', comentario: 'H'},
  {idJugador: 1, peso: 'Hydrogen', altura: 'Hydrogen', comentario: 'H'},
  {idJugador: 1, peso: 'Hydrogen', altura: 'Hydrogen', comentario: 'H'},
  {idJugador: 1, peso: 'Hydrogen', altura: 'Hydrogen', comentario: 'H'}
];
@Component({
  selector: 'app-comp-dat-fis',
  templateUrl: './comp-dat-fis.component.html',
  styleUrls: ['./comp-dat-fis.component.scss']
})
export class CompDatFisComponent implements OnInit {
  respuesta: Respuesta;

  datos: DatosFisicos;
  
  constructor(private servicioAct: ServDatFisService, private servicioCons: ConsDatFisService, private router: Router) { }
  
  ngOnInit(): void {
    this.datos = this.servicioCons.datos;
  }

  actualizar() {
    const x: Promise<Respuesta> =  this.servicioAct.guardar(this.datos.idJugador, this.datos.peso, this.datos.altura, this.datos.comentario);

    x.then((value: Respuesta) => {
      this.respuesta = value;
      if  (this.respuesta.codigo === 0){
        alert ('Datos guardados correctamente');
      }else {
        alert ('Error al guardar datos');
      }
      this.router.navigate(['']);
    });
  }
  salir(){
    this.router.navigate(['']);
  }
}
