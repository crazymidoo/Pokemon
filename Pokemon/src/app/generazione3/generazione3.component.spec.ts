import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generazione3Component } from './generazione3.component';

describe('Generazione3Component', () => {
  let component: Generazione3Component;
  let fixture: ComponentFixture<Generazione3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generazione3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generazione3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
