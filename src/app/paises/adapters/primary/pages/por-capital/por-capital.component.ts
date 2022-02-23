import { Component, OnInit } from '@angular/core';
import { PaisesPrimaryInterface } from '../../../../core/ports/primary/paises.primary.interface';
import { PaisModel } from '../../../../core/domain/paisModel';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  public termino: string = '';
  public hayError: boolean = false;
  public paisesInPadre: PaisModel[] = [];

  constructor(private paisService: PaisesPrimaryInterface) {}

  ngOnInit(): void {}

  buscarInPadre(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapital(termino).subscribe(
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

  // sugerencias(temino: string) {
  //   this.hayError = false;
  //   // TODO crear sugerencias
  // }
}
