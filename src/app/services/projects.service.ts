import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../interfaces/project';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly http = inject(HttpClient);

  projectsSig = signal<Array<Project>>([]);

  getProjects() : void {
    this.http.get<Array<Project>>('/projects').subscribe((projects) => {
      this.projectsSig.set(projects);
    });
  }

}
