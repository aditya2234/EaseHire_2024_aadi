import { TestBed } from '@angular/core/testing';

import { CandidateOnboardingService } from './candidate-onboarding.service';

describe('CandidateOnboardingService', () => {
  let service: CandidateOnboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateOnboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
