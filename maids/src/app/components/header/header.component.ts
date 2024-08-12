import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchId: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchId) {
      this.router.navigate(['/user', this.searchId]);
    }
  }
}
