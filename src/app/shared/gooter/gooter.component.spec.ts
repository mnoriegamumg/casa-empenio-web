import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooterComponent } from './gooter.component';

describe('GooterComponent', () => {
  let component: GooterComponent;
  let fixture: ComponentFixture<GooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
