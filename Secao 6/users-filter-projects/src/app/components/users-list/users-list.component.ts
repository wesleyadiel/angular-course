import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true }) usersList: IUser[] = [];
  @Output('userSelected') userSelectedEmmit = new EventEmitter<IUser>();

  onSelectUser(user: IUser): void {
    this.userSelectedEmmit.emit(user);
  }
}
