import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule
  ]
})
export class LayoutsModule { }
