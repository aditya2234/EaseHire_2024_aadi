import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateOnboardingViewDeleteComponent } from './candidate-onboarding-view-delete.component';

describe('CandidateOnboardingViewDeleteComponent', () => {
  let component: CandidateOnboardingViewDeleteComponent;
  let fixture: ComponentFixture<CandidateOnboardingViewDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateOnboardingViewDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateOnboardingViewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
