import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeSectionComponent } from './committee-section.component';

describe('CommitteeSectionComponent', () => {
  let component: CommitteeSectionComponent;
  let fixture: ComponentFixture<CommitteeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
