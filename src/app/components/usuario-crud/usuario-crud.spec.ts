import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { UsuarioCrudComponent } from './usuario-crud';

describe('UsuarioCrudComponent', () => {
  let component: UsuarioCrudComponent;
  let fixture: ComponentFixture<UsuarioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCrudComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});