import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisModel } from '../domain/paisModel';
import { PaisesPrimaryInterface } from '../ports/primary/paises.primary.interface';
import { PaisesSecondaryInterface } from '../ports/secondary/paises.secondary.interface';


@Injectable({
  providedIn: 'root'
})

export class PaisesUsecase extends PaisesPrimaryInterface {

  constructor(private secondary: PaisesSecondaryInterface) {
    super()
  }

  buscarPais(termino: string): Observable<PaisModel[]> {
    return this.secondary.buscarPais(termino);
  }
  buscarCapital(termino: string): Observable<PaisModel[]> {
    return this.secondary.buscarCapital(termino);
  }
  getPaisPorAlpha(id: string): Observable<PaisModel> {
    return this.secondary.getPaisPorAlpha(id);
  }
}