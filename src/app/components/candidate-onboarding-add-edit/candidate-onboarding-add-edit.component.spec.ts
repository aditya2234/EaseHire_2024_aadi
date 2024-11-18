import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateOnboardingAddEditComponent } from './candidate-onboarding-add-edit.component';

describe('CandidateOnboardingAddEditComponent', () => {
  let component: CandidateOnboardingAddEditComponent;
  let fixture: ComponentFixture<CandidateOnboardingAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateOnboardingAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateOnboardingAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
