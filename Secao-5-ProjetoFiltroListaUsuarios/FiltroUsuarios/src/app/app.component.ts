import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  showHeaderTable: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.showHeaderTable = true;
    }, 3);;
  }

  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails = false;  

  onUserSelected(user:IUser){    
    this.userSelected = user;
    this.showUserDetails = true;
  }

  }

