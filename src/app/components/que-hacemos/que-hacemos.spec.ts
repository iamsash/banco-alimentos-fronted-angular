import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueHacemos } from './que-hacemos';

describe('QueHacemos', () => {
  let component: QueHacemos;
  let fixture: ComponentFixture<QueHacemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueHacemos],
    }).compileComponents();

    fixture = TestBed.createComponent(QueHacemos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
