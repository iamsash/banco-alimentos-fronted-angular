import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Necesitamos proveer HttpClient para que el test no falle
      providers: [provideHttpClient()] 
    });
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});