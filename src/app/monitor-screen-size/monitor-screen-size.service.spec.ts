import { TestBed } from '@angular/core/testing';

import { MonitorScreenSizeService } from './monitor-screen-size.service';

describe('MonitorScreenSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonitorScreenSizeService = TestBed.get(MonitorScreenSizeService);
    expect(service).toBeTruthy();
  });
});
