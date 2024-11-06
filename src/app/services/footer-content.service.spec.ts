import { TestBed } from '@angular/core/testing';

import { FooterContentService } from './footer-content.service';

describe('FooterContentService', () => {
  let service: FooterContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
