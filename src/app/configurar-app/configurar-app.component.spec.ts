import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarAppComponent } from './configurar-app.component';

describe('ConfigurarAppComponent', () => {
  let component: ConfigurarAppComponent;
  let fixture: ComponentFixture<ConfigurarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurarAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
