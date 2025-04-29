import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private readonly http = inject(HttpClient);
  private readonly toastr = inject(ToastrService);

  experiencesSig = signal<Array<Experience>>([]);
  loadingSig = signal<boolean>(true);

  getExperiences(): void {
    this.http.get<Array<Experience>>('/experiences').subscribe({
      next: (experiences) => {
        const sorted = experiences.sort((a, b) =>
          new Date(b.dates.split(" ")[0]).getTime() - new Date(a.dates.split(" ")[0]).getTime()
        );
        this.experiencesSig.set(sorted);
        this.loadingSig.set(false);
      },
      error: (error) => {
        this.toastr.error("Try again later","Failed to fetch experiences");
        this.loadingSig.set(false);
      }
    });
  }
}
