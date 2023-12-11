import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsListComponent } from './view-news-list.component';

describe('ViewNewsListComponent', () => {
  let component: ViewNewsListComponent;
  let fixture: ComponentFixture<ViewNewsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewNewsListComponent]
    });
    fixture = TestBed.createComponent(ViewNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
