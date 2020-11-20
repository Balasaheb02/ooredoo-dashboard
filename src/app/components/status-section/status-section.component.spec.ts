import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSectionComponent } from './status-section.component';

describe('StatusSectionComponent', () => {
  let component: StatusSectionComponent;
  let fixture: ComponentFixture<StatusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
