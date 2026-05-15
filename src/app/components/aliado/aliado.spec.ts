import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aliado } from './aliado';

describe('Aliado', () => {
  let component: Aliado;
  let fixture: ComponentFixture<Aliado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aliado],
    }).compileComponents();

    fixture = TestBed.createComponent(Aliado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
