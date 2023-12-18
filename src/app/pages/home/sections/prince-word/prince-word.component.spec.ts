import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinceWordComponent } from './prince-word.component';

describe('PrinceWordComponent', () => {
  let component: PrinceWordComponent;
  let fixture: ComponentFixture<PrinceWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinceWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinceWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
