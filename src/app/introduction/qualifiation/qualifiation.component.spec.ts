import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiationComponent } from './qualifiation.component';

describe('QualifiationComponent', () => {
  let component: QualifiationComponent;
  let fixture: ComponentFixture<QualifiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifiationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
