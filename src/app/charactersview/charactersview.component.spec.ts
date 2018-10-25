import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersviewComponent } from './charactersview.component';

describe('CharactersviewComponent', () => {
  let component: CharactersviewComponent;
  let fixture: ComponentFixture<CharactersviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
