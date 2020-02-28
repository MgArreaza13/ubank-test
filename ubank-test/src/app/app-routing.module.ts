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
  },
  {
    path: 'profile',
    loadChildren: () => import('./public/pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'rules-list',
    loadChildren: () => import('./public/pages/rules-list/rules-list.module').then( m => m.RulesListPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./public/pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'goals-details',
    loadChildren: () => import('./public/pages/goals-details/goals-details.module').then( m => m.GoalsDetailsPageModule)
  },
  {
    path: 'one-goal-details',
    loadChildren: () => import('./public/pages/one-goal-details/one-goal-details.module').then( m => m.OneGoalDetailsPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
