import { TestBed } from '@angular/core/testing';

import { MaintainersService } from './maintainers.service';

describe('MaintainersService', () => {
  let service: MaintainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
