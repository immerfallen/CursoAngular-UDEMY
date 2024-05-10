import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule, 
        MatTableModule,
        MatProgressSpinnerModule       
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule,  
        MatTableModule,
        MatProgressSpinnerModule      
    ],
    providers: [
        provideNativeDateAdapter()
    ]
})

export class AngularMaterialModule {

}