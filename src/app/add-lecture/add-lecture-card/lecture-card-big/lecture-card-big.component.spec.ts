import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureCardBigComponent } from './lecture-card-big.component';

describe('LectureCardBigComponent', () => {
  let component: LectureCardBigComponent;
  let fixture: ComponentFixture<LectureCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
