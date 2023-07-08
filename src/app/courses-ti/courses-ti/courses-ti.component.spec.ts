import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTiComponent } from './courses-ti.component';

describe('CoursesTiComponent', () => {
  let component: CoursesTiComponent;
  let fixture: ComponentFixture<CoursesTiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesTiComponent]
    });
    fixture = TestBed.createComponent(CoursesTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
