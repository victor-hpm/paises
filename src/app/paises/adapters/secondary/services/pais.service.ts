import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisesSecondaryInterface } from 'src/app/paises/core/ports/secondary/paises.secondary.interface';
import { PaisModel } from '../../../core/domain/paisModel';
import { PaisEntity } from '../dtos/paisEntity';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PaisService extends PaisesSecondaryInterface {
  private apiUrl: string = environment.apiURL;


  constructor(private http: HttpClient) {
    super()
  }

  buscarPais(termino: string): Observable<PaisModel[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<PaisEntity[]>(url);
  }

  buscarCapital(termino: string): Observable<PaisModel[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisEntity[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<PaisModel> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<PaisEntity>(url);
  }
}
