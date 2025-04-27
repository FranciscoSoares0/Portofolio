import { Component, inject, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsService } from '../../services/projects.service';
import { ProjectsSkeletonComponent } from './projects-skeleton/projects-skeleton.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent,ProjectsSkeletonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  private readonly projectsService = inject(ProjectsService);

  readonly projects = this.projectsService.projectsSig;
  readonly loadingSig = this.projectsService.loadingSig;

  ngOnInit(): void {
    this.projectsService.getProjects();
  }

}
