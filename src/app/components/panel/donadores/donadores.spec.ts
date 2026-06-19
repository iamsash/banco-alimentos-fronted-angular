import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donadores } from './donadores';

describe('Donadores', () => {
  let component: Donadores;
  let fixture: ComponentFixture<Donadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donadores],
    }).compileComponents();

    fixture = TestBed.createComponent(Donadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
