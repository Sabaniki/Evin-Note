import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCardSmallComponent } from './main-page-card-small.component';

describe('MainPageCardSmallComponent', () => {
  let component: MainPageCardSmallComponent;
  let fixture: ComponentFixture<MainPageCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
