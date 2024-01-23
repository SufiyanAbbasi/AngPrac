import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',

  // parent to child 
  inputs: ["Pdata"],

  // Child to Parent 
  outputs: ['childEvent']
})
export class EmployeeComponent {
  // parent to child 
  Pdata:any;



  // Child to Parent 
  childEvent = new EventEmitter();
  senddata(val: any) {
    this.childEvent.emit(val)
  }

}
