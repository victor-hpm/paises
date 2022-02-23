import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { InputPaisComponent } from './components/input-pais/input-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesPrimaryInterface } from '../../core/ports/primary/paises.primary.interface';
import { PaisesUsecase } from '../../core/usecase/paises.usecase';
import { PaisesSecondaryInterface } from '../../core/ports/secondary/paises.secondary.interface';
import { PaisService } from '../secondary/services/pais.service';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';


@NgModule({
  declarations: [
    TablaPaisesComponent,
    InputPaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: PaisesPrimaryInterface, useClass: PaisesUsecase},
    { provide: PaisesSecondaryInterface, useClass: PaisService},
  ]
})
export class PaisesModule { }
