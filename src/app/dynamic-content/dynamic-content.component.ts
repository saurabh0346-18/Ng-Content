import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss'],
  standalone: false
})
export class DynamicContentComponent {
  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulates a 3-second loading delay
  }
}
