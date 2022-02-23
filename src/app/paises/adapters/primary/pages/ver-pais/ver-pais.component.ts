import { Component, OnInit } from '@angular/core';
import { PaisModel } from '../../../../core/domain/paisModel';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesPrimaryInterface } from '../../../../core/ports/primary/paises.primary.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  public pais!: PaisModel[];

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisService: PaisesPrimaryInterface,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap(({ idPais }) => this.paisService.getPaisPorAlpha(idPais)),
        tap(console.log)
      ).subscribe(
        (resPais) => (this.pais = resPais)
      );
  }

  goBack() {
    this.router.navigate(['/'])
  }
}
