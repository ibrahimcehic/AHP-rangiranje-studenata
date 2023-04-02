import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosKriterijaComponent } from './unos-kriterija.component';

describe('UnosKriterijaComponent', () => {
  let component: UnosKriterijaComponent;
  let fixture: ComponentFixture<UnosKriterijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosKriterijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosKriterijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
