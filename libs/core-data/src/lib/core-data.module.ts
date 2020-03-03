import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ProjectsService } from './projects/projects.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { NotificationService } from './notification/notification.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ProjectsService,

    AuthService,
    AuthGuard,
    NotificationService,
  ]
})
export class CoreDataModule { }
