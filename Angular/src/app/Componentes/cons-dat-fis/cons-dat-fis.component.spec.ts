import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsDatFisComponent } from './cons-dat-fis.component';

describe('ConsDatFisComponent', () => {
  let component: ConsDatFisComponent;
  let fixture: ComponentFixture<ConsDatFisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsDatFisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsDatFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
