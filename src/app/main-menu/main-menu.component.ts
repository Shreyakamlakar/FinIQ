import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewService } from '../newService.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  host: {ngSkipHydration: 'true'}
})
export class MainMenuComponent {
  saveDisabled = true;
  

  constructor(private newFunction: NewService){

  }

  // const inputObservable = Observable.create(
  //   observer =>{

  //   }
  // )
  enableSave=this.newFunction.saveDisabled
  onNew(){
    
    this.enableSave = this.newFunction.onClickNew()
  }

  onSave(){
    console.log('Save Clicked')
  }
}
