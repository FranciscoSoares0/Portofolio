import { Component, inject, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../../interfaces/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  private readonly projectsService = inject(ProjectsService);

  readonly projects = this.projectsService.projectsSig;

  ngOnInit(): void {
    this.projectsService.getProjects();
  }

}
