import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosStudentaComponent } from './unos-studenta.component';

describe('UnosStudentaComponent', () => {
  let component: UnosStudentaComponent;
  let fixture: ComponentFixture<UnosStudentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnosStudentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosStudentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
