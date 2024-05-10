import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users.list';
import { IFilterOptions } from './interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  showHeaderTable: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
      this.showHeaderTable = true;
    }, 3);
  }

  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filter: IFilterOptions) {
    this.usersListFiltered = this.filterUsersList(filter, this.usersList);
  }

  filterUsersList(filter: IFilterOptions, list: IUser[]): IUser[]{
    let filteredList: IUser[] = [];
filteredList = this.filterUsersListByName(filter.name, list);
    return filteredList;
  }

  filterUsersListByName(name: string | undefined, list: IUser[]): IUser[]  {
    const NAME_NOT_TYPPED = name == undefined;

    if(NAME_NOT_TYPPED){
      return list;
    }

    const filteredList = list.filter((user)=> user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }

  
}
