import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styleUrls: ['./input-pais.component.css'],
})
export class InputPaisComponent implements OnInit {
  @Output() onSearchPaisInHijo: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input('dataPlaceholder') placeholder: string = '';

  public buscarForm!: FormGroup;
  public termino: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.buscarForm = this.fb.group({
      buscar: [null, Validators.required],
   });

  }

  buscarInHijo() {
    this.onSearchPaisInHijo.emit(this.buscarForm.get('buscar')!.value);
  }
}
