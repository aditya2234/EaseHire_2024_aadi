import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersViewAllComponent } from './customers-view-all.component';

describe('CustomersViewAllComponent', () => {
  let component: CustomersViewAllComponent;
  let fixture: ComponentFixture<CustomersViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersViewAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
