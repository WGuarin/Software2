import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompDatFisComponent } from './Componentes/comp-dat-fis/comp-dat-fis.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServDatFisService } from './Servicios/serv-dat-fis.service';
import { ConsDatFisComponent } from './Componentes/cons-dat-fis/cons-dat-fis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

const appRoutes: Routes = [
  {path: 'DatFisicAct', component: CompDatFisComponent},
  {path: 'ConsDatFis', component: ConsDatFisComponent},
  {path: '', component: ConsDatFisComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CompDatFisComponent,
    ConsDatFisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ServDatFisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
