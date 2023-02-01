import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCaracteristicasComponent } from './hero-caracteristicas.component';

describe('HeroCaracteristicasComponent', () => {
  let component: HeroCaracteristicasComponent;
  let fixture: ComponentFixture<HeroCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCaracteristicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
