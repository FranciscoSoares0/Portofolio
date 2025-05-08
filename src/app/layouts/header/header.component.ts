import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports:[CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  currentSection = signal<string>('about');
  sections = signal<Array<string>>(['about', 'experience', 'projects']);
  mainElement!: HTMLElement;

  ngAfterViewInit() {
    this.mainElement = document.querySelector('main') as HTMLElement;
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const mainTop = this.mainElement.offsetTop;
    let activeSection = '';

    this.sections().forEach(id => {
      const sectionEl = document.getElementById(id);
      if (sectionEl) {
        const sectionTop = sectionEl.offsetTop;
        const sectionHeight = sectionEl.offsetHeight;

        if (window.scrollY + 100 >= sectionTop && window.scrollY + 100 < sectionTop + sectionHeight) {
          activeSection = id;
        }
      }
    });

    if (activeSection) {
      this.currentSection.set(activeSection)
    }
  }

  activeSection(): string {
    return this.currentSection();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll.bind(this)); // Clean up the scroll event listener
  }
}
