import { AccountServiceService } from './../shared/account-service.service';
import { logservice } from './../shared/logservice.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  
  constructor(private logservice: logservice, private accountService: AccountServiceService) {
     this.accountService.statusUpdated.subscribe(
      (status:string) => alert('Status Name is : ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
