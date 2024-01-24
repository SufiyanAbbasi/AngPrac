import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
// import { ItemListComponent } from "./item-list/item-list.component";
// import { EmployeeComponent } from "./employee/employee.component";
// import { DirectivepracComponent } from "./directiveprac/directiveprac.component";


//here this cant be called you should provide a view providers in component decorartor
class abc {
  constructor() {
    console.log("abc constructor called")
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  viewProviders: [abc],
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'myapp';
  constructor(private abc: abc) {
    console.log("component construtor called")

  }
  //  @hostlistener is a method type decorator that declares a DOM event to listen for and provides a handler method to run when that event occurs.
  // @HostListener('click',['$event'])
  // show(){
  //   alert('hello')
  // }
}
