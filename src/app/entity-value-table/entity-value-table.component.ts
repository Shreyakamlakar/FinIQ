import { NgIf } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewService } from '../newService.service';


@Component({
  selector: 'app-entity-value-table',
  standalone: true,
  imports: [NgIf],
  templateUrl: './entity-value-table.component.html',
  styleUrl: './entity-value-table.component.css',
  host: {ngSkipHydration: 'true'}
})
export class EntityValueTableComponent {

  valueDaysArr: {
                  No: number,
                  Value_Days: string 
                }[]=[]


  addToArray(num: number, Value: string){
    this.valueDaysArr.push({
      No: num,
      Value_Days: Value
    })
  }
  

  

  // constructor(private enableEntry: NewService){}
  
  // showInput = this.enableEntry.saveDisabled

  
  
}
