import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe  } from './pipe/search-pipe/search-pipe.component';

@NgModule({
  declarations: [
    SearchPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchPipe,
  ]
})
export class SharedModule { }
