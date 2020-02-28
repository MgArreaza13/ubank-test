import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Configs


// Interceptors


// Guards


// Services
import { GoalsService } from './services/goals.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  providers: [
    GoalsService
  ],
})
export class CoreModule {}
