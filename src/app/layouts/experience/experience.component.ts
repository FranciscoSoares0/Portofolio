import { Component, inject, OnInit } from '@angular/core';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { Experience } from '../../interfaces/experience';
import { ExperiencesService } from '../../services/experiences.service';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{

  private readonly experiencesService = inject(ExperiencesService);

  readonly experiences = this.experiencesService.experiencesSig;

  ngOnInit(): void {
    this.experiencesService.getExperiences();
  }

}
