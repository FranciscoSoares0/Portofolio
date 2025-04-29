import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../interfaces/project';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly http = inject(HttpClient);
  private readonly toastr = inject(ToastrService);

  projectsSig = signal<Array<Project>>([]);
  loadingSig = signal<boolean>(true);

  getProjects() : void {
    this.http.get<Array<Project>>('/projects').subscribe({
      next: (projects) => {
        this.projectsSig.set(projects);
        this.loadingSig.set(false);
      },
      error: (error) => {
        this.toastr.error("Try again later","Failed to fetch projects");
        this.loadingSig.set(false);
      }
    });
  }

}
