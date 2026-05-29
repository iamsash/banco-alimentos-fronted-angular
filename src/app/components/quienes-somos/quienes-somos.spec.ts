import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuienesSomoscomponent } from './quienes-somos';

describe('QuienesSomoscomponent', () => {
  let component: QuienesSomoscomponent;
  let fixture: ComponentFixture<QuienesSomoscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuienesSomoscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuienesSomoscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



