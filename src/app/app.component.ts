import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EntityValueTableComponent } from './entity-value-table/entity-value-table.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EntityValueTableComponent,MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Entity_Value_Definition';
}
