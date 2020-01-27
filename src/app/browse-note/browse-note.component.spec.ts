import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseNoteComponent } from './browse-note.component';

describe('ReadNoteComponent', () => {
  let component: BrowseNoteComponent;
  let fixture: ComponentFixture<BrowseNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
