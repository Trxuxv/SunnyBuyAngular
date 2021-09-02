import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';
import { NgModule } from '@angular/core';
import { SignFormComponent } from './sign-form/sign-form.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
     children:
    [
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: SignFormComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
