import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangiranjeJednakeVaznostiComponent } from './rangiranje-jednake-vaznosti.component';

describe('RangiranjeJednakeVaznostiComponent', () => {
  let component: RangiranjeJednakeVaznostiComponent;
  let fixture: ComponentFixture<RangiranjeJednakeVaznostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangiranjeJednakeVaznostiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangiranjeJednakeVaznostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
