import { Component } from '@angular/core';
// for older versions
// import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './storage/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent/*, NgFor, NgIf*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)!;
  }


  onSelectedUser(id: string) {
    console.log(`Selected user with id ${ id}`);
    this.selectedUserId = id;
  }
}
