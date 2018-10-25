import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesviewComponent } from './housesview.component';

describe('HousesviewComponent', () => {
  let component: HousesviewComponent;
  let fixture: ComponentFixture<HousesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
