import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionImpuestos } from './donacion-impuestos';

describe('DonacionImpuestos', () => {
  let component: DonacionImpuestos;
  let fixture: ComponentFixture<DonacionImpuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonacionImpuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(DonacionImpuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
