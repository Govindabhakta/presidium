import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackroomComponent } from './backroom.component';

describe('BackroomComponent', () => {
  let component: BackroomComponent;
  let fixture: ComponentFixture<BackroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
