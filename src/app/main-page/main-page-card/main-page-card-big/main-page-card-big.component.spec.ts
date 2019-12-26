import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCardBigComponent } from './main-page-card-big.component';

describe('MainPageCardComponent', () => {
  let component: MainPageCardBigComponent;
  let fixture: ComponentFixture<MainPageCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
