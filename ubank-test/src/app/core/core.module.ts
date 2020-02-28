import { UtilService } from './services/util.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Configs


// Interceptors


// Guards


// Services
import { GoalsService } from './services/goals.service';
import { RulesService } from './services/rules.service';
import { LoadingService } from './services/loader.service';
import { ToastService } from './services/toast.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeamsService } from './services/teams.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    TeamsService,
    GoalsService,
    RulesService,
    UtilService,
    LoadingService,
    ToastService
  ],
})
export class CoreModule {}
