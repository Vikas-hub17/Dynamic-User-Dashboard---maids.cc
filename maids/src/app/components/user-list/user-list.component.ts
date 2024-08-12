import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loading: boolean = false;

loadUsers(): void {
  this.loading = true;
  this.userService.getUsers(this.currentPage).subscribe((response) => {
    this.users = response.data;
    this.loading = false;
  });
}
  
  onPaginateChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.loadUsers();
  }
}
