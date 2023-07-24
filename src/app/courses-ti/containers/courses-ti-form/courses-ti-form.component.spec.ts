import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTiFormComponent } from './courses-ti-form.component';

describe('CoursesTiFormComponent', () => {
  let component: CoursesTiFormComponent;
  let fixture: ComponentFixture<CoursesTiFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesTiFormComponent]
    });
    fixture = TestBed.createComponent(CoursesTiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
