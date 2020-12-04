import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingCardComponent } from './editing-card.component';

describe('EditingCardComponent', () => {
  let component: EditingCardComponent;
  let fixture: ComponentFixture<EditingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
