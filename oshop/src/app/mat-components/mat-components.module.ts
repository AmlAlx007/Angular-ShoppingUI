import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports:[
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MatComponentsModule { }
