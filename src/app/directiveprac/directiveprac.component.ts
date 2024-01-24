import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-directiveprac',
  standalone: true,
  imports: [ CommonModule,RouterLink,RouterModule],
  templateUrl: './directiveprac.component.html',
  styleUrl: './directiveprac.component.css',
  preserveWhitespaces: true
})
export class DirectivepracComponent {
  // Structural Directive   
//  isLoggedIn:boolean = true;

 isLoggedIn:boolean = false;

 login(){
  this.isLoggedIn = true;
 }
 logout(){
  this.isLoggedIn = false;
 }


 //swicth case example
 name:string = "sufiyan"

 //@for directive
 employees: any[] = [
  {id:100, name:"Sufiyan"},
  {id:101, name:"SufiAbbasi"},
  {id:102, name:"SufiyanAbbasi"},
  {id:103, name:"Sufi"},
  {id:104, name:"Sikandar"},
  {id:105, name:"SufiyanTahir"},
  {id:106, name:"SufiyanTahirAbbasi"},
 ]

//  Attribute Directive 
//ngstyle
employees1: any[] = [
  {name:"Sufiyan" , country: "Pakitsan"},
  {name:"SufiAbbasi", country: "Pakistan"},
  {name:"SRK", country:"India"},
  {name:"Sufi", country:"Pakistan"},
  {name:"Amir", country: "India"},
  {name:"Albert", country:"UK"},
 ]
 getcolor(country:any){
   switch(country){
     case 'Pakistan':
     return 'green';
     case 'India':
     return 'blue';
     case 'UK':
     return 'red';
  }
  return null
}

//ngclass
}
