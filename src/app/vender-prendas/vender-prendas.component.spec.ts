import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderPrendasComponent } from './vender-prendas.component';

describe('VenderPrendasComponent', () => {
  let component: VenderPrendasComponent;
  let fixture: ComponentFixture<VenderPrendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VenderPrendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderPrendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
