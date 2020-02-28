import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'goal-create',
    loadChildren: () => import('./public/pages/goal-create/goal-create.module').then( m => m.GoalCreatePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
