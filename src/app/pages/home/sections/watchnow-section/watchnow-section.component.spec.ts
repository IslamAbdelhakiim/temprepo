import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchnowSectionComponent } from './watchnow-section.component';

describe('WatchnowSectionComponent', () => {
  let component: WatchnowSectionComponent;
  let fixture: ComponentFixture<WatchnowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchnowSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchnowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
