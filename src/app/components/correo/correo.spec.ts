import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correo } from './correo';

describe('Correo', () => {
  let component: Correo;
  let fixture: ComponentFixture<Correo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Correo],
    }).compileComponents();

    fixture = TestBed.createComponent(Correo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
