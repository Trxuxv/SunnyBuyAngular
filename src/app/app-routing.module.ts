import { ComputersComponent } from './pages/products/products-category/computers/containers/computers/computers.component';
import { HomePageComponent } from './pages/home/containers/home-page/home-page.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/containers';
import {AuthGuard} from './pages/auth/guards';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard], component: DashboardPageComponent },
  { path: 'homepage', pathMatch: 'full', component: HomePageComponent },
  { path: 'computers', pathMatch: 'full', component: ComputersComponent },
  
  // {
  //   path: 'typography',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
  // },
  // {
  //   path: 'tables',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  // },
  // {
  //   path: 'notification',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  // },
  // {
  //   path: 'ui',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  // },
  // {
  //   path: '404',
  //   component: NotFoundComponent
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
