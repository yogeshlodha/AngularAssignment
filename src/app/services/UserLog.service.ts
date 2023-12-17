import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// User Log Service.
export class UserLogService {
  constructor() { }

  // Display user log message.
  LogMyDetail(msg: any) { console.log(msg); }
}
