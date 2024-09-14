import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  stud = {
    name: 'Sandy',
    age: 21,
  };
  constructor() {}
  getStudData() {
    return this.stud;
  }
}
