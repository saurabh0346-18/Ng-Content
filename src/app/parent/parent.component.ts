import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: false
})
export class ParentComponent {
  showContent = true;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
