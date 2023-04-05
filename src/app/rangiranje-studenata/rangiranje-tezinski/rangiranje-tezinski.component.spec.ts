import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangiranjeTezinskiComponent } from './rangiranje-tezinski.component';

describe('RangiranjeTezinskiComponent', () => {
  let component: RangiranjeTezinskiComponent;
  let fixture: ComponentFixture<RangiranjeTezinskiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangiranjeTezinskiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangiranjeTezinskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
