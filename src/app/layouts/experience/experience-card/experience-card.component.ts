import { Component, input } from '@angular/core';
import { Experience } from '../../../interfaces/experience';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {

  experience = input<Experience>();

}
