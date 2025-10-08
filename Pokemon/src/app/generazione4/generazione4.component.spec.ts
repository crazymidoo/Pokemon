import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generazione4Component } from './generazione4.component';

describe('Generazione4Component', () => {
  let component: Generazione4Component;
  let fixture: ComponentFixture<Generazione4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generazione4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generazione4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
