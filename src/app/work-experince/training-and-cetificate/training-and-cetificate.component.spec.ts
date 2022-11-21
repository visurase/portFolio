import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndCetificateComponent } from './training-and-cetificate.component';

describe('TrainingAndCetificateComponent', () => {
  let component: TrainingAndCetificateComponent;
  let fixture: ComponentFixture<TrainingAndCetificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingAndCetificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAndCetificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
