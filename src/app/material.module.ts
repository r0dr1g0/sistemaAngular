import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
  ],
})
export class ClassMaterialModule { }
