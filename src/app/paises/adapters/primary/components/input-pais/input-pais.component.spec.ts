import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPaisComponent } from './input-pais.component';

describe('InputPaisComponent', () => {
  let component: InputPaisComponent;
  let fixture: ComponentFixture<InputPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
