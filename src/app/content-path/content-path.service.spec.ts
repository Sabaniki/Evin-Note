import { TestBed } from '@angular/core/testing';

import { ContentPathService } from './content-path.service';

describe('ContentPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentPathService = TestBed.get(ContentPathService);
    expect(service).toBeTruthy();
  });
});
