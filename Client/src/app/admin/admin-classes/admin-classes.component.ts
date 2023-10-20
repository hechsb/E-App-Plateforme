
import { Component, OnInit } from '@angular/core';

import {AdminClassService} from '../../../Services/admin-classes.service'
import { AdminClasses } from 'src/app/admin-classes';

@Component({
  selector: 'app-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css'],
})
export class AdminClassesComponent  {
  // AdminClass: AdminClasses;

//   ngOnInit(): void{
//     this.getAllClasses();
//   }

//   constructor(private AdminClassService: AdminClassService) {
//     this.AdminClass = new AdminClass(); 
//     this.AdminClass.name = 'Your Class Name';
//     this.AdminClass.image = 'Your Class Description';
//   }
// }
}