import { TestBed } from '@angular/core/testing';

import { CrudInicioService } from './crud-inicio.service';

describe('CrudInicioService', () => {
  let service: CrudInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
