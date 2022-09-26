import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceOjbectComponent } from './space-ojbect.component';

describe('SpaceOjbectComponent', () => {
  let component: SpaceOjbectComponent;
  let fixture: ComponentFixture<SpaceOjbectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceOjbectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceOjbectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
