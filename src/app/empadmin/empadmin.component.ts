import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-empadmin',
  standalone: true,
  imports: [EmployeeComponent],
  templateUrl: './empadmin.component.html',
  styleUrl: './empadmin.component.css'
})
export class EmpadminComponent {
  // child to parent 
  Cdata: any;
  getData(val:any) {
    this.Cdata = val;
  }
}
