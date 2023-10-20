
import { NumberFormatStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css'],
})
export class AdminClassesComponent  {
  
  @Input() filteredClasses: [] = []; 

  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  

}