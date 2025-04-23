import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Experience } from '../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private readonly http = inject(HttpClient);

  experiencesSig = signal<Array<Experience>>([]);

  getExperiences(): void {
    this.http.get<Array<Experience>>('/experiences').subscribe((experiences) => {
      this.experiencesSig.set(experiences.sort((a, b) =>
        new Date(b.dates.split(" ")[0]).getTime() - new Date(a.dates.split(" ")[0]).getTime()
      ));
    });
  }
}
