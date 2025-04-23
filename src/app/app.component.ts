import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('glowCursor') glowCursor!: ElementRef;

  currentX = 0;
  currentY = 0;
  targetX = 0;
  targetY = 0;

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', (e) => {
      // Offset the cursor by half the size of the glow circle
      this.targetX = e.clientX - 300; // 600px / 2
      this.targetY = e.clientY - 300; // 600px / 2
    });

    this.animateCursor();
  }

  animateCursor(): void {
    const glow = this.glowCursor.nativeElement;

    const move = () => {
      this.currentX += (this.targetX - this.currentX) * 0.25;
      this.currentY += (this.targetY - this.currentY) * 0.25;

      glow.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;

      requestAnimationFrame(move);
    };

    move();
  }
}
