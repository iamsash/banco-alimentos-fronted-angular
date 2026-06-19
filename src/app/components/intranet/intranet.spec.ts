import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intranet } from './intranet';

describe('Intranet', () => {
  let component: Intranet;
  let fixture: ComponentFixture<Intranet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intranet],
    }).compileComponents();

    fixture = TestBed.createComponent(Intranet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
