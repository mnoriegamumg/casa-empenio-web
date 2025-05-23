import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuadorProductosComponent } from './valuador-productos.component';

describe('ValuadorProductosComponent', () => {
  let component: ValuadorProductosComponent;
  let fixture: ComponentFixture<ValuadorProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValuadorProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuadorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
