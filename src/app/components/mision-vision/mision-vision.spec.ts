import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { MisionVisionComponent } from './mision-vision';

describe('MisionVisionComponent', () => {
  let component: MisionVisionComponent;
  let fixture: ComponentFixture<MisionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisionVisionComponent],
      // Agregamos esto porque MisionVision ahora renderiza tu CRUD que usa base de datos
      providers: [provideHttpClient()] 
    }).compileComponents();

    fixture = TestBed.createComponent(MisionVisionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});