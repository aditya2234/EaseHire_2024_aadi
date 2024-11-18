import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericNavbarComponent } from './generic-navbar.component';

describe('GenericNavbarComponent', () => {
  let component: GenericNavbarComponent;
  let fixture: ComponentFixture<GenericNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
