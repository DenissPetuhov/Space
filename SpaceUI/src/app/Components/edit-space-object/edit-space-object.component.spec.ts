import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpaceObjectComponent } from './edit-space-object.component';

describe('EditSpaceObjectComponent', () => {
  let component: EditSpaceObjectComponent;
  let fixture: ComponentFixture<EditSpaceObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpaceObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSpaceObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
