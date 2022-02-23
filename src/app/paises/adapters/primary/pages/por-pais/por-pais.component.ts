import { Component, OnInit } from '@angular/core';
import { PaisesPrimaryInterface } from '../../../../core/ports/primary/paises.primary.interface';
import { PaisModel } from '../../../../core/domain/paisModel';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {
  public termino: string = '';
  public hayError: boolean = false;
  public paisesInPadre: PaisModel[] = [];

  constructor(private paisService: PaisesPrimaryInterface) {}

  ngOnInit(): void {}

  buscarInPadre(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(termino).subscribe(
      (res) => {
        console.log(res);
        this.paisesInPadre = res;
      },
      (err) => {
        console.log('err :>> ', err);
        this.hayError = true;
        this.paisesInPadre = [];
      }
    );
  }

  sugerencias(temino: string) {
    this.hayError = false;
    // TODO crear sugerencias
  }
}
