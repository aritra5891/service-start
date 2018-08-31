import { Component, OnInit } from '@angular/core';

import { AccountServiceService } from './shared/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  accounts:{name:string, status:string}[] = [];

  constructor(private accountService : AccountServiceService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.account;  
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
