import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaStudenataComponent } from './lista-studenata.component';

describe('ListaStudenataComponent', () => {
  let component: ListaStudenataComponent;
  let fixture: ComponentFixture<ListaStudenataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaStudenataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaStudenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
