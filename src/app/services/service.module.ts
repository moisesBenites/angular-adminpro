import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetingsService, SidebarService, SharedService } from './index.service';

@NgModule({
  declarations: [],
  providers: [SetingsService, SidebarService, SharedService],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
