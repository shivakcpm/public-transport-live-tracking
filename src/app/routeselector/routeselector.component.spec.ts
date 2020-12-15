import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteselectorComponent } from './routeselector.component';

describe('RouteselectorComponent', () => {
  let component: RouteselectorComponent;
  let fixture: ComponentFixture<RouteselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
