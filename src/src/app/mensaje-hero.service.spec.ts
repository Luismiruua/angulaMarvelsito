import { TestBed } from '@angular/core/testing';

import { MensajeHeroService } from './service/mensaje-hero.service';

describe('MensajeHeroService', () => {
  let service: MensajeHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
