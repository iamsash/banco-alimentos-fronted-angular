import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribuciones } from './distribuciones';

describe('Distribuciones', () => {
  let component: Distribuciones;
  let fixture: ComponentFixture<Distribuciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Distribuciones],
    }).compileComponents();

    fixture = TestBed.createComponent(Distribuciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
