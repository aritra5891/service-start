import { logservice } from './logservice.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountServiceService {
  account = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];

    constructor(private logservice: logservice) {}

    statusUpdated = new EventEmitter<string>();

    addAccount(name : string, status : string) {
      this.account.push({name:name, status:status});
      this.logservice.serviceLog(status);
    }

    changeStatus(id:number, status:string) {
      this.account[id].status = status;
      this.logservice.serviceLog(status);
    }
}
