import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangiranjeStudenataComponent } from './rangiranje-studenata.component';

describe('RangiranjeStudenataComponent', () => {
  let component: RangiranjeStudenataComponent;
  let fixture: ComponentFixture<RangiranjeStudenataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangiranjeStudenataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangiranjeStudenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
