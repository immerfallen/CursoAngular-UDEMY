import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardComponent } from './card.component';
import {MatSliderModule} from '@angular/material/slider'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [   
    CardComponent,
    CardButtonComponent    
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ], exports: [
    CardButtonComponent, 
    CardComponent
  ]
})
export class CardModule { }
