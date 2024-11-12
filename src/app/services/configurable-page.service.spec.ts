import { TestBed } from '@angular/core/testing';

import { ConfigurablePageService } from './configurable-page.service';

describe('ConfigurablePageService', () => {
  let service: ConfigurablePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurablePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
