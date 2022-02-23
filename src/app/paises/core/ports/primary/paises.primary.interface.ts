import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PaisModel } from '../../domain/paisModel';


@Injectable({
  providedIn: 'root'
})

export abstract class PaisesPrimaryInterface {

  abstract buscarPais(termino: string): Observable<PaisModel[]>;


  abstract buscarCapital(termino: string): Observable<PaisModel[]>;


  abstract getPaisPorAlpha(id: string): Observable<PaisModel>;

}