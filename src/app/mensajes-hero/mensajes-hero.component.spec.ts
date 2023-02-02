import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesHeroComponent } from './mensajes-hero.component';

describe('MensajesHeroComponent', () => {
  let component: MensajesHeroComponent;
  let fixture: ComponentFixture<MensajesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
