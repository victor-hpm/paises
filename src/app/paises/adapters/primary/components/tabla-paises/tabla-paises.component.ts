import { Component, Input, OnInit } from '@angular/core';
import { PaisModel } from '../../../../core/domain/paisModel';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
})
export class TablaPaisesComponent implements OnInit {
  @Input() paisesFromPadreToHijo: PaisModel[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('this.paisesFromPadreToHijo :>> ', this.paisesFromPadreToHijo);
  }
}
