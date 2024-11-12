import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablePageComponent } from './configurable-page.component';

describe('ConfigurablePageComponent', () => {
  let component: ConfigurablePageComponent;
  let fixture: ComponentFixture<ConfigurablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
