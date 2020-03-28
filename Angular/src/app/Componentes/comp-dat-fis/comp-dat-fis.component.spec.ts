import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDatFisComponent } from './comp-dat-fis.component';

describe('CompDatFisComponent', () => {
  let component: CompDatFisComponent;
  let fixture: ComponentFixture<CompDatFisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDatFisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDatFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
