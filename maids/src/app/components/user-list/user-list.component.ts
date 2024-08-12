import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserListComponent implements OnInit {
  user: any;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const userId = parseInt(idParam, 10); // Convert string to number
        this.loadUser(userId);
      } else {
        // Handle the case where 'id' is not provided or invalid
        console.error('User ID is not provided or invalid');
      }
    });
  }
  
  loadUser(id: number): void {
    this.loading = true;
    this.userService.getUserById(id).subscribe(response => {
      this.user = response.data;
      this.loading = false;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
