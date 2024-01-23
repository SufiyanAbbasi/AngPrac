import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from "./item-list/item-list.component";
import { EmployeeComponent } from "./employee/employee.component";


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
  // prservewhitespace is used for spacing as same you give in html template like button in app.component.html
  //you can either give  preserveWhitespaces true or false
  preserveWhitespaces: true,
  //by giving this abc class is called
  viewProviders: [abc],
  imports: [CommonModule, RouterOutlet, ItemListComponent, EmployeeComponent]
})
export class AppComponent {
  title = 'myapp';


  // child to parent 
  Cdata: any;
  getData(val: any) {
    this.Cdata = val;
  }

  
  constructor(private abc: abc) {
    //component constructor called automatically due to upper component decorator but we have to declare upper abc class constuctor to call him
    console.log("component construtor called")


  }

  //  @hostlistener is a method type decorator that declares a DOM event to listen for and provides a handler method to run when that event occurs.
  // @HostListener('click',['$event'])
  // show(){
  //   alert('hello')
  // }

}
function getData(val: any, any: any) {
  throw new Error('Function not implemented.');
}

