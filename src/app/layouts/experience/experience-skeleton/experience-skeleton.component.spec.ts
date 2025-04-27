import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSkeletonComponent } from './experience-skeleton.component';

describe('ExperienceSkeletonComponent', () => {
  let component: ExperienceSkeletonComponent;
  let fixture: ComponentFixture<ExperienceSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
