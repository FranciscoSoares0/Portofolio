import { Component, input } from '@angular/core';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  project = input<Project>();
  
}
