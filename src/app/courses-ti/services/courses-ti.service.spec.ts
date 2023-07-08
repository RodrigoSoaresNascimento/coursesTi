import { TestBed } from '@angular/core/testing';

import { CoursesTiService } from './courses-ti.service';

describe('CoursesTiService', () => {
  let service: CoursesTiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesTiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
