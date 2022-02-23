import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  public regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public regionActiva: string = '';

  constructor() {}

  ngOnInit(): void {}

  getClasesCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    console.log('region :>> ', region);
    this.regionActiva = region;
    // TODO: hacer el llamado al servicio
  }
}
