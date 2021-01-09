
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {


    let users = [
      { id: 1, firstName: 'salah', lastName: 'ben ali', email: 'salah@gmail.com', mobile: '21657199', salary: '200.0000' },
      { id: 2, firstName: 'youssef', lastName: 'hamza', email: 'hamza@gmail.com', mobile: '23654212', salary: '100.0000' },
      { id: 3, firstName: 'Mohamed', lastName: 'ben yahya', email: 'mohamed@gmail.com', mobile: '23695847', salary: '1100.0000' },
      { id: 4, firstName: 'ahmed', lastName: 'ben ali', email: 'ahmed@gmail.com',mobile: '25451875', salary: '1200.0000' }
    ];


    return { users };
  }
}

