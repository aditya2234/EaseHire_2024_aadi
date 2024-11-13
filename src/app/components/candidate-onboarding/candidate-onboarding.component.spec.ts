import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateOnboardingComponent } from './candidate-onboarding.component';

describe('CandidateOnboardingComponent', () => {
  let component: CandidateOnboardingComponent;
  let fixture: ComponentFixture<CandidateOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
