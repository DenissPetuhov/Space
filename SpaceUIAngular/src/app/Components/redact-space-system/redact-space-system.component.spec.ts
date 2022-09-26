import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactSpaceSystemComponent } from './redact-space-system.component';

describe('RedactSpaceSystemComponent', () => {
  let component: RedactSpaceSystemComponent;
  let fixture: ComponentFixture<RedactSpaceSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactSpaceSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedactSpaceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
