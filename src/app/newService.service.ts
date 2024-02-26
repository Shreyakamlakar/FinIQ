import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { Observable } from "rxjs-compat";

@Injectable({
    providedIn:'root'
})
export class NewService{

    
    saveDisabled=true;

   
    

    onClickNew(){

        this.saveDisabled=false;
        console.log('New Clicked')

        return this.saveDisabled;
        
    }
}