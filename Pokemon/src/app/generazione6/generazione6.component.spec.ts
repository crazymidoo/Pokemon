import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generazione6Component } from './generazione6.component';

describe('Generazione6Component', () => {
  let component: Generazione6Component;
  let fixture: ComponentFixture<Generazione6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generazione6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generazione6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
