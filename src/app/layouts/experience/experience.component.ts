import { Component, inject, OnInit } from '@angular/core';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ExperiencesService } from '../../services/experiences.service';
import { ExperienceSkeletonComponent } from './experience-skeleton/experience-skeleton.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent,ExperienceSkeletonComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{

  private readonly experiencesService = inject(ExperiencesService);

  readonly experiences = this.experiencesService.experiencesSig;
  readonly loadingSig = this.experiencesService.loadingSig;

  ngOnInit(): void {
    this.experiencesService.getExperiences();
  }

}
