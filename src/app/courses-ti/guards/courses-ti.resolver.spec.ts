import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { CoursesTi } from '../model/courses-ti';
import { coursesTiResolver } from './courses-ti.resolver';

describe('coursesTiResolver', () => {
  const executeResolver: ResolveFn<CoursesTi> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => coursesTiResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
