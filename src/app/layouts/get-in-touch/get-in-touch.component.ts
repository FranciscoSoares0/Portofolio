import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  imports: [],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css'
})
export class GetInTouchComponent {
  year = signal<number>(new Date().getFullYear());
}
