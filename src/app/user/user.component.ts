import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../storage/dummy-users';
import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;

  //  @Output() select = new EventEmitter();
  select = output<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  constructor() {}

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
