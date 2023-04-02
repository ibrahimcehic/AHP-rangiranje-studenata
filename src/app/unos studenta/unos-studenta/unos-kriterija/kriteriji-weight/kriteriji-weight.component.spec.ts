import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KriterijiWeightComponent } from './kriteriji-weight.component';

describe('KriterijiWeightComponent', () => {
  let component: KriterijiWeightComponent;
  let fixture: ComponentFixture<KriterijiWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KriterijiWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KriterijiWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
