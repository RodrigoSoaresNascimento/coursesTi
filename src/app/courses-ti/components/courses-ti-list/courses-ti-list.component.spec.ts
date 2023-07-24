import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTiListComponent } from './courses-ti-list.component';

describe('CoursesTiListComponent', () => {
  let component: CoursesTiListComponent;
  let fixture: ComponentFixture<CoursesTiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesTiListComponent]
    });
    fixture = TestBed.createComponent(CoursesTiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
