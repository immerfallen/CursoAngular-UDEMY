import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users.list';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  usersList: IUser[] = UsersList;

  onUserSelected(element : IUser ){
    console.log(element);
  }
}
