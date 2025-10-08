import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generazione5Component } from './generazione5.component';

describe('Generazione5Component', () => {
  let component: Generazione5Component;
  let fixture: ComponentFixture<Generazione5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generazione5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generazione5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
