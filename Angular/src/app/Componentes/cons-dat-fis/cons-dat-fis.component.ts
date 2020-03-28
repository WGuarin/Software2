import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/Entidades/respuesta';
import { ServDatFisService } from 'src/app/Servicios/serv-dat-fis.service';
import { Router } from '@angular/router';
import { ConsDatFisService } from 'src/app/Servicios/cons-dat-fis.service';

@Component({
  selector: 'app-cons-dat-fis',
  templateUrl: './cons-dat-fis.component.html',
  styleUrls: ['./cons-dat-fis.component.scss']
})
export class ConsDatFisComponent implements OnInit {

  idJugador: number;
  respuesta: Respuesta;
  constructor(private servicio: ConsDatFisService, private router: Router) { }

  ngOnInit(): void {
  }

  consultar() {

    if (this.idJugador === undefined){
      alert('El campo esta vacio');
      return ;
    }else{
      const x: Promise<Respuesta> =  this.servicio.consultar(this.idJugador);
      x.then((value: Respuesta) => {
        this.respuesta = value;
        if  (this.respuesta.codigo === 0){
          const info = {
            "idJugador":this.idJugador,
            "peso":"",
            "altura":"",
            "comentario":""
          }
          this.servicio.datos = info;
          this.router.navigate(['DatFisicAct']);
        }else {
          alert ('El usuario no existe');
        }
  
      });
    }
    return ;
  }
}
